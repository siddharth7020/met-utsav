import PropTypes from 'prop-types';

const NoticeForm = ({setShowNoticeForm}) => {
  NoticeForm.propTypes = {
    setShowNoticeForm: PropTypes.func.isRequired,
  };
  
  return (
    <div className="flex justify-center items-center ">
      <form className="w-full max-w-lg bg-white rounded-lg shadow-md p-6">
        <div className="mb-4">
          <label htmlFor="event" className="block text-gray-700 font-semibold mb-2">
            Select Institute
          </label>
          <select
            id="event"
            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-black focus:outline-none"
          >
            <option value="">Select Institute</option>
            <option value="">Event 1</option>
            <option value="">Event 2</option>
            <option value="">Event 3</option>
            <option value="">Event 4</option>
            <option value="">Event 5</option>
          </select>
        </div>

        <div className="mb-4">
          <input
            id="title"
            type="text"
            placeholder="Enter Title"
            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-black focus:outline-none"
          />
        </div>

        <textarea
          id="description"
          placeholder="Enter Description"
          rows="5"
          className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-black focus:outline-none"
        />

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
            onClick={() => setShowNoticeForm(false)}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  )
}

export default NoticeForm;