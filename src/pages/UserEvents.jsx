import { useState, useEffect } from 'react';
import axios from 'axios';
import { utils, writeFile } from 'xlsx';

const UserEventsTable = () => {
  const [userEvents, setUserEvents] = useState([]);
  const [institutes, setInstitutes] = useState([]);
  const [categories, setCategories] = useState([]);
  const [filteredEvents, setFilteredEvents] = useState([]);
  const [selectedInstitute, setSelectedInstitute] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  useEffect(() => {
    // Fetch user events
    axios.get('http://utsav.hello.met.edu/api/userevents/')
      .then(response => {
        setUserEvents(response.data);
        setFilteredEvents(response.data);
      })
      .catch(error => console.error('Error fetching user events:', error));

    // Fetch institutes
    axios.get('http://utsav.hello.met.edu/api/institutes/')
      .then(response => setInstitutes(response.data))
      .catch(error => console.error('Error fetching institutes:', error));

    // Fetch categories
    axios.get('http://utsav.hello.met.edu/api/categories/')
      .then(response => setCategories(response.data))
      .catch(error => console.error('Error fetching categories:', error));
  }, []);

  useEffect(() => {
    // Filter events based on selected institute and category
    let filtered = userEvents;

    if (selectedInstitute) {
      filtered = filtered.filter(event => event.Users.instituteId === parseInt(selectedInstitute));
    }

    if (selectedCategory) {
      filtered = filtered.filter(event => event.categoryId === parseInt(selectedCategory));
    }

    setFilteredEvents(filtered);
  }, [selectedInstitute, selectedCategory, userEvents]);

  const downloadExcel = () => {
    const dataToExport = filteredEvents.map(event => ({
      Name: `${event.Users.firstName} ${event.Users.lastName}`,
      Institute: institutes.find(inst => inst.id === event.Users.instituteId)?.name || 'N/A',
      Event: event.Events.name,
      Category: categories.find(cat => cat.id === event.categoryId)?.name || 'N/A',
      "Email ": event.Users.email,
      "Phone Number": event.Users.phoneNo,
      "File URL": event.fileUrl || 'N/A',
      "Status": event.status,
      "Reason for rejection": event.reason || 'N/A',
      "Date": new Date(event.date).toLocaleDateString(),
    }));

    const worksheet = utils.json_to_sheet(dataToExport);
    const workbook = utils.book_new();
    utils.book_append_sheet(workbook, worksheet, 'User Events');

    writeFile(workbook, 'UserEvents.xlsx');
  };


  const handleStatusChange = (eventId, newStatus) => {
    // Update the status via API
    axios.put(`http://utsav.hello.met.edu/api/userevents/${eventId}`, { status: newStatus })
      .then(() => {
        // Update the local state with the new status
        setUserEvents(prevEvents =>
          prevEvents.map(event =>
            event.id === eventId ? { ...event, status: newStatus } : event
          )
        );
        setFilteredEvents(prevFiltered =>
          prevFiltered.map(event =>
            event.id === eventId ? { ...event, status: newStatus } : event
          )
        );
      })
      .catch(error => console.error('Error updating status:', error));
  };



  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">User Events</h1>

      <div className="flex flex-wrap gap-4 mb-6">
        <div>
          <select
            style={{ maxWidth: '325px' }}
            className="border rounded px-4 py-2 flex-grow"
            value={selectedInstitute}
            onChange={(e) => setSelectedInstitute(e.target.value)}
          >
            <option value="">All Institutes</option>
            {institutes.map((institute) => (
              <option key={institute.id} value={institute.id}>
                {institute.name}
              </option>
            ))}
          </select>
        </div>

        <select
          className="border rounded px-4 py-2 flex-grow"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          <option value="">All Categories</option>
          {categories.map((category) => (
            <option key={category.id} value={category.id}>{category.name}</option>
          ))}
        </select>

        <button
          onClick={downloadExcel}
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
        >
          Download Excel
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="table-auto w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              <th className="border px-4 py-2">Name</th>
              <th className="border px-4 py-2">Institute</th>
              <th className="border px-4 py-2">Event</th>
              <th className="border px-4 py-2">Category</th>
              <th className="border px-4 py-2">Phone Number</th>
              <th className="border px-4 py-2">Status</th>
              <th className="border px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredEvents.map((event) => (
              <tr key={event.id}>
                <td className="border px-4 py-2">
                  {`${event.Users.firstName} ${event.Users.lastName}`}
                </td>
                <td className="border px-4 py-2">{institutes.find(inst => inst.id === event.Users.instituteId)?.name || 'N/A'}</td>
                <td className="border px-4 py-2">{event.Events.name}</td>
                <td className="border px-4 py-2">{categories.find(cat => cat.id === event.categoryId)?.name || 'N/A'}</td>
                <td className="border px-4 py-2">{event.Users.phoneNo}</td>
                <td className="border px-4 py-2">
                  <select
                    className="border rounded px-2 py-1"
                    value={event.status || 'N/A'}
                    onChange={(e) => handleStatusChange(event.id, e.target.value)}
                  >
                    <option value="Submitted">Submitted</option>
                    <option value="Selected">Selected</option>
                    <option value="Rejected">Rejected</option>
                  </select>
                </td>
                <td className="border px-4 py-2">
                  <button
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors duration-200 ease-in-out mx-2"
                    onClick={() => handleStatusChange(event.id, 'Selected')}
                  >
                    Select
                  </button>
                  <button
                    className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition-colors duration-200 ease-in-out mx-2"
                    onClick={() => handleStatusChange(event.id, 'Rejected')}
                  >
                    Reject
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserEventsTable;
