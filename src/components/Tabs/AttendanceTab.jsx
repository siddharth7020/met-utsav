import { useEffect, useState } from "react";
import axios from "axios";
import Table from "../Common/AtdTable"; // Adjust the path based on your project structure

const AttendanceTab = () => {
  const [institutes, setInstitutes] = useState([]);
  const [userData, setUserData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [attendance, setAttendance] = useState({});
  const [selectedInstitute, setSelectedInstitute] = useState("");
  const [allSelected, setAllSelected] = useState(false);
  const [searchQuery, setSearchQuery] = useState(""); // State to store search query
  const [selectedDate, setSelectedDate] = useState(""); // State to store the selected date

  // Fetch data for institutes, roles, and users
  useEffect(() => {
    const fetchData = async () => {
      try {
        const [instituteRes, userRes] = await Promise.all([
          axios.get("http://utsav.hello.met.edu/api/institutes/"),
          axios.get("http://utsav.hello.met.edu/api/auth/allusers"),
        ]);
        setInstitutes(instituteRes.data);

        // Filter the users to include only "Volunteer" and "Participant"
        const filteredUsers = userRes.data.filter(
          (user) => user.role === "Volunteer" || user.role === "Participant"
        );
        setUserData(filteredUsers);
        setFilteredData(filteredUsers);

        // Initialize attendance state
        const initialAttendance = filteredUsers.reduce((acc, user) => {
          acc[user.id] = false;
          return acc;
        }, {});
        setAttendance(initialAttendance);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  // Handle Institute filter
  const handleInstituteChange = (e) => {
    const value = e.target.value;
    setSelectedInstitute(value);
    filterData(value, searchQuery);
  };

  // Handle search query change
  const handleSearchChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    filterData(selectedInstitute, query);
  };

  // Filter data based on Institute and Search query
  const filterData = (institute, query) => {
    let filtered = userData;

    if (institute) filtered = filtered.filter((user) => user.instituteName === institute);

    if (query) {
      filtered = filtered.filter((user) =>
        `${user.firstName} ${user.lastName} ${user.email}`.toLowerCase().includes(query.toLowerCase())
      );
    }

    setFilteredData(filtered);

    // Update attendance state for filtered data
    const updatedAttendance = {};
    filtered.forEach((user) => {
      updatedAttendance[user.id] = attendance[user.id] || false;
    });
    setAttendance(updatedAttendance);
  };

  // Toggle "Select All" attendance
  const handleSelectAll = () => {
    const updatedAttendance = {};
    filteredData.forEach((user) => {
      updatedAttendance[user.id] = !allSelected;
    });
    setAttendance(updatedAttendance);
    setAllSelected(!allSelected);
  };

  // Toggle individual attendance
  const handleAttendanceChange = (id) => {
    setAttendance((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  // Save attendance data
  // Save attendance data
const handleSaveAttendance = async () => {
  try {
    // Retrieve user data from local storage (assuming the user data is stored as a JSON string)
    // const user = JSON.parse(localStorage.getItem("user"));

    // Combine firstName and lastName to create full name
    // const addedBy = `${user.firstName} ${user.lastName}`;

    // Create the attendance payload
    const selectedUsers = Object.entries(attendance).map(([id, isSelected]) => ({
      userId: parseInt(id),
      date: selectedDate, // Save the selected date
      status: isSelected ? "present" : "absent", // Mark "present" or "absent" based on the checkbox
      addby: "addedBy", // Add the combined name in addBy field
    }));

    // Log the payload to verify it's correct
    console.log("Attendance Payload:", selectedUsers);

    const response = await axios.post("http://localhost:5500/api/attendance", selectedUsers);

    // Check the response
    console.log("API Response:", response);

    alert("Attendance saved successfully!");
  } catch (error) {
    console.error("Error saving attendance:", error);

    // Log the full error response
    if (error.response) {
      console.error("Error Response:", error.response.data);
    } else {
      console.error("Error Message:", error.message);
    }

    alert("Failed to save attendance.");
  }
};

  // console.log(handleSaveAttendance);
  

  // Prepare data for the table
  const tableData = filteredData.map((user) => ({
    id: user.id,
    name: `${user.firstName} ${user.lastName}`,
    instituteName: institutes.find((inst) => inst.id === user.instituteId)?.name || "",
    rollNo: user.rollNo || "N/A", // Fallback if rollNo is missing
    pg_class: user.pg_class || "N/A", 
  }));

  return (
    <div className="p-6 bg-white rounded-md shadow-md">
      <h1 className="text-2xl font-semibold mb-4">Attendance Tab</h1>

      {/* Filters */}
      <div className="flex flex-col md:flex-row gap-4 mb-4">
        <div>
          <label htmlFor="search" className="block text-gray-700 mb-2">
            Search
          </label>
          <input
            type="text"
            id="search"
            value={searchQuery}
            onChange={handleSearchChange}
            className="w-full p-2 bg-gray-100 rounded-md"
            placeholder="Search by Name or Email"
          />
        </div>
        <div>
          <label htmlFor="institute" className="block text-gray-700 mb-2">
            Institute
          </label>
          <select
            id="institute"
            value={selectedInstitute}
            onChange={handleInstituteChange}
            className="w-full p-2 bg-gray-100 rounded-md"
          >
            <option value="">Select an Institute</option>
            {institutes.map((inst) => (
              <option key={inst.id} value={inst.name}>
                {inst.name}
              </option>
            ))}
          </select>
        </div>
        {/* Date Picker */}
        <div>
          <label htmlFor="date" className="block text-gray-700 mb-2">
            Select Date
          </label>
          <input
            type="date"
            id="date"
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
            className="w-full p-2 bg-gray-100 rounded-md"
          />
        </div>
      </div>

      {/* Table */}
      <Table
        columns={[
          {
            field: "select",
            header: (
              <input
                type="checkbox"
                checked={allSelected}
                onChange={handleSelectAll}
              />
            ),
            render: (row) => (
              <input
                type="checkbox"
                checked={!!attendance[row.id]}
                onChange={() => handleAttendanceChange(row.id)}
              />
            ),
          },
          { field: "name", header: "Name" },
          { field: "rollNo", header: "Roll No." },
          { field: "instituteName", header: "Institute" },
          { field: "pg_class", header: "Year" },
        ]}
        data={tableData}
        onEdit={() => {}}
        onSave={handleSaveAttendance}
      />
    </div>
  );
};

export default AttendanceTab;
