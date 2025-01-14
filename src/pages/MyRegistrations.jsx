// MyRegistrations.js
import { useEffect, useState } from 'react';

const MyRegistrations = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    // Fetch the user ID from local storage
    const user = JSON.parse(localStorage.getItem("user"));
    const userId = user ? user.id : null;


    if (userId) {
      fetch(`https://utsav.met.edu/api/userevents/user/${userId}`)
        .then(response => response.json())
        .then(data => setEvents(data))
        .catch(error => console.error('Error fetching data:', error));
    } else {
      console.error('User ID not found in local storage');
    }
  }, []);

  return (

    // print category name also with event name
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded p-6">
        <h1 className="text-2xl font-bold mb-4">My Registrations</h1>
        {events.length > 0 ? (
          <ul className="space-y-4">
            {events.map(event => (
              <li key={event.id} className="border-b pb-4">
                <h2 className="text-lg font-semibold">{event.Categories.name} - {event.Events.name}</h2>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-700">No registrations found.</p>
        )}
      </div>
    </div>
  );
};

export default MyRegistrations;
