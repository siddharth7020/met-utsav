import PropTypes from "prop-types";
import { useState } from "react";

const Table = ({ columns, data }) => {
  const [editRow, setEditRow] = useState(null); // State to track which row is being edited

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

  return (
    <div className="overflow-x-auto">
      <table className="w-full text-sm text-left rtl:text-right text-gray-400">
        <thead className="text-xs uppercase bg-gray-700 text-white">
          <tr>
            {columns.map((column) => (
              <th scope="col" className="px-6 py-3" key={column.field}>
                {column.header}
              </th>
            ))}
            <th className="px-6 py-3">Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row) => (
            <tr
              key={row.id}
              className="border-b text-gray-700 bg-gray-50 hover:bg-gray-600 hover:text-white"
            >
              {columns.map((column) => (
                <td className="px-6 py-4" key={column.field}>
                  {/* Editable Dropdown for Role */}
                  {editRow === row.id && column.field === "role" ? (
                    <select
                      defaultValue={row[column.field]}
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5"
                    >
                      <option value="Student">Student</option>
                      <option value="Volunteer">Volunteer</option>
                      <option value="Coordinator">Coordinator</option>
                    </select>
                  ) : editRow === row.id && column.field === "status" ? (
                    // Editable Dropdown for Category Status
                    <select
                      defaultValue={row[column.field]}
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5"
                    >
                      <option value="Register">Register</option>
                      <option value="Dance">Dance</option>
                      <option value="Singing">Singing</option>
                      <option value="Play">Play</option>
                    </select>
                  ) : (
                    row[column.field]
                  )}
                </td>
              ))}
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
