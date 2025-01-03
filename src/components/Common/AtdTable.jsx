import PropTypes from "prop-types";

const Table = ({ columns, data, onEdit, onSave }) => {
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-sm text-left text-gray-400">
        <thead className="text-xs uppercase bg-gray-700 text-white">
          <tr>
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
        onClick={onSave}
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
      header: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
      render: PropTypes.func, // Optional renderer
    })
  ).isRequired,
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  onEdit: PropTypes.func.isRequired, // Callback for edit
  onSave: PropTypes.func.isRequired, // Callback for save
};

export default Table;
