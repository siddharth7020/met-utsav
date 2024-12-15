import PropTypes from 'prop-types';
import { Base_URL } from '../Common/Constant';

const Modal = ({ isOpen, onClose, event }) => {
  if (!isOpen || !event) return null; // Don't render if the modal is closed or no event is passed

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="bg-white rounded-lg p-8 w-[90%] max-w-lg relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-600 hover:text-gray-900"
        >
          ✖
        </button>
        {/* Event Details */}
        <h2 className="text-2xl font-bold mb-4">{event.name}</h2>
        <p className="text-gray-700 mb-4">{event.description || "No description available."}</p>
        <p className="text-gray-500 text-sm">Date: {event.date}</p>
        <img
          src={`${Base_URL}${event.banner}`}
          alt={event.name}
          className="w-full mt-4 rounded-md"
        />
        {/* Close Button */}
        <button
          onClick={onClose}
          className="mt-6 px-4 py-2 rounded-lg bg-red-500 text-white hover:bg-red-700 transition-colors"
        >
          Close
        </button>
      </div>
    </div>
  );
};

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  event: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    banner: PropTypes.string.isRequired,
    description: PropTypes.string,
  }),
};

export default Modal;
