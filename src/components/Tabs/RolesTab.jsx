import { useState } from "react";
import Table from "../Common/Table";

const RolesTab = () => {
  const [filteropen, setFilterOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedInstitute, setSelectedInstitute] = useState("");
  const [selectedRole, setSelectedRole] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const rowsPerPage = 10;

  const columns = [
    { field: "name", header: "Name" },
    { field: "role", header: "Role" },
    { field: "status", header: "Category Status" },
    { field: "institute", header: "Institute" },
  ];

  const data = [
    { id: 1, name: "Jane Smith", role: "Student", status: "Participant", institute: "ICS" },
    { id: 2, name: "Harshad Zagade", role: "Student", status: "Participant", institute: "AMDC" },
    { id: 3, name: "Sid Bhat", role: "Coordinator", status: "Participant", institute: "IOM" },
    { id: 4, name: "Alice Brown", role: "Student", status: "Participant", institute: "NIT" },
    { id: 5, name: "John Doe", role: "Volunteer", status: "Participant", institute: "IIT" },
    { id: 6, name: "Eve Wilson", role: "Coordinator", status: "Participant", institute: "MIT" },
    { id: 7, name: "Tom Green", role: "Student", status: "Participant", institute: "ICS" },
    { id: 8, name: "Sophia Grey", role: "Volunteer", status: "Participant", institute: "AMDC" },
    { id: 9, name: "Liam Black", role: "Coordinator", status: "Participant", institute: "IOM" },
    { id: 10, name: "Mia Blue", role: "Student", status: "Participant", institute: "NIT" },
    { id: 11, name: "Lucas Brown", role: "Volunteer", status: "Participant", institute: "IIT" },
    { id: 12, name: "Ella Scott", role: "Coordinator", status: "Participant", institute: "MIT" },
    { id: 13, name: "Noah Green", role: "Student", status: "Participant", institute: "ICS" },
    { id: 14, name: "Olivia Davis", role: "Volunteer", status: "Participant", institute: "AMDC" },
    { id: 15, name: "James Black", role: "Coordinator", status: "Participant", institute: "IOM" },
    { id: 16, name: "Isabella White", role: "Student", status: "Participant", institute: "NIT" },
    { id: 17, name: "Henry Wilson", role: "Volunteer", status: "Participant", institute: "IIT" },
    { id: 18, name: "Emily Blue", role: "Coordinator", status: "Participant", institute: "MIT" },
    { id: 19, name: "Jack Grey", role: "Student", status: "Participant", institute: "ICS" },
    { id: 20, name: "Amelia Scott", role: "Volunteer", status: "Participant", institute: "AMDC" },
  ];


  // Filter data dynamically based on search term, institute, and role
  const filteredData = data.filter((row) => {
    const matchesSearch = searchTerm
      ? row.name.toLowerCase().includes(searchTerm) ||
        row.role.toLowerCase().includes(searchTerm) ||
        row.status.toLowerCase().includes(searchTerm) ||
        row.institute.toLowerCase().includes(searchTerm)
      : true;

    const matchesInstitute = selectedInstitute
      ? row.institute === selectedInstitute
      : true;

    const matchesRole = selectedRole ? row.role === selectedRole : true;

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
                  <option value="ICS">ICS</option>
                  <option value="IIT">IIT</option>
                  <option value="AMDC">AMDC</option>
                  <option value="IOM">IOM</option>
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
                  <option value="Student">Student</option>
                  <option value="Volunteer">Volunteer</option>
                  <option value="Coordinator">Coordinator</option>
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
          <Table columns={columns} data={currentRows} />
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
