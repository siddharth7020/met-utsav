import { useEffect, useState } from "react";
import axios from "axios";
import Table from "../Common/AtdTable"; // Adjust the path based on your project structure
import Swal from "sweetalert2";


const AttendanceTab = () => {
  const [institutes, setInstitutes] = useState([]);
  const [userData, setUserData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [attendance, setAttendance] = useState({});
  const [selectedInstitute, setSelectedInstitute] = useState("");
  const [allSelected, setAllSelected] = useState(false);
  const [searchQuery, setSearchQuery] = useState(""); // State to store search query
  const [selectedDate, setSelectedDate] = useState(""); // State to store the selected date
  const [isAttendanceTaken, setIsAttendanceTaken] = useState(false);
  const [existingAttendance, setExistingAttendance] = useState({});


  // Fetch data for institutes, roles, and users
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch logged-in user data from localStorage
        const loggedInUser = JSON.parse(localStorage.getItem("user"));
        if (!loggedInUser) {
          alert("User not logged in!");
          Swal.fire({
            icon: "error",
            title: "Error",
            text: "User not logged in!",
          });
          return;
        }

        const [instituteRes, userRes] = await Promise.all([
          axios.get("https://utsav.met.edu/api/institutes/"),
          axios.get("https://utsav.met.edu/api/auth/allusers"),
        ]);

        setInstitutes(instituteRes.data);

        // Filter users based on logged-in user role and institute
        let filteredUsers = userRes.data.filter(
          (user) => user.role === "Volunteer" || user.role === "Participant"
        );

        if (loggedInUser.role === "Volunteer" || loggedInUser.role === "Coordinator") {
          filteredUsers = filteredUsers.filter(
            (user) => user.instituteId === loggedInUser.instituteId
          );
        }

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

    if (institute) {
      filtered = filtered.filter((user) => {
        const instituteDetail = institutes.find((inst) => inst.name === institute);
        return instituteDetail && user.instituteId === instituteDetail.id;
      });
    }

    if (query) {
      filtered = filtered.filter((user) =>
        `${user.firstName} ${user.lastName} ${user.email}`.toLowerCase().includes(query.toLowerCase())
      );
    }

    console.log("Filtered Data:", filtered);
    setFilteredData(filtered);
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

  // Fetch attendance for selected date and institute
  const checkAttendance = async (date, displayAttendanceCallback) => {
    console.log("Date Selected:", date);


    try {
      const loggedInUser = JSON.parse(localStorage.getItem("user"));

      if (!loggedInUser) {
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "User not logged in!",
        });
        return false;
      }

      const response = await axios.get("https://utsav.met.edu/api/attendance", {
        params: {
          instituteId: loggedInUser.instituteId,
        },
      });

      const attendanceData = response.data.attendanceRecords;
      console.log("Full Attendance Data:", attendanceData);

      // Ensure date format consistency
      const formatDate = (inputDate) => {
        const dateObj = new Date(inputDate);
        return dateObj.toISOString().split("T")[0];
      };

      const formattedSelectedDate = formatDate(date);
      console.log("Formatted Selected Date:", formattedSelectedDate);

      // Filter attendance for the selected date
      const filteredAttendance = attendanceData.filter(
        (record) => formatDate(record.date) === formattedSelectedDate
      );

      // Store already marked records
      const existingRecords = {};
      filteredAttendance.forEach(record => {
        existingRecords[record.userId] = record.status === "present";
      });
      setExistingAttendance(existingRecords);

      console.log("Filtered Attendance:", filteredAttendance);

      if (filteredAttendance.length > 0) {
        if (typeof displayAttendanceCallback === "function") {
          displayAttendanceCallback(filteredAttendance);
        }

        // Disable checkboxes
        const checkboxes = document.querySelectorAll("input[type='checkbox']");
        checkboxes.forEach((checkbox) => {
          checkbox.disabled = true;
        });

        return true;
      } else {
        // Enable checkboxes if no attendance is found
        const checkboxes = document.querySelectorAll("input[type='checkbox']");
        checkboxes.forEach((checkbox) => {
          checkbox.disabled = false;
        });

        Swal.fire({
          icon: "info",
          title: "No Attendance",
          text: "No attendance records found for the selected date. You can mark attendance now.",
        });

        return false;
      }
    } catch (error) {
      console.error("Error fetching attendance data:", error);
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Failed to fetch attendance data. Please try again later.",
      });
      return false;
    }
  };



  const handleDateChange = async (e) => {
    const date = e.target.value;
    setSelectedDate(date);

    if (!date) return;

    const alreadyTaken = await checkAttendance(date);

    console.log("Attendance Taken:", alreadyTaken);
    console.log("Filtered Data After Attendance Check:", filteredData);

    if (alreadyTaken) {
      const presentUsers = userData.filter((user) =>
        Object.keys(attendance).includes(user.id.toString())
      );
      console.log("Present Users:", presentUsers);
      setFilteredData(presentUsers);
    } else {
      filterData(selectedInstitute, searchQuery); // Reset data
    }

    setIsAttendanceTaken(alreadyTaken); // Update button state
  };



  // Save attendance data
  const handleSaveAttendance = async () => {
    try {
      // Retrieve user data from local storage (assuming the user data is stored as a JSON string)
      const user = JSON.parse(localStorage.getItem("user"));

      // Combine firstName and lastName to create full name
      const addedBy = `${user.firstName} ${user.lastName}`;

      const newAttendance = Object.entries(attendance).filter(([id]) => !(id in existingAttendance));
      const selectedUsers = newAttendance.map(([id, isSelected]) => ({
        userId: parseInt(id),
        instituteId: user.instituteId,
        date: selectedDate,
        status: isSelected ? "present" : "absent",
        addby: addedBy,
      }));

      // Log the payload to verify it's correct
      console.log("Attendance Payload:", selectedUsers);

      const response = await axios.post("https://utsav.met.edu/api/attendance", selectedUsers);

      // Check the response
      console.log("API Response:", response);

      // alert("Attendance saved successfully!");
      Swal.fire({
        icon: "success",
        title: "Success",
        text: "Attendance saved successfully!",
      });
    } catch (error) {
      console.error("Error saving attendance:", error);

      // Log the full error response
      if (error.response) {
        console.error("Error Response:", error.response.data);
      } else {
        console.error("Error Message:", error.message);
      }

      // alert("Failed to save attendance.");
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Attendance already taken!",
      });
    }
  };

  // console.log(handleSaveAttendance);


  // Prepare data for the table
  const tableData = filteredData.map((user) => ({
    id: user.id,
    name: `${user.firstName} ${user.lastName}`,
    instituteName: institutes.find((inst) => inst.id === user.instituteId)?.name || "",
    rollNo: user.rollNo || "N/A", // Fallback if rollNo is missing
    // if attendance already taken then show Status column
    status: isAttendanceTaken ? (attendance[user.id] ? "present" : "absent") : "",
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
            onChange={handleDateChange}
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
                disabled={isAttendanceTaken}
              />
            ),
            render: (row) => (
              <input
                type="checkbox"
                checked={!!attendance[row.id]}
                onChange={() => handleAttendanceChange(row.id)}
                disabled={existingAttendance[row.id] !== undefined} // Disable if already marked
              />
            ),
          },

          { field: "id", header: "ID" },
          { field: "name", header: "Name" },
          { field: "rollNo", header: "Roll No." },
          { field: "instituteName", header: "Institute" },
          { field: "status", header: "Status" },
          { field: "pg_class", header: "Year" },
        ]}
        data={tableData}
      />
      <button
        onClick={handleSaveAttendance}
        disabled={isAttendanceTaken}
        className={`mt-4 p-2 rounded-md ${isAttendanceTaken
          ? "bg-gray-400 cursor-not-allowed"
          : "bg-red-500 text-white hover:bg-blue-600"
          }`}
      >
        {isAttendanceTaken ? "Already Taken" : "Save Attendance"}
      </button>
    </div>
  );
};

export default AttendanceTab;
