import { useRef } from 'react';
import PropTypes from 'prop-types';

const EventCard = ({ event, handleOpenModel }) => {
  const Base_URL = "http://utsav.hello.met.edu";
  const posterUrl =  `${Base_URL}${event.poster}`;
  

  EventCard.propTypes = {
    event: PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
      poster: PropTypes.string.isRequired,
      description: PropTypes.string, 
    }).isRequired,
    handleOpenModel: PropTypes.func.isRequired,
  };

  return (
    <div className="flex-shrink-0 w-[300px] bg-white rounded-lg shadow-lg overflow-hidden">
      <img src={posterUrl} className="w-full h-[200px] object-cover" alt={event.name} />
      <div className="p-4">
        <h3 className="font-bold text-lg mb-2">{event.name}</h3>
        <p className="text-gray-600 text-sm mb-4">{new Date(event.date).toLocaleDateString()}</p>
        <button onClick={handleOpenModel} className="text-white px-6 py-2 rounded-lg bg-gradient-to-r from-red-500 to-red-700 hover:from-red-700 hover:to-red-900 transition-colors" >
          View Details
        </button>
      </div>
    </div>
  );
};

const Cards = ({ events = [] }) => {
  const eventCarouselRef = useRef(null);

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
          <EventCard key={event.id} event={event} />
        ))}
      </div>
    </div>
  );
};

export default Cards;