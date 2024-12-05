import PropTypes from "prop-types";
import { useState } from "react";

const Table = ({ columns, data }) => {
  const [editRow, setEditRow] = useState(null); // State to track which row is being edited
  const [attendance, setAttendance] = useState(
    Object.fromEntries(data.map((row) => [row.id, row.attendance === "present"])) // Initialize attendance state based on data
  );

  Table.propTypes = {
    columns: PropTypes.arrayOf(
      PropTypes.shape({
        field: PropTypes.string.isRequired,
        header: PropTypes.string.isRequired,
      })
    ).isRequired,
    data: PropTypes.arrayOf(PropTypes.object).isRequired,
  };

  const handleEditClick = (rowId) => {
    setEditRow(rowId); // Set the ID of the row being edited
  };

  const handleSaveClick = () => {
    setEditRow(null); // Exit edit mode
  };

  const handleAttendanceChange = (rowId) => {
    setAttendance((prev) => ({
      ...prev,
      [rowId]: !prev[rowId],
    }));
  };

  return (
    <div className="overflow-x-auto">
      <table className="w-full text-sm text-left rtl:text-right text-gray-400">
        <thead className="text-xs uppercase bg-gray-700 text-white">
          <tr>
            <th className="px-6 py-3">Attendance</th>
            {columns.map((column) =>
              column.field !== "attendance" ? ( 
                <th scope="col" className="px-6 py-3" key={column.field}>
                  {column.header}
                </th>
              ) : null
            )}
            <th className="px-6 py-3">Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row) => (
            <tr
              key={row.id}
              className="border-b text-gray-700 bg-gray-50 hover:bg-gray-600 hover:text-white"
            >
              {/* Attendance Checkbox */}
              <td className="px-6 py-4">
                <input
                  type="checkbox"
                  checked={attendance[row.id]}
                  onChange={() => handleAttendanceChange(row.id)}
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
                />
              </td>

              {/* Table Data */}
              {columns.map((column) =>
                column.field !== "attendance" ? ( // Avoid duplicate attendance column rendering
                  <td className="px-6 py-4" key={column.field}>
                    {row[column.field]}
                  </td>
                ) : null
              )}

              {/* Actions */}
              <td className="px-6 py-4">
                {editRow === row.id ? (
                  <button
                    onClick={handleSaveClick}
                    className="px-4 py-2 text-white bg-gray-500 rounded hover:bg-red-600"
                  >
                    Save
                  </button>
                ) : (
                  <button
                    onClick={() => handleEditClick(row.id)}
                    className="px-4 py-2 text-white bg-red-500 rounded hover:bg-red-600"
                  >
                    Edit
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
