import { useState } from "react";
import EventForm from "../Common/EventForm";
import Cards from "../Common/Cards";

const EventsTab = () => {
  const [showEventForm, setShowEventForm] = useState(false);

  const handleEventButtonClick = () => {
    setShowEventForm(true); // Show the event form
  };

  const handleCloseForm = () => {
    setShowEventForm(false); // Hide the event form
  };

  return (
    <div>
      <div className="bg-gray-300 h-full ">
        {showEventForm && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <EventForm />
              <button
                onClick={handleCloseForm}
                className="mt-4 text-white px-4 py-2 bg-red-500 hover:bg-red-700 rounded-lg"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
      <div className="bg-white-100 h-full">
        <div className=" max-w-7xl mx-auto px-4 py-12">
          <div className="flex justify-between">
            <h2 className="text-2xl font-bold ">MET USTAV Events</h2>
            <div className="flex gap-2">
              <button className="flex gap-2 text-white px-6 py-2 rounded-lg bg-gradient-to-r from-red-500 to-red-700 hover:from-red-700 hover:to-red-900 transition-colors">
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
                className="flex gap-2 text-white px-6 py-2 rounded-lg bg-gradient-to-r from-red-500 to-red-700 hover:from-red-700 hover:to-red-900 transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
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
          <Cards />
        </div>
      </div>
    </div>
  );
};

export default EventsTab;