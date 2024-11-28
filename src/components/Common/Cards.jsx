import { useRef } from 'react';
import PropTypes from 'prop-types';
import IMAGES from '../../assets/Image';

const events = [
  {
    id: 1,
    title: "Dance Festival 2024",
    date: "2024-07-15",
    location: "MET Ground",
    image: IMAGES.BANNER1,
    description: "Join us for the biggest music festival of the summer featuring top artists from around the world."
  },
  {
    id: 2,
    title: "Techno Bollywood 2024",
    date: "2024-08-20",
    location: "Convention Center",
    image: IMAGES.BANNER2,
    description: "Experience the latest in technology trends and innovations at this premier tech conference."
  },
  {
    id: 3,
    title: "Play",
    date: "2024-09-10",
    location: "MET Ground",
    image: IMAGES.BANNER3,
    description: "Savor the finest cuisine and wines from renowned chefs and wineries."
  },
  {
    id: 4,
    title: "Photography Competition 2024",
    date: "2024-09-10",
    location: "MET Building",
    image: IMAGES.BANNER4,
    description: "Savor the finest cuisine and wines from renowned chefs and wineries."
  },
  {
    id: 5,
    title: "Kathak Dance 2024",
    date: "2024-09-10",
    location: "Convention Center",
    image: IMAGES.BANNER5,
    description: "Savor the finest cuisine and wines from renowned chefs and wineries."
  },
  {
    id: 6,
    title: "Talent Show 2024",
    date: "2024-09-10",
    location: "Convention Center",
    image: IMAGES.BANNER6,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "
  }
];
const EventCard = ({ event }) => {

  return (
    <div className="flex-shrink-0 w-[300px] bg-white rounded-lg shadow-lg overflow-hidden">
      <img src={event.image} className="w-full h-[200px] object-cover" alt={event.title} />
      <div className="p-4">
        <h3 className="font-bold text-lg mb-2">{event.title}</h3>
        <p className="text-gray-600 text-sm mb-4">{new Date(event.date).toLocaleDateString()}</p>
        <button className="text-white px-6 py-2 rounded-lg bg-gradient-to-r from-red-500 to-red-700 hover:from-red-700 hover:to-red-900 transition-colors" >
          View Details
        </button>
      </div>
    </div>
  );
};

EventCard.propTypes = {
  event: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    description: PropTypes.string,
  }).isRequired,
};

const Cards = () => {
  const eventCarouselRef = useRef(null);

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
          {events.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      </div>
  );
};

export default Cards;

