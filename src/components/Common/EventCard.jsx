import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { Base_URL } from '../Common/Constant';

const EventsCard = ({ events }) => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-wrap gap-4 justify-center">
      {events.map((event) => {
        let formattedDate = 'Invalid Date';
        try {
          const date = new Date(event.date);
          if (!isNaN(date)) {
            formattedDate = date.toLocaleDateString('en-GB', {
              day: '2-digit',
              month: 'short',
              year: 'numeric',
            }); // DD/MMM/YYYY format
          }
        } catch {
          console.error(`Invalid date for event ID ${event.id}:`, event.date);
        }
      
        const formatTime = (time) => {
          const [hour, minute] = time.split(':');
          const date = new Date();
          date.setHours(hour);
          date.setMinutes(minute);
      
          const options = { hour: 'numeric', minute: '2-digit', hour12: true };
          return new Intl.DateTimeFormat('en-US', options).format(date);
        };
      
        const fromTimeFormatted = formatTime(event.fromTime);
        const formattedTimeRange = `${fromTimeFormatted} Onwards`;
      



        return (
          <div
            key={event.id}
            className="max-w-sm w-full sm:w-1/2 md:w-1/3 lg:w-1/3 bg-white border border-gray-300 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <a href="#">
              <img
                className="rounded-t-lg object-cover h-48 w-full"
                src={`${Base_URL}${event.banner}`} // Assuming the banner URL is stored in the 'banner' field
                alt={event.name}
              />
            </a>
            <div className="p-5 space-y-4">
              <a href="#">
                <h5 className="text-xl font-semibold tracking-tight text-gray-900 hover:underline">
                  {event.name}
                </h5>
              </a>
              <div className="space-y-1">
                <p className="font-medium text-gray-700">
                  <span className="text-gray-500">Audition Date:</span> {formattedDate}, {formattedTimeRange}
                </p>
                <p className="font-medium text-gray-700">
                  <span className="text-gray-500">Location:</span> {event.location}
                </p>
              </div>
              <button
                onClick={() => {
                  const isLoggedIn = !!localStorage.getItem('authToken'); // Assuming 'authToken' is used for login
                  if (isLoggedIn) {
                    navigate('/eventsdeatils', { state: { event } });
                  } else {
                    navigate('/login', { state: { redirectTo: '/eventsdeatils', event } });
                  }
                }}
                className="flex items-center justify-center w-full px-4 py-2 text-sm font-medium text-white bg-red-600 rounded-lg hover:bg-red-700 transition-colors duration-200"
              >
                Read more
                <svg
                  className="w-4 h-4 ml-2 rtl:rotate-180"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M1 5h12m0 0L9 1m4 4L9 9" />
                </svg>
              </button>
            </div>
          </div>

        );
      })}
    </div>
  );
};

EventsCard.propTypes = {
  events: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      banner: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      aboutEvent: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
      location: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default EventsCard;
