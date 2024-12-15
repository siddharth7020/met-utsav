import { useState, useEffect } from "react";
import Table from "../Common/Table";
import axios from "axios";

const RolesTab = () => {
  const [filteropen, setFilterOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedInstitute, setSelectedInstitute] = useState("");
  const [selectedRole, setSelectedRole] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const [users, setUsers] = useState([]);
  const [categories, setCategories] = useState([]);
  const [institutes, setInstitutes] = useState([]);
  const [roles, setRoles] = useState([]);

  const rowsPerPage = 10;

  useEffect(() => {
    // Fetch Users, Categories, and Roles
    axios.get("http://utsav.hello.met.edu/api/auth/allusers")
      .then(response => setUsers(response.data))
      .catch(error => console.error("Error fetching users:", error));

    axios.get("http://utsav.hello.met.edu/api/categories")
      .then(response => setCategories(response.data))
      .catch(error => console.error("Error fetching categories:", error));

    axios.get("http://utsav.hello.met.edu/api/institutes/")
      .then(response => setInstitutes(response.data))
      .catch(error => console.error("Error fetching institutes:", error));

    axios.get("http://utsav.hello.met.edu/api/roles/")
      .then(response => setRoles(response.data))
      .catch(error => console.error("Error fetching roles:", error));
  }, []);


  const columns = [
    { field: "name", header: "Name" }, // Use the computed fullName field
    { field: "role", header: "Role" },
    { field: "category", header: "Category Status" },
    { field: "institute", header: "Institute" }, // Use the computed instituteName field
  ];

  // Combine name fields
  const formattedUsers = users.map(user => ({
    ...user,
    name: `${user.firstName} ${user.middleName || ""} ${user.lastName || ""}`.trim(),
    institute: user.Institute?.name || "",
    category: user.Category?.name || "",
  }));


  // Filter data dynamically based on search term, institute, and role
  const filteredData = formattedUsers.filter((user) => {
    const matchesSearch = searchTerm
      ? user.name.toLowerCase().includes(searchTerm) ||
      user.role.toLowerCase().includes(searchTerm) ||
      user.institute.toLowerCase().includes(searchTerm)
      : true;

    const matchesInstitute = selectedInstitute
      ? user.institute === selectedInstitute
      : true;

    const matchesRole = selectedRole ? user.role === selectedRole : true;

    return matchesSearch && matchesInstitute && matchesRole;
  });

  // Paginate filtered data
  const totalPages = Math.ceil(filteredData.length / rowsPerPage);
  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentRows = filteredData.slice(indexOfFirstRow, indexOfLastRow);

  const handleFilterButtonClick = () => setFilterOpen(true);
  const handleCloseForm = () => setFilterOpen(false);

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value.toLowerCase());
    setCurrentPage(1); // Reset to page 1 when search changes
  };

  const handleInstituteChange = (e) => {
    setSelectedInstitute(e.target.value);
    setCurrentPage(1); // Reset to page 1 when filter changes
  };

  const handleRoleChange = (e) => {
    setSelectedRole(e.target.value);
    setCurrentPage(1); // Reset to page 1 when filter changes
  };

  return (
    <div className="bg-gray-200 h-full">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="flex flex-row justify-between mb-2">
          <h2 className="text-2xl font-bold mb-2">Roles</h2>
          <button
            className="lg:inline-block py-2 px-6 bg-gradient-to-r from-red-500 to-red-700 hover:from-red-700 hover:to-red-900 text-sm text-white font-bold rounded-xl transition duration-200"
            onClick={handleFilterButtonClick}
          >
            Filter
          </button>
        </div>

        {filteropen && (
          <div className="flex flex-col bg-white rounded-lg p-4 shadow-sm mb-2">
            <div className="flex flex-col lg:flex-row lg:space-x-4 mb-4">
              {/* Search Input */}
              <div className="flex-1 mb-4 lg:mb-0">
                <label className="text-black font-bold" htmlFor="search">
                  Search
                </label>
                <input
                  type="text"
                  id="search"
                  placeholder="Search..."
                  className="w-full bg-gray-100 rounded-md border-gray-300 text-black px-2 py-1"
                  value={searchTerm}
                  onChange={handleSearchChange}
                />
              </div>

              {/* Institute Dropdown */}
              <div className="flex-1 mb-4 lg:mb-0">
                <label className="text-black font-bold" htmlFor="institute">
                  Institute
                </label>
                <select
                  className="w-full bg-gray-100 rounded-md border-gray-300 text-black px-2 py-1"
                  id="institute"
                  value={selectedInstitute}
                  onChange={handleInstituteChange}
                >
                  <option value="">Select an Institute</option>
                  {institutes.map((institute) => (
                    <option key={institute.id} value={institute.name}>
                      {institute.name}
                    </option>
                  ))}
                </select>
              </div>

              {/* Roles Dropdown */}
              <div className="flex-1 mb-4 lg:mb-0">
                <label className="text-black font-bold" htmlFor="role">
                  Roles
                </label>
                <select
                  className="w-full bg-gray-100 rounded-md border-gray-300 text-black px-2 py-1"
                  id="role"
                  value={selectedRole}
                  onChange={handleRoleChange}
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

            <div className="flex flex-col justify-center lg:flex-row lg:space-x-2">
              <button
                className="lg:inline-block lg:mr-3 py-2 px-6 bg-gradient-to-r from-red-500 to-red-700 hover:from-red-700 hover:to-red-900 text-sm text-white font-bold rounded-xl transition duration-200"
                onClick={handleCloseForm}
              >
                Close
              </button>
            </div>
          </div>
        )}

        <div className="relative overflow-hidden shadow-md sm:rounded-lg">
          <Table
            columns={columns}
            data={currentRows}
            roles={roles} // Pass roles for dropdown
            categories={categories} // Pass categories for dropdown
          />

          <div className="flex justify-between items-center mt-4 flex-wrap">
            <button
              onClick={handlePreviousPage}
              disabled={currentPage === 1}
              className={`px-4 py-2 text-white bg-red-500 rounded ${currentPage === 1 ? "opacity-50 cursor-not-allowed" : "hover:bg-red-600"}`}
            >
              Previous
            </button>
            <span className="text-gray-700 mt-2 lg:mt-0">
              Page {currentPage} of {totalPages}
            </span>
            <button
              onClick={handleNextPage}
              disabled={currentPage === totalPages}
              className={`px-4 py-2 text-white bg-red-500 rounded ${currentPage === totalPages ? "opacity-50 cursor-not-allowed" : "hover:bg-red-600"}`}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RolesTab;
