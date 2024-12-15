import PropTypes from "prop-types";
import { useState } from "react";
import axios from "axios";

const Table = ({ columns, data, roles, categories }) => {
  const [editRow, setEditRow] = useState(null); // State to track which row is being edited
  const [updatedData, setUpdatedData] = useState({ role: "", category: "" }); // Track role and category changes

  Table.propTypes = {
    columns: PropTypes.arrayOf(
      PropTypes.shape({
        field: PropTypes.string.isRequired,
        header: PropTypes.string.isRequired,
      })
    ).isRequired,
    data: PropTypes.arrayOf(PropTypes.object).isRequired,
    roles: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
      })
    ),
    categories: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
      })
    ),
  };

  const handleEditClick = (rowId) => {
    setEditRow(rowId); // Set the ID of the row being edited
  };

  const handleSaveClick = async (rowId) => {
    try {
      // Send API request to update role and category
      await axios.put(`http://utsav.hello.met.edu/api/auth/${rowId}`, {
        role: updatedData.role,
        categoryId: updatedData.category,
      });

      // Reset editing state
      setEditRow(null);

      alert("Role and category updated successfully!");
    } catch (error) {
      console.error("Error updating role and category:", error);
      alert("Failed to update role and category.");
    }
  };

  const handleInputChange = (field, value) => {
    setUpdatedData((prevState) => ({ ...prevState, [field]: value }));
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
                      onChange={(e) => handleInputChange("role", e.target.value)}
                    >
                      {roles.map((role) => (
                        <option key={role.id} value={role.name}>
                          {role.name}
                        </option>
                      ))}
                    </select>
                  ) : editRow === row.id && column.field === "category" ? (
                    // Editable Dropdown for Category Status
                    <select
                      defaultValue={row[column.field]}
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5"
                      onChange={(e) =>
                        handleInputChange("category", e.target.value)
                      }
                    >
                      {categories.map((category) => (
                        <option key={category.id} value={category.id}>
                          {category.name}
                        </option>
                      ))}
                    </select>
                  ) : (
                    row[column.field]
                  )}
                </td>
              ))}
              <td className="px-6 py-4">
                {editRow === row.id ? (
                  <button
                    onClick={() => handleSaveClick(row.id)}
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
