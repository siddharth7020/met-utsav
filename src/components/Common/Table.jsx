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
                <table className="w-full text-sm text-left rtl:text-right  text-gray-400">
                    <thead className="text-xs  uppercase  bg-gray-700 text-white">
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
                                className=" border-b text-gray-700 bg-gray-50  hover:bg-gray-600 hover:text-white"
                            >
                                {columns.map((column) => (
                                    <td className="px-6 py-4" key={column.field}>
                                        {column.field === 'Checkbox' ? (
                                            <div className="flex items-center">
                                                <input
                                                    type="checkbox"
                                                    defaultChecked={row[column.field] || false}
                                                    className="w-4 h-4 text-blue-600  border-gray-300 rounded focus:ring-blue-500 focus:ring-blue-600 ring-offset-gray-800 focus:ring-offset-gray-800 focus:ring-2 bg-gray-700 border-gray-600"
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
