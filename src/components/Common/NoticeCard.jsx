import PropTypes from "prop-types";

const NoticeCard = ({ notice, onEdit }) => {

// i want a date in date and time formate

const date = new Date(notice.addDate);
const formattedDateTime = date.toLocaleString('en-US', {
  year: 'numeric',
  month: '2-digit',
  day: '2-digit',
  hour: '2-digit',
  minute: '2-digit',
  second: '2-digit',
  hour12: true
});
  

  return (
    <div className="m-5">
      <div className="group bg-white flex flex-col rounded-lg border p-4 text-gray-700 shadow transition hover:shadow-lg">
        <div className="flex justify-between items-center">
          <h3 className="text-xs text-gray-600">{notice.instituteName}</h3> {/* Changed to instituteName */}
          <button
            className="flex justify-center items-center hover:text-[#BD1F1F]"
            onClick={() => onEdit(notice)} // Pass card details to edit
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-pencil-square"
              viewBox="0 0 16 16"
            >
              <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
              <path
                fillRule="evenodd"
                d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"
              />
            </svg>
          </button>
        </div>
        <a href="#" className="mb-2 text-base font-semibold sm:text-lg">
          {notice.title}
        </a>
        <p className="text-xs text-gray-500">{notice.message}</p>
        <div className="mt-5 flex flex-col space-y-3 text-sm font-medium text-gray-500 sm:flex-row sm:items-center sm:space-y-0 sm:space-x-2">
          <div>
            Date & Time:
            <span className="ml-2 mr-3 rounded-full bg-green-100 px-2 py-0.5 text-green-900">
              {formattedDateTime}
            </span>
          </div>
          <div>
            Name:
            <span className="ml-2 mr-3 rounded-full bg-blue-100 px-2 py-0.5 text-blue-900">
              {notice.addBy}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

NoticeCard.propTypes = {
  notice: PropTypes.shape({
    id: PropTypes.number.isRequired,
    instituteId: PropTypes.string.isRequired,
    instituteName: PropTypes.string.isRequired, // Add instituteName prop
    title: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired,
    addDate: PropTypes.string.isRequired,
    addBy: PropTypes.string.isRequired,
  }).isRequired,
  onEdit: PropTypes.func.isRequired,
};

export default NoticeCard;
