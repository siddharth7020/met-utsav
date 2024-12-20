import { useState, useEffect } from "react";
import EventForm from "../Common/EventForm";
import axios from "axios";
import PropTypes from "prop-types";
import EventsCard from "../Common/EventCard";

const EventsTab = () => {
  const [events, setEvents] = useState([]);
  const [categories, setCategories] = useState([]);
  const [showEventForm, setShowEventForm] = useState(false);
  const [showCategoryForm, setShowCategoryForm] = useState(false);

  useEffect(() => {
    // Fetch all events
    axios
      .get("http://utsav.hello.met.edu/api/events")
      .then((response) => setEvents(response.data))
      .catch((error) => console.error("Error fetching events:", error));

    // Fetch all categories
    axios
      .get("http://utsav.hello.met.edu/api/categories")
      .then((response) => setCategories(response.data))
      .catch((error) => console.error("Error fetching categories:", error));
  }, []);

  const handleEventSubmit = async (eventData) => {
    try {
      // Add current user and dates
      const currentUser = "logged-in-user"; // Replace with actual user from auth context
      eventData.append("addBy", currentUser);

      const response = await axios.post(
        "http://utsav.hello.met.edu/api/events",
        eventData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );
      setEvents((prevEvents) => [...prevEvents, response.data]);
      setShowEventForm(false);
    } catch (error) {
      console.error("Error creating event:", error);
    }
  };

  const handleCategoryButtonClick = () => {
    setShowCategoryForm(true); // Show the event form
  };


  return (
    <div className="bg-gray-200 h-full">
      <div className="bg-white-100 h-full">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="flex flex-col sm:flex-row sm:justify-between items-start sm:items-center gap-4 sm:gap-0">
            <h2 className="text-xl sm:text-2xl font-bold">MET UTSAV Events</h2>
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
                onClick={() => setShowEventForm(true)}
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
                Create Event
              </button>
            </div>

          </div>
          {
            showCategoryForm && <CategoryForm setShowCategoryForm={setShowCategoryForm} />
          }
          {showEventForm && (
            <EventForm
              categories={categories}
              onSubmit={handleEventSubmit}
              onCancel={() => setShowEventForm(false)}
            />
          )}
          <EventsCard events={events} />
        </div>
      </div>
    </div>
  );
};

export default EventsTab;


const CategoryForm = ({ setShowCategoryForm }) => {
  const [name, setName] = useState('');
  const [errorMessage, setErrorMessage] = useState(null);

  CategoryForm.propTypes = {
    setShowCategoryForm: PropTypes.func.isRequired,
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const currentUser = "logged-in-user"; // Replace with actual user from auth context
    try {
      const response = await fetch('http://utsav.hello.met.edu/api/categories', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, addBy: currentUser }),
      });

      if (response.ok) {
        setShowCategoryForm(false);
      } else {
        setErrorMessage('Failed to create category');
      }
    } catch (error) {
      setErrorMessage(`Error creating category: ${error.message}`);
    }
  };

  return (
    <div className="flex justify-center items-center ">
      <form className="w-full max-w-lg mt-1 bg-white rounded-lg shadow-md p-6" onSubmit={handleSubmit}>
        <h2 className="text-2xl font-bold mb-4 ">Create Category</h2>
        <div className="mb-4">
          <input
            id="name"
            type="text"
            placeholder="Create Category Name"
            value={name}
            onChange={(event) => setName(event.target.value)}
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
        {errorMessage && <p className="text-red-500">{errorMessage}</p>}
      </form>
    </div>
  );
};