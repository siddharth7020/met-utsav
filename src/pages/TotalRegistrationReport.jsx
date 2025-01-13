import { useState, useEffect } from 'react';

function TotalRegistrationReport() {
  const [data, setData] = useState({
    totalRegistrations: 0,
    eventRegistrations: [],
    instituteRegistrations: []
  });

  const [filteredData, setFilteredData] = useState([]);
  const [filterType, setFilterType] = useState('all');

  useEffect(() => {
    fetch('http://utsav.met.edu/api/reports/total-registrations')
      .then(response => response.json())
      .then(data => {
        setData(data);
        setFilteredData(data.eventRegistrations); // Default to show all events
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const handleFilterChange = (filter) => {
    setFilterType(filter);
    if (filter === 'all') {
      setFilteredData(data.eventRegistrations);
    } else if (filter === 'events') {
      setFilteredData(data.eventRegistrations);
    } else if (filter === 'institutes') {
      setFilteredData(data.instituteRegistrations);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Total Registrations</h1>
      <p className="text-lg mb-6">Total Users Registered: {data.totalRegistrations}</p>

      <div className="mb-4">
        <button 
          onClick={() => handleFilterChange('all')} 
          className={`px-4 py-2 mr-2 rounded ${filterType === 'all' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}>
          All
        </button>
        <button 
          onClick={() => handleFilterChange('events')} 
          className={`px-4 py-2 mr-2 rounded ${filterType === 'events' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}>
          Events
        </button>
        <button 
          onClick={() => handleFilterChange('institutes')} 
          className={`px-4 py-2 rounded ${filterType === 'institutes' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}>
          Institutes
        </button>
      </div>

      {filterType === 'events' && (
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-2">Event Registrations</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredData.map(event => (
              <div key={event.eventId} className="border p-4 rounded shadow">
                <img src={event.Events.banner} alt={event.Events.name} className="w-full h-40 object-cover rounded mb-2" />
                <h3 className="text-lg font-bold">{event.Events.name}</h3>
                <p>Registrations: {event.registrationCount}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {filterType === 'institutes' && (
        <div>
          <h2 className="text-xl font-semibold mb-2">Institute Registrations</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredData.map(institute => (
              <div key={institute.instituteId} className="border p-4 rounded shadow">
                <h3 className="text-lg font-bold">{institute.Institute.name}</h3>
                <p>Registrations: {institute.registrationCount}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default TotalRegistrationReport;
