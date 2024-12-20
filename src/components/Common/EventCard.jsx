import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

const EventsCard = ({ events }) => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-wrap gap-4 justify-center">
      {events.map((event) => (
        <div key={event.id} className="max-w-sm bg-white border border-gray-200 rounded-lg shadow">
          <a href="#">
            <img
              className="rounded-t-lg"
              src={event.banner} // Assuming the banner URL is stored in the 'banner' field
              alt={event.name}
            />
          </a>
          <div className="p-5">
            <a href="#">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">{event.name}</h5>
            </a>
            <div>
              {/* <p className="mb-3 h-20 font-normal text-gray-700 truncate">{event.aboutEvent}</p> */}
              <p className="font-bold">
                {event.date} | {event.location}
              </p>
            </div>
            <button
              onClick={() => navigate('/eventsdeatils', { state: { event } })}
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-800"
            >
              Read more
              <svg
                className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

EventsCard.propTypes = {
  events: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    banner: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    aboutEvent: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
  })).isRequired,
};

export default EventsCard;
