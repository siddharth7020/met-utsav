import PropTypes from "prop-types";
import { useState } from "react";

const Table = ({ columns, data, onEdit, onSave }) => {
  const [attendance, setAttendance] = useState(
    Object.fromEntries(data.map((row) => [row.id, false])) // Initialize attendance as false for all
  );
  const [selectAll, setSelectAll] = useState(false); // State for "Select All"

  // Toggle attendance for all rows
  const handleSelectAll = () => {
    const newSelectAll = !selectAll;
    setSelectAll(newSelectAll);
    const updatedAttendance = Object.fromEntries(data.map((row) => [row.id, newSelectAll]));
    setAttendance(updatedAttendance);
  };

  // Toggle attendance for a specific row
  const handleAttendanceChange = (rowId) => {
    setAttendance((prev) => ({
      ...prev,
      [rowId]: !prev[rowId],
    }));
  };

  // Save attendance data
  const handleSaveAttendance = () => {
    const selectedRows = Object.entries(attendance)
      .filter(([, isPresent]) => isPresent)
      .map(([id]) => id);

    if (selectedRows.length === 0) {
      alert("No attendance data selected to save.");
      return;
    }

    onSave(attendance); // Trigger save callback
  };

  return (
    <div className="overflow-x-auto">
      <table className="w-full text-sm text-left text-gray-400">
        <thead className="text-xs uppercase bg-gray-700 text-white">
          <tr>
            <th className="px-6 py-3">
              <input
                type="checkbox"
                checked={selectAll}
                onChange={handleSelectAll}
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded"
              />
            </th>
            {columns.map((column) => (
              <th scope="col" className="px-6 py-3" key={column.field}>
                {column.header}
              </th>
            ))}
            <th scope="col" className="px-6 py-3">Edit</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row) => (
            <tr key={row.id} className="border-b bg-gray-50 hover:bg-gray-600 hover:text-white">
              {/* Checkbox for each row */}
              <td className="px-6 py-4">
                <input
                  type="checkbox"
                  checked={attendance[row.id] || false}
                  onChange={() => handleAttendanceChange(row.id)}
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded"
                />
              </td>

              {/* Render table data */}
              {columns.map((column) => (
                <td className="px-6 py-4" key={column.field}>
                  {column.render ? column.render(row) : row[column.field]}
                </td>
              ))}

              {/* Edit button */}
              <td className="px-6 py-4">
                <button
                  onClick={() => onEdit(row)}
                  className="px-2 py-1 bg-green-500 text-white rounded hover:bg-green-600"
                >
                  Edit
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button
        onClick={handleSaveAttendance}
        className="mt-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
      >
        Save Attendance
      </button>
    </div>
  );
};

Table.propTypes = {
  columns: PropTypes.arrayOf(
    PropTypes.shape({
      field: PropTypes.string.isRequired,
      header: PropTypes.string.isRequired,
      render: PropTypes.func, // Optional renderer
    })
  ).isRequired,
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  onEdit: PropTypes.func.isRequired, // Callback for edit
  onSave: PropTypes.func.isRequired, // Callback for save
};

export default Table;
