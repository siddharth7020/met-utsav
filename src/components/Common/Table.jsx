import PropTypes from 'prop-types';

const Table = ({ columns, data }) => {

    Table.propTypes = {
        columns: PropTypes.arrayOf(PropTypes.shape({
            field: PropTypes.string.isRequired,
            header: PropTypes.string.isRequired,
        })).isRequired,
        data: PropTypes.arrayOf(PropTypes.object).isRequired,
    };


    return (
        
            <div className="overflow-x-auto">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-white">
                        <tr>
                            {columns.map((column) => (
                                <th scope="col" className="px-6 py-3" key={column.field}>
                                    {column.header}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((row, rowIndex) => (
                            <tr
                                key={row.id || rowIndex}
                                className="bg-white border-b text-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 dark:hover:text-white"
                            >
                                {columns.map((column) => (
                                    <td className="px-6 py-4" key={column.field}>
                                        {column.field === 'Checkbox' ? (
                                            <div className="flex items-center">
                                                <input
                                                    type="checkbox"
                                                    defaultChecked={row[column.field] || false}
                                                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                                />
                                            </div>
                                        ) : (
                                            row[column.field]
                                        )}
                                    </td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
    );
};

export default Table;
