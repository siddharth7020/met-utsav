import { useState, useEffect } from "react";
import PropTypes from 'prop-types';

const Slider = ({events = []}) => { 

  const [currentSlide, setCurrentSlide] = useState(0);


  Slider.propTypes = {
    events: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
      location: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      description: PropTypes.string,
    })).isRequired,
  };

 useEffect(() => {
  if (events && events.length > 0) {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % events.length);
    }, 3000); // Auto-slide every 3 seconds
    return () => clearInterval(interval);
  }
}, [events]);

  const showEventDetails = (id) => {
    alert(`Event ID: ${id}`); // Replace with actual navigation or modal logic
  };

  return (
    <div className="relative h-[500px] w-full overflow-hidden">
      {events && Array.isArray(events) && events.map((event, index) => (
        <div
          key={event.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={event.image}
            className="w-full h-full object-cover"
            alt={event.title}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
          <div className="absolute bottom-0 left-0 p-8 text-white">
            <h1 className="text-4xl font-bold mb-4">{event.title}</h1>
            <p className="text-lg mb-4">{event.description}</p>
            <button
              onClick={() => showEventDetails(event.id)}
              className="px-6 py-2 rounded-lg bg-gradient-to-r from-red-500 to-red-700 hover:from-red-700 hover:to-red-900 transition-colors"
            >
              View Details
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Slider;
