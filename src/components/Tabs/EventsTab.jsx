import { useState } from "react";
import EventForm from "../Common/EventForm";
import Cards from "../Common/Cards";
import PropTypes from 'prop-types';
import { BANNER1 } from '../../assets/Image';
import { BANNER2 } from "../../assets/Image";
import { BANNER3 } from "../../assets/Image";
import { BANNER4 } from "../../assets/Image";
import { BANNER5 } from "../../assets/Image";
import { BANNER6 } from "../../assets/Image";

const EventsTab = () => {
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

  const [showEventForm, setShowEventForm] = useState(false);
  const [showCategoryForm, setShowCategoryForm] = useState(false);

  const handleEventButtonClick = () => {
    setShowEventForm(true); // Show the event form
  };

  const handleCategoryButtonClick = () => {
    setShowCategoryForm(true); // Show the event form
  };

  return (
    <div className="bg-gray-200 h-full ">
      <div className="bg-white-100 h-full">
        <div className=" max-w-7xl mx-auto px-4 py-12">
          <div className="flex flex-col sm:flex-row sm:justify-between items-start sm:items-center gap-4 sm:gap-0">
            <h2 className="text-xl sm:text-2xl font-bold">MET USTAV Events</h2>
            <div className="flex gap-2">
              <button
                className="flex items-center gap-2 text-white px-4 py-2 sm:px-6 sm:py-2 text-sm sm:text-base rounded-lg bg-gradient-to-r from-red-500 to-red-700 hover:from-red-700 hover:to-red-900 transition-colors"
                onClick={handleCategoryButtonClick}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-plus"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4" />
                </svg>
                Category
              </button>
              <button
                onClick={handleEventButtonClick}
                className="flex items-center gap-2 text-white px-4 py-2 sm:px-6 sm:py-2 text-sm sm:text-base rounded-lg bg-gradient-to-r from-red-500 to-red-700 hover:from-red-700 hover:to-red-900 transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-plus"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4" />
                </svg>
                Event
              </button>
            </div>
          </div>
          {
            showCategoryForm && <CategoryForm setShowCategoryForm={setShowCategoryForm} />
          }
          {
            showEventForm && <EventForm setShowEventForm={setShowEventForm} />
          }
          <Cards events={events}/>
        </div>
      </div>
    </div>
  );
};

export default EventsTab;

const CategoryForm = ({ setShowCategoryForm }) => {
  CategoryForm.propTypes = {
    setShowCategoryForm: PropTypes.func.isRequired,
  };
  return (
    <div className="flex justify-center items-center ">
      <form className="w-full max-w-lg mt-1 bg-white rounded-lg shadow-md p-6">
        <h2 className='text-2xl font-bold mb-4 '>Create Category</h2>
        <div className="mb-4">
          <input
            id="title"
            type="text"
            placeholder="Craete Category Name"
            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-black focus:outline-none"
          />
        </div>
        <div className="flex justify-end space-x-4">
          <button
            type="submit"
            className="px-6 py-2 text-white bg-gradient-to-r from-red-500 to-red-700 hover:from-red-700 hover:to-red-900 text-sm text-white font-bold rounded-xl transition duration-200 "
          >
            Submit
          </button>
          <button
            type="button"
            className="px-6 py-2 bg-red-100 hover:bg-red-200 text-sm text-gray-900 font-bold  rounded-xl transition duration-200"
            onClick={() => setShowCategoryForm(false)}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  )
}