import PropTypes from 'prop-types';
import { Base_URL } from '../Common/Constant';

const DetailsCard = ({ event, handleOpenModal }) => {

  // Define the shape of props using PropTypes
  DetailsCard.propTypes = {
    event: PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
      poster: PropTypes.string.isRequired,
      description: PropTypes.string, // Optional description field
    }).isRequired,
    handleOpenModal: PropTypes.func.isRequired, // Function to handle modal open
  };

  return (
    <div className="flex-shrink-0 w-[300px] bg-white rounded-lg shadow-lg overflow-hidden">
      {/* Event Poster */}
      <img
        src={`${Base_URL}${event.poster}`}
        className="w-full h-[200px] object-cover"
        alt={event.name}
      />

      {/* Event Details */}
      <div className="p-4">
        <h3 className="font-bold text-lg mb-2">{event.name}</h3>
        <p className="text-gray-600 text-sm mb-4">
          {new Date(event.date).toLocaleDateString()} {/* Format date */}
        </p>

        {/* View Details Button */}
        <button
          onClick={() => handleOpenModal(event)} // Pass the event data to modal handler
          className="text-white px-6 py-2 rounded-lg bg-gradient-to-r from-red-500 to-red-700 hover:from-red-700 hover:to-red-900 transition-colors"
        >
          View Details
        </button>
      </div>
    </div>
  );
};

export default DetailsCard;
