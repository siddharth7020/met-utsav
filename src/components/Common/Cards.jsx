import { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import EventCard from './DetailsCard';

const Cards = ({ events = [] }) => {
  const eventCarouselRef = useRef(null);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);

  Cards.propTypes = {
    events: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
      poster: PropTypes.string.isRequired,
      description: PropTypes.string,
    })).isRequired,
  };

  const scrollCarousel = (direction) => {
    const scrollAmount = 320;
    if (eventCarouselRef.current) {
      if (direction === 'left') {
        eventCarouselRef.current.scrollLeft -= scrollAmount;
      } else {
        eventCarouselRef.current.scrollLeft += scrollAmount;
      }
    }
  };

  const handleOpenModal = (event) => {
    setSelectedEvent(event); // Set the selected event
    setIsModalOpen(true);   // Open the modal
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);  // Close the modal
    setSelectedEvent(null); // Clear the selected event
  };

  return (
    <div className="relative">
      {/* Carousel Buttons */}
      <button
        onClick={() => scrollCarousel("left")}
        className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-gray-100 p-3 rounded-full shadow-lg hover:bg-gray-200 transition-transform transform hover:scale-105"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-caret-left-fill" viewBox="0 0 16 16">
          <path d="m3.86 8.753 5.482 4.796c.646.566 1.658.106 1.658-.753V3.204a1 1 0 0 0-1.659-.753l-5.48 4.796a1 1 0 0 0 0 1.506z" />
        </svg>
      </button>
      <button
        onClick={() => scrollCarousel("right")}
        className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-gray-100 p-3 rounded-full shadow-lg hover:bg-gray-200 transition-transform transform hover:scale-105"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-caret-right-fill " viewBox="0 0 16 16">
          <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
        </svg>
      </button>

      {/* Carousel Container */}
      <div
        className="event-carousel flex space-x-6 overflow-x-hidden py-4 scrollbar-hide"
        ref={eventCarouselRef}
      >
        {events && events.map((event) => (
          <EventCard key={event.id} event={event} handleOpenModal={handleOpenModal} />
        ))}
      </div>

      {/* Modal */}
      {isModalOpen && selectedEvent && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-3/4 md:w-1/2 lg:w-1/3">
            <div className='flex justify-between'>
              <h2 className="text-2xl font-bold mb-2">{selectedEvent.name}</h2>
              <button className='color-gray-600 hover:text-[#BD1F1F]'>
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
            <p className="text-gray-700 mb-2"><strong>Date:</strong> {new Date(selectedEvent.date).toLocaleDateString()}</p>
            <p className="text-gray-700 mb-4"><strong>Category:</strong> {selectedEvent.description}</p>
            <img src={`http://utsav.hello.met.edu${selectedEvent.poster}`} alt={selectedEvent.name} className="w-full h-64 object-cover rounded-lg mb-4" />
            <button
              onClick={handleCloseModal}
              className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-800 transition"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cards;
