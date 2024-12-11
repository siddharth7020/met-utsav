import { useState, useEffect } from "react";
import EventForm from "../Common/EventForm";
import Cards from "../Common/Cards";
import axios from "axios";
// import { BANNER1, BANNER2, BANNER3, BANNER4, BANNER5, BANNER6 } from "../../assets/Image";

const EventsTab = () => {
  const [events, setEvents] = useState([]);
  const [categories, setCategories] = useState([]);
  const [showEventForm, setShowEventForm] = useState(false);

  useEffect(() => {
    // Fetch all events
    axios.get("http://utsav.hello.met.edu/api/events")
      .then((response) => setEvents(response.data))
      .catch((error) => console.error("Error fetching events:", error));

    // Fetch all categories
    axios.get("http://utsav.hello.met.edu/api/categories")
      .then((response) => setCategories(response.data))
      .catch((error) => console.error("Error fetching categories:", error));
  }, []);

  const handleEventSubmit = async (eventData) => {
    try {
      const response = await axios.post("http://utsav.hello.met.edu/api/events", eventData, {
        headers: { "Content-Type": "application/json" },
      });
      setEvents((prevEvents) => [...prevEvents, response.data]);
      setShowEventForm(false);
    } catch (error) {
      console.error("Error creating event:", error);
    }
  };

  return (
    <div className="bg-gray-200 h-full">
      <div className="bg-white-100 h-full">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="flex flex-col sm:flex-row sm:justify-between items-start sm:items-center gap-4 sm:gap-0">
            <h2 className="text-xl sm:text-2xl font-bold">MET USTAV Events</h2>
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
          {showEventForm && (
            <EventForm
              categories={categories}
              onSubmit={handleEventSubmit}
              onCancel={() => setShowEventForm(false)}
            />
          )}
          <Cards events={events} />
        </div>
      </div>
    </div>
  );
};

export default EventsTab;
