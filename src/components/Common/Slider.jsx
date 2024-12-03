import { useState, useEffect } from "react";
import { BANNER1 } from '../../assets/Image';
import { BANNER2 } from "../../assets/Image";
import { BANNER3 } from "../../assets/Image";
import { BANNER4 } from "../../assets/Image";
import { BANNER5 } from "../../assets/Image";
import { BANNER6 } from "../../assets/Image";

const Slider = () => { 
  const events = [
    {
      id: 1,
      title: "Dance Festival 2024",
      date: "2024-07-15",
      location: "MET Ground",
      image: BANNER1,
      description: "Join us for the biggest music festival of the summer featuring top artists from around the world."
    },
    {
      id: 2,
      title: "Techno Bollywood 2024",
      date: "2024-08-20",
      location: "Convention Center",
      image: BANNER2,
      description: "Experience the latest in technology trends and innovations at this premier tech conference."
    },
    {
      id: 3,
      title: "Play",
      date: "2024-09-10",
      location: "MET Ground",
      image: BANNER3,
      description: "Savor the finest cuisine and wines from renowned chefs and wineries."
    },
    {
      id: 4,
      title: "Photography Competition 2024",
      date: "2024-09-10",
      location: "MET Building",
      image: BANNER4,
      description: "Savor the finest cuisine and wines from renowned chefs and wineries."
    },
    {
      id: 5,
      title: "Kathak Dance 2024",
      date: "2024-09-10",
      location: "Convention Center",
      image: BANNER5,
      description: "Savor the finest cuisine and wines from renowned chefs and wineries."
    },
    {
      id: 6,
      title: "Talent Show 2024",
      date: "2024-09-10",
      location: "Convention Center",
      image: BANNER6,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "
    }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % events.length);
    }, 3000); // Auto-slide every 3 seconds
    return () => clearInterval(interval);
  }, [events.length]);

  const showEventDetails = (id) => {
    alert(`Event ID: ${id}`); // Replace with actual navigation or modal logic
  };

  return (
    <div className="relative h-[500px] w-full overflow-hidden">
      {events.map((event, index) => (
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
              Register
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Slider;
