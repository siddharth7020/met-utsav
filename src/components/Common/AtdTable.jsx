import { useState } from "react";


const AtdTable = () => {
    const Data = [
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
    const totalPages = Math.ceil(Data.length / rowsPerPage);

    // Get current rows to display
    const indexOfLastRow = currentPage * rowsPerPage;
    const indexOfFirstRow = indexOfLastRow - rowsPerPage;
    const currentRows = Data.slice(indexOfFirstRow, indexOfLastRow);

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
        // <div className="max-w-7xl mx-auto px-4 py-6">
        //     <h2 className="text-2xl font-bold mb-5">Student Attendance</h2>
        //     <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        //         <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        //             <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-white">
        //                 <tr>
        //                     <th scope="col" className="px-6 py-3">
        //                         Attendance
        //                     </th>
        //                     <th scope="col" className="px-6 py-3">
        //                         Name
        //                     </th>
        //                     <th scope="col" className="px-6 py-3">
        //                         Institute
        //                     </th>
        //                     <th scope="col" className="px-6 py-3">
        //                         Email
        //                     </th>
        //                     <th scope="col" className="px-6 py-3">
        //                         Event Name
        //                     </th>
        //                 </tr>
        //             </thead>
        //             {
        //                 Data.map((data, index) => (
        //                     <tbody key={data.id || index}>
        //                         <tr className="bg-white border-b   text-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 dark:hover:text-white">
        //                             <td className="w-4 p-4">
        //                                 <div className="flex items-center">
        //                                     <input id="checkbox-table-search-1" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
        //                                     <label htmlFor="checkbox-table-search-1" className="sr-only">checkbox</label>
        //                                 </div>
        //                             </td>
        //                             <th scope="row" className="px-6 py-4 ">
        //                                 {data.name}
        //                             </th>
        //                             <td className="px-6 py-4">
        //                                 {data.institute}
        //                             </td>
        //                             <td className="px-6 py-4">
        //                                 {data.email}
        //                             </td>
        //                             <td className="px-6 py-4">
        //                                 {data.eventName}
        //                             </td>
        //                         </tr>
        //                     </tbody>
        //                 ))
        //             }

        //         </table>
        //     </div>

        // </div>
        
           
            <div className="relative overflow-hidden shadow-md sm:rounded-lg">
                <div className="h-100 ">
                    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-white">
                            <tr>
                                <th scope="col" className="px-6 py-3">Attendance</th>
                                <th scope="col" className="px-6 py-3">Name</th>
                                <th scope="col" className="px-6 py-3">Institute</th>
                                <th scope="col" className="px-6 py-3">Roll no.</th>
                                <th scope="col" className="px-6 py-3">Event Name</th>
                            </tr>
                        </thead>
                        <tbody>
                            {currentRows.map((data) => (
                                <tr
                                    key={data.id}
                                    className="bg-white border-b text-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 dark:hover:text-white"
                                >
                                    <td className="w-4 p-4">
                                        <div className="flex items-center">
                                            <input
                                                id={`checkbox-${data.id}`}
                                                type="checkbox"
                                                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                            />
                                            <label
                                                htmlFor={`checkbox-${data.id}`}
                                                className="sr-only"
                                            >
                                                checkbox
                                            </label>
                                        </div>
                                    </td>
                                    <th scope="row" className="px-6 py-4">{data.name}</th>
                                    <td className="px-6 py-4">{data.institute}</td>
                                    <td className="px-6 py-4">{data.RollNo}</td>
                                    <td className="px-6 py-4">{data.eventName}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div className="flex justify-between items-center mt-4">
                    <button
                        onClick={handlePreviousPage}
                        disabled={currentPage === 1}
                        className={`px-4 py-2 text-white bg-blue-500 rounded ${currentPage === 1 ? "opacity-50 cursor-not-allowed" : "hover:bg-blue-600"}`}
                    >
                        Previous
                    </button>
                    <span className="text-gray-700">Page {currentPage} of {totalPages}</span>
                    <button
                        onClick={handleNextPage}
                        disabled={currentPage === totalPages}
                        className={`px-4 py-2 text-white bg-blue-500 rounded ${currentPage === totalPages ? "opacity-50 cursor-not-allowed" : "hover:bg-blue-600"}`}
                    >
                        Next
                    </button>
                </div>
            </div>
    )
}

export default AtdTable