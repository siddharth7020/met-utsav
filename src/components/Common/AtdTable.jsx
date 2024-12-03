import { useState } from "react";
import PropTypes from 'prop-types';




const AtdTable = ({ searchTerm }) => {

    AtdTable.propTypes = {
        searchTerm: PropTypes.string.isRequired,
      };
    const data = [
        {
            id: 1,
            name: "John Doe",
            RollNo: "1201",
            status: "Present",
            institute: "ABC Institute",
            eventName: "Computer Science",
        },
        {
            id: 2,
            name: "Jane Smith",
            RollNo: "1202",
            status: "Absent",
            institute: "XYZ Institute",
            eventName: "Mathematics",
        },
        {
            id: 3,
            name: "Alice Johnson",
            RollNo: "1203",
            status: "Present",
            institute: "DEF Institute",
            eventName: "Physics",
        },
        {
            id: 4,
            name: "Bob Brown",
            RollNo: "1204",
            status: "Absent",
            institute: "GHI Institute",
            eventName: "Chemistry",
        },
        {
            id: 5,
            name: "John Doe",
            RollNo: "1201",
            status: "Present",
            institute: "ABC Institute",
            eventName: "Computer Science",
        },
        {
            id: 6,
            name: "Jane Smith",
            RollNo: "1202",
            status: "Absent",
            institute: "XYZ Institute",
            eventName: "Mathematics",
        },
        {
            id: 7,
            name: "Alice Johnson",
            RollNo: "1203",
            status: "Present",
            institute: "DEF Institute",
            eventName: "Physics",
        },
        {
            id: 8,
            name: "Bob Brown",
            RollNo: "1204",
            status: "Absent",
            institute: "GHI Institute",
            eventName: "Chemistry",
        },
        {
            id: 9,
            name: "John Doe",
            RollNo: "1201",
            status: "Present",
            institute: "ABC Institute",
            eventName: "Computer Science",
        },
        {
            id: 10,
            name: "Jane Smith",
            RollNo: "1202",
            status: "Absent",
            institute: "XYZ Institute",
            eventName: "Mathematics",
        },
        {
            id: 11,
            name: "Alice Johnson",
            RollNo: "1203",
            status: "Present",
            institute: "DEF Institute",
            eventName: "Physics",
        },
        {
            id: 12,
            name: "Bob Brown",
            RollNo: "1204",
            status: "Absent",
            institute: "GHI Institute",
            eventName: "Chemistry",
        },

    ]


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


    const filteredData = data.filter((item) =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );


    return (

        <>
            <div className="relative overflow-hidden shadow-md sm:rounded-lg">
                <div className="overflow-x-auto"> {/* Add overflow-x-auto here */}
                    <table className="w-full text-sm text-left rtl:text-right   text-gray-400">
                        <thead className="text-xs text-gray-700 uppercase   bg-gray-700  text-white">
                            <tr>
                                <th scope="col" className="px-6 py-3">Attendance</th>
                                <th scope="col" className="px-6 py-3">Name</th>
                                <th scope="col" className="px-6 py-3 ">Institute</th>
                                <th scope="col" className="px-6 py-3">Roll no.</th>
                                <th scope="col" className="px-6 py-3">Event Name</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredData.length > 0 ? (
                                currentRows.map((data) => (
                                    <tr
                                        key={data.id}
                                        className="bg-white border-b text-gray-700 hover:bg-gray-50  hover:bg-gray-600  hover:text-white"
                                    >
                                        <td className="w-4 p-4">
                                            <div className="flex items-center">
                                                <input
                                                    id={`checkbox-${data.id}`}
                                                    type="checkbox"
                                                    className="w-4 h-4 text-blue-600  border-gray-300 rounded focus:ring-blue-500  focus:ring-blue-600  ring-offset-gray-800  focus:ring-offset-gray-800 focus:ring-2  bg-gray-700  border-gray-600"
                                                />
                                                <label htmlFor={`checkbox-${data.id}`} className="sr-only">
                                                    checkbox
                                                </label>
                                            </div>
                                        </td>
                                        <th scope="row" className="px-6 py-4">{data.name}</th>
                                        <td className="px-6 py-4 ">{data.institute}</td>
                                        <td className="px-6 py-4">{data.RollNo}</td>
                                        <td className="px-6 py-4">{data.eventName}</td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                <td
                                  colSpan="3"
                                  className="border border-gray-400 px-4 py-2 text-center"
                                >
                                  No results found
                                </td>
                              </tr>
                            )}
                        </tbody>
                    </table>
                </div>
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

            {/* Save Button */}
            <div>
                <button
                    type="submit"
                    className="flex items-center mt-2 px-6 py-2 text-white bg-gradient-to-r from-red-500 to-red-700 hover:from-red-700 hover:to-red-900 text-sm font-bold rounded-xl transition duration-200 w-full sm:w-auto"
                >
                    Save Attendance
                </button>
            </div>
        </>


    )
}

export default AtdTable;
