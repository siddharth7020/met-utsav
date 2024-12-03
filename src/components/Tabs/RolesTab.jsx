import { useState } from "react";
import Table from "../Common/Table";

const RolesTab = () => {

  const [filteropen, setFilterOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");


  const handleFilterButtonClick = () => {
    setFilterOpen(true); // Show the filter form
  };

  const handleCloseForm = () => {
    setFilterOpen(false);
  };

  const columns = [
    { field: "checkBox", header: "Select" },
    { field: "name", header: "Name" },
    { field: "role", header: "Role" },
    { field: "status", header: "Category Status" },
    { field: "institute", header: "Institute" },
  ];

  const data = [
    { id: 1, checkBox: <input type="checkbox" />, name: "Jane Smith", role: "Student", status: "Participants", institute: "ICS" },
    { id: 2, checkBox: <input type="checkbox" />, name: "John Doe", role: "Volunteer", status: "Dance", institute: "ICS" },
    { id: 3, checkBox: <input type="checkbox" />, name: "Alice Johnson", role: "Coordinator", status: "Singing", institute: "ICS" },
    { id: 4, checkBox: <input type="checkbox" />, name: "Bob Brown", role: "Teacher", status: "Play", institute: "ICS" },
    { id: 5, checkBox: <input type="checkbox" />, name: "Emily Davis", role: "Student", status: "Painting", institute: "ITC" },
    { id: 6, checkBox: <input type="checkbox" />, name: "Michael Wilson", role: "Volunteer", status: "Cooking", institute: "GHI" },
    { id: 7, checkBox: <input type="checkbox" />, name: "Sophia Lee", role: "Student", status: "Debate", institute: "XYZ" },
    { id: 8, checkBox: <input type="checkbox" />, name: "James Brown", role: "Coordinator", status: "Photography", institute: "ICS" },
    { id: 9, checkBox: <input type="checkbox" />, name: "Olivia Clark", role: "Teacher", status: "Drama", institute: "ABC" },
    { id: 10, checkBox: <input type="checkbox" />, name: "Daniel Garcia", role: "Admin", status: "Volunteering", institute: "ICS" },
    { id: 11, checkBox: <input type="checkbox" />, name: "Ava Martinez", role: "Student", status: "Research", institute: "DEF" },
    { id: 12, checkBox: <input type="checkbox" />, name: "Lucas White", role: "Volunteer", status: "Presentation", institute: "XYZ" },
    { id: 13, checkBox: <input type="checkbox" />, name: "Mia Hernandez", role: "Coordinator", status: "Dance", institute: "GHI" },
    { id: 14, checkBox: <input type="checkbox" />, name: "Ethan Taylor", role: "Teacher", status: "Speech", institute: "ITC" },
    { id: 15, checkBox: <input type="checkbox" />, name: "Amelia Thomas", role: "Admin", status: "Drama", institute: "ICS" },
    { id: 16, checkBox: <input type="checkbox" />, name: "Benjamin Harris", role: "Student", status: "Music", institute: "XYZ" },
    { id: 17, checkBox: <input type="checkbox" />, name: "Charlotte Martinez", role: "Volunteer", status: "Workshop", institute: "ABC" },
    { id: 18, checkBox: <input type="checkbox" />, name: "William Moore", role: "Coordinator", status: "Science Fair", institute: "DEF" },
    { id: 19, checkBox: <input type="checkbox" />, name: "Sophia Lee", role: "Teacher", status: "Quiz", institute: "GHI" },
    { id: 20, checkBox: <input type="checkbox" />, name: "Emma Taylor", role: "Admin", status: "Seminar", institute: "ICS" },
    { id: 21, checkBox: <input type="checkbox" />, name: "Noah Brown", role: "Student", status: "Photography", institute: "XYZ" },
    { id: 22, checkBox: <input type="checkbox" />, name: "Isabella White", role: "Volunteer", status: "Painting", institute: "ITC" },
    { id: 23, checkBox: <input type="checkbox" />, name: "Jack Johnson", role: "Coordinator", status: "Cooking", institute: "DEF" },
    { id: 24, checkBox: <input type="checkbox" />, name: "Liam Harris", role: "Teacher", status: "Drama", institute: "GHI" },
    { id: 25, checkBox: <input type="checkbox" />, name: "Ella Garcia", role: "Admin", status: "Workshop", institute: "ICS" },
    { id: 26, checkBox: <input type="checkbox" />, name: "Alexander Thomas", role: "Student", status: "Debate", institute: "ABC" },
    { id: 27, checkBox: <input type="checkbox" />, name: "Harper Wilson", role: "Volunteer", status: "Research", institute: "XYZ" },
    { id: 28, checkBox: <input type="checkbox" />, name: "Oliver Brown", role: "Coordinator", status: "Quiz", institute: "GHI" },
    { id: 29, checkBox: <input type="checkbox" />, name: "Lily Martinez", role: "Teacher", status: "Science Fair", institute: "ITC" },
    { id: 30, checkBox: <input type="checkbox" />, name: "Mason Clark", role: "Admin", status: "Volunteering", institute: "DEF" },
    { id: 31, checkBox: <input type="checkbox" />, name: "Grace Taylor", role: "Student", status: "Speech", institute: "ABC" },
    { id: 32, checkBox: <input type="checkbox" />, name: "Henry Moore", role: "Volunteer", status: "Dance", institute: "ICS" },
    { id: 33, checkBox: <input type="checkbox" />, name: "Abigail White", role: "Coordinator", status: "Photography", institute: "XYZ" },
    { id: 34, checkBox: <input type="checkbox" />, name: "Jacob Harris", role: "Teacher", status: "Drama", institute: "GHI" },
    { id: 35, checkBox: <input type="checkbox" />, name: "Victoria Lee", role: "Admin", status: "Music", institute: "ICS" },
    { id: 36, checkBox: <input type="checkbox" />, name: "Daniel Johnson", role: "Student", status: "Seminar", institute: "DEF" },
    { id: 37, checkBox: <input type="checkbox" />, name: "Scarlett Martinez", role: "Volunteer", status: "Cooking", institute: "ITC" },
    { id: 38, checkBox: <input type="checkbox" />, name: "Matthew Wilson", role: "Coordinator", status: "Painting", institute: "ABC" },
    { id: 39, checkBox: <input type="checkbox" />, name: "Zoey Brown", role: "Teacher", status: "Photography", institute: "XYZ" },
    { id: 40, checkBox: <input type="checkbox" />, name: "David Garcia", role: "Admin", status: "Debate", institute: "ICS" },
    { id: 41, checkBox: <input type="checkbox" />, name: "Evelyn Martinez", role: "Student", status: "Science Fair", institute: "ITC" },
    { id: 42, checkBox: <input type="checkbox" />, name: "Samuel Lee", role: "Volunteer", status: "Volunteering", institute: "GHI" },
    { id: 43, checkBox: <input type="checkbox" />, name: "Natalie Moore", role: "Coordinator", status: "Research", institute: "DEF" },
    { id: 44, checkBox: <input type="checkbox" />, name: "Aiden Taylor", role: "Teacher", status: "Quiz", institute: "ICS" },
    { id: 45, checkBox: <input type="checkbox" />, name: "Ella Martinez", role: "Admin", status: "Workshop", institute: "XYZ" },
    { id: 46, checkBox: <input type="checkbox" />, name: "Andrew Brown", role: "Student", status: "Drama", institute: "ABC" },
    { id: 47, checkBox: <input type="checkbox" />, name: "Hannah White", role: "Volunteer", status: "Speech", institute: "ICS" },
    { id: 48, checkBox: <input type="checkbox" />, name: "Ryan Harris", role: "Coordinator", status: "Presentation", institute: "ITC" },
    { id: 49, checkBox: <input type="checkbox" />, name: "Sofia Johnson", role: "Teacher", status: "Singing", institute: "GHI" },
    { id: 50, checkBox: <input type="checkbox" />, name: "Gabriel Clark", role: "Admin", status: "Dance", institute: "ICS" },
  ];


  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 10;

  // Calculate total pages
  const totalPages = Math.ceil(data.length / rowsPerPage);

  // Get current rows to display
  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentRows = data.slice(indexOfFirstRow, indexOfLastRow);

  // Handle pagination
  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="bg-gray-200 h-full">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="flex flex-row justify-between mb-2">
          <h2 className="text-2xl font-bold mb-2">Roles</h2>
          <button className="lg:inline-block py-2 px-6 bg-gradient-to-r from-red-500 to-red-700 hover:from-red-700 hover:to-red-900 text-sm text-white font-bold rounded-xl transition duration-200" onClick={handleFilterButtonClick}>Filter</button>
        </div>
        {
          filteropen && (
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
                    onChange={(e) => setSearchTerm(e.target.value)}
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
                  >
                    <option value="">Select an Institute</option>
                    <option value="AF">
                      ICS
                    </option>
                    <option value="DZ">ITC</option>
                    <option value="AO">ABC</option>
                  </select>
                </div>

                {/* Roles Dropdown */}
                <div className="flex-1 mb-4 lg:mb-0">
                  <label className="text-black font-bold" htmlFor="event">
                    Roles
                  </label>
                  <select
                    className="w-full bg-gray-100 rounded-md border-gray-300 text-black px-2 py-1"
                    id="event"
                  >
                    <option value="">Select an Roles</option>
                    <option value="AF">Student</option>
                    <option value="DZ">Volunteer</option>
                    <option value="AO">Coordinator</option>
                  </select>
                </div>
              </div>

              {/* Buttons */}
              <div className="flex flex-col justify-center lg:flex-row lg:space-x-2">
                <button
                  className="lg:inline-block lg:mr-3 py-2 px-6 bg-gradient-to-r from-red-500 to-red-700 hover:from-red-700 hover:to-red-900 text-sm text-white font-bold rounded-xl transition duration-200"
                  type="submit"
                >
                  Submit
                </button>
                <button
                  className="lg:inline-block  lg:mr-3 py-2 px-6 bg-red-100 hover:bg-red-200 text-sm text-gray-900 font-bold rounded-xl transition duration-200"
                  onClick={handleCloseForm}
                >
                  Close
                </button>
              </div>
            </div>


          )
        }
        <div className="relative overflow-hidden shadow-md sm:rounded-lg">
          {/* Pass currentRows to the Table */}
          <Table columns={columns} data={currentRows} />
          <div className="flex justify-between items-center mt-4 flex-wrap">
            <button
              onClick={handlePreviousPage}
              disabled={currentPage === 1}
              className={`px-4 py-2 text-white bg-red-500 rounded ${currentPage === 1
                  ? "opacity-50 cursor-not-allowed"
                  : "hover:bg-red-600"
                }`}
            >
              Previous
            </button>
            <span className="text-gray-700 mt-2 lg:mt-0">
              Page {currentPage} of {totalPages}
            </span>
            <button
              onClick={handleNextPage}
              disabled={currentPage === totalPages}
              className={`px-4 py-2 text-white bg-red-500 rounded ${currentPage === totalPages
                  ? "opacity-50 cursor-not-allowed"
                  : "hover:bg-red-600"
                }`}
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
