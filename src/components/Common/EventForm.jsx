import PropTypes from 'prop-types';

const EventForm = ({ setShowEventForm }) => {
    EventForm.propTypes = {
        setShowEventForm: PropTypes.func.isRequired,
    };
    return (
        <div className="flex justify-center items-center ">
            <form className="w-full max-w-lg mt-1 bg-white rounded-lg shadow-md p-6">
                <h2 className='text-2xl font-bold mb-4 '>Create Event</h2>
                <div className="mb-4">
                    <input
                        id="title"
                        type="text"
                        placeholder="Enter Event Name"
                        className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-black focus:outline-none"
                    />
                </div>
                <div className="mb-4">
                    <select
                        id="event"
                        className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-black focus:outline-none"
                    >
                        <option value="">Select Category</option>
                        <option value="">Category 1</option>
                        <option value="">Category 2</option>
                        <option value="">Category 3</option>
                        <option value="">Category 4</option>
                        <option value="">Category 5</option>
                    </select>
                </div>
                <div className="mb-4">
                    <input
                        id="date"
                        type="date"
                        className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-black focus:outline-none"
                    />
                </div>
                <div className="mb-4">
                    <input id="picture" type="file" className="flex h-10 w-full rounded-md border border-input bg-white px-3 py-2 text-sm text-gray-400 file:border-0 file:bg-transparent file:text-gray-600 file:text-sm file:font-medium" />
                </div>
                <div className="flex justify-end space-x-4">
                    <button
                        type="submit"
                        className="px-6 py-2 text-white bg-gradient-to-r from-red-500 to-red-700 hover:from-red-700 hover:to-red-900 text-sm text-white font-bold rounded-xl transition duration-200 "
                    >
                        Submit
                    </button>
                    <button
                        type="button"
                        className="px-6 py-2 bg-red-100 hover:bg-red-200 text-sm text-gray-900 font-bold  rounded-xl transition duration-200"
                        onClick={() => setShowEventForm(false)}
                    >
                        Cancel
                    </button>
                </div>
            </form>
        </div>
    )
}

export default EventForm