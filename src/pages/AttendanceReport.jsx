import { useState, useEffect } from 'react';
import axios from 'axios';
import 'tailwindcss/tailwind.css';

function AttendanceReport() {
  const [events, setEvents] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [selectedDate, setSelectedDate] = useState('');
  const [users, setUsers] = useState([]);
  const [attendance, setAttendance] = useState([]);

  useEffect(() => {
    axios.get('/api/events/').then((response) => setEvents(response.data));
    axios.get('/api/userevents/').then((response) => {
      const selectedUsers = response.data.filter(user => user.status === 'Selected');
      setUsers(selectedUsers);
    });
    axios.get('/api/attendance/').then((response) => setAttendance(response.data.attendanceRecords));
  }, []);

  const handleEventSelect = (event) => setSelectedEvent(event);
  const handleDateSelect = (date) => setSelectedDate(date);

  const filteredUsers = users.filter(user => user.eventId === selectedEvent?.id);
  const filteredAttendance = attendance.filter(att => att.date === selectedDate);

  return (
    <div className="p-6">
      <EventSelector events={events} onSelectEvent={handleEventSelect} />
      <DateSelector onSelectDate={handleDateSelect} />
      <UserList users={filteredUsers} attendance={filteredAttendance} />
    </div>
  );
}

function EventSelector({ events, onSelectEvent }) {
  const handleChange = (e) => {
    const selectedId = parseInt(e.target.value);
    const event = events.find(event => event.id === selectedId);
    onSelectEvent(event);
  };

  return (
    <select onChange={handleChange}>
      <option value="">Select Event</option>
      {events.map(event => (
        <option key={event.id} value={event.id}>{event.name}</option>
      ))}
    </select>
  );
}

function DateSelector({ onSelectDate }) {
  return (
    <input
      type="date"
      onChange={(e) => onSelectDate(e.target.value)}
      className="border p-2"
    />
  );
}

function UserList({ users, attendance }) {
  return (
    <table className="min-w-full table-auto border-collapse border border-gray-300">
      <thead>
        <tr>
          <th className="border border-gray-300 p-2">Name</th>
          <th className="border border-gray-300 p-2">Attendance</th>
        </tr>
      </thead>
      <tbody>
        {users.map(user => (
          <tr key={user.id}>
            <td className="border border-gray-300 p-2">{`${user.Users.firstName} ${user.Users.lastName}`}</td>
            <td className="border border-gray-300 p-2">
              {attendance.find(att => att.userId === user.userId)?.status || 'N/A'}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default AttendanceReport;
