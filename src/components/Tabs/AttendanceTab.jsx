import { useEffect, useState } from "react";
import axios from "axios";
import Table from "../Common/AtdTable"; // Assuming Table component is in the same directory

const AttendanceTab = () => {
  const [institutes, setInstitutes] = useState([]);
  const [roles, setRoles] = useState([]);
  const [userData, setUserData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [attendance, setAttendance] = useState({});
  const [selectedInstitute, setSelectedInstitute] = useState("");
  const [selectedRole, setSelectedRole] = useState("");

  // Fetch institutes, roles, and users
  useEffect(() => {
    const fetchData = async () => {
      try {
        const [instituteRes, roleRes, userRes] = await Promise.all([
          axios.get("http://localhost:5500/api/institutes/"),
          axios.get("http://localhost:5500/api/roles/"),
          axios.get("http://localhost:5500/api/auth/allusers"),
        ]);
        setInstitutes(instituteRes.data);
        setRoles(roleRes.data);
        setUserData(userRes.data);
        setFilteredData(userRes.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  // Handle filters
  const handleInstituteChange = (e) => {
    const value = e.target.value;
    setSelectedInstitute(value);
    filterData(value, selectedRole);
  };

  const handleRoleChange = (e) => {
    const value = e.target.value;
    setSelectedRole(value);
    filterData(selectedInstitute, value);
  };

  const filterData = (institute, role) => {
    let filtered = userData;
    if (institute) filtered = filtered.filter((user) => user.instituteName === institute);
    if (role) filtered = filtered.filter((user) => user.role === role);
    setFilteredData(filtered);
  };

  // Handle attendance state
  const handleAttendanceChange = (id) => {
    setAttendance((prev) => ({
      ...prev,
      [id]: !prev[id], // Toggle attendance
    }));
  };

  const handleSaveAttendance = async () => {
    const attendanceData = Object.entries(attendance).map(([userId, isPresent]) => {
      
      const user = filteredData.find((u) => u.id === parseInt(userId));
      const Id = parseInt(userId);
      return {
        userId: Id,
        instituteId: user?.instituteId || null,
        date: new Date().toISOString().split("T")[0],
        addby: localStorage.getItem("currentUser") || "admin", // Replace with actual user
        status: isPresent ? "present" : "absent",
      };
    });

    console.log("Attendance Data:", attendanceData);
    

    try {
      await axios.post("http://localhost:5500/api/attendance", attendanceData);
      alert("Attendance saved successfully!");
    } catch (error) {
      console.error("Error saving attendance:", error);
      alert("Failed to save attendance.");
    }
  };

  // Prepare data for the table
  const tableData = filteredData.map((user) => ({
    id: user.id,
    name: `${user.firstName} ${user.lastName}`,
    email: user.email,
    instituteName: institutes.find((inst) => inst.id === user.instituteId)?.name || "",
    rollNo: user.rollNo,
  }));

  return (
    <div className="p-6 bg-white rounded-md shadow-md">
      <h1 className="text-2xl font-semibold mb-4">Attendance Tab</h1>

      <div className="flex flex-col md:flex-row gap-4 mb-4">
        <div>
          <label htmlFor="institute" className="block text-gray-700 mb-2">
            Institute
          </label>
          <select
            id="institute"
            value={selectedInstitute}
            onChange={handleInstituteChange}
            className="w-full bg-gray-100 rounded-md"
          >
            <option value="">Select an Institute</option>
            {institutes.map((inst) => (
              <option key={inst.id} value={inst.name}>
                {inst.name}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="role" className="block text-gray-700 mb-2">
            Role
          </label>
          <select
            id="role"
            value={selectedRole}
            onChange={handleRoleChange}
            className="w-full bg-gray-100 rounded-md"
          >
            <option value="">Select a Role</option>
            {roles.map((role) => (
              <option key={role.id} value={role.name}>
                {role.name}
              </option>
            ))}
          </select>
        </div>
      </div>

      <Table
        columns={[
          {
            field: "select",
            header: "Select",
            render: (row) => (
              <input
                type="checkbox"
                checked={!!attendance[row.id]}
                onChange={() => handleAttendanceChange(row.id)}
              />
            ),
          },
          { field: "name", header: "Name" },
          { field: "email", header: "Email" },
          { field: "instituteName", header: "Institute Name" },
          { field: "rollNo", header: "Roll No." },
        ]}
        data={tableData}
        onEdit={(row) => handleAttendanceChange(row.id)}
        onSave={handleSaveAttendance}
      />
    </div>
  );
};

export default AttendanceTab;
