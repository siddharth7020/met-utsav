import { useState, useEffect } from 'react';
import Swal from 'sweetalert2';

function Attendance() {
    const [users, setUsers] = useState([]);
    const [filteredUsers, setFilteredUsers] = useState([]);
    const [events, setEvents] = useState([]);
    const [institutes, setInstitutes] = useState([]);
    const [selectedEvent, setSelectedEvent] = useState('');
    const [selectedDate, setSelectedDate] = useState('');
    const [searchTerm, setSearchTerm] = useState('');
    const [userAttendance, setUserAttendance] = useState({});
    const [reportData, setReportData] = useState([]);

    // Fetch user from localStorage
    const user = JSON.parse(localStorage.getItem('user'));
    const userName = user ? `${user.firstName} ${user.lastName}` : '';

    useEffect(() => {
        // Fetch users
        fetch('https://utsav.met.edu/api/auth/allusers')
            .then(response => response.json())
            .then(data => {
                const participants = data.filter(user => user.role === 'Participant');
                setUsers(participants);
                setFilteredUsers(participants);
            })
            .catch(() => Swal.fire('Error', 'Failed to fetch users. Please try again later.', 'error'));

        // Fetch events
        fetch('https://utsav.met.edu/api/events')
            .then(response => response.json())
            .then(data => setEvents(data))
            .catch(() => Swal.fire('Error', 'Failed to fetch events. Please try again later.', 'error'));

        // Fetch institutes
        fetch('https://utsav.met.edu/api/institutes')
            .then(response => response.json())
            .then(data => setInstitutes(data))
            .catch(() => Swal.fire('Error', 'Failed to fetch institutes. Please try again later.', 'error'));

    }, []);

    useEffect(() => {
        if (selectedDate) {
            // Fetch attendance for the selected date
            fetch(`https://utsav.met.edu/api/attendance/${selectedDate}`)
                .then(response => response.json())
                .then(data => {
                    if (data.attendanceRecords) {
                        setUserAttendance(data.attendanceRecords.reduce((acc, attendance) => ({
                            ...acc,
                            [attendance.userId]: attendance.status,
                        }), {}));
                        setReportData(data.attendanceRecords);
                    }
                })
                .catch(() => Swal.fire('Error', 'Failed to fetch attendance. Please try again later.', 'error'));
        }
    }, [selectedDate]);

    const handleAttendance = (userId, status) => {
        if (!selectedDate) {
            Swal.fire('Warning', 'Please select a date for attendance.', 'warning');
            return;
        }

        if (new Date(selectedDate) > new Date()) {
            Swal.fire('Warning', 'You cannot select a future date.', 'warning');
            return;
        }

        if (userAttendance[userId]) {
            Swal.fire('Warning', `Attendance already marked as ${userAttendance[userId]}.`, 'warning');
            return;
        }

        const user = users.find(user => user.id === userId);
        if (!user) {
            Swal.fire('Error', 'User not found!', 'error');
            return;
        }

        const userInstitute = user.instituteId;
        const data = {
            userId,
            date: selectedDate,
            status,
            instituteId: userInstitute,
            addby: userName,
        };

        fetch('https://utsav.met.edu/api/attendance', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data),
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Failed to mark attendance');
                }
                return response.json();
            })
            .then(() => {
                Swal.fire('Success', `Attendance marked as ${status}!`, 'success');
                setUserAttendance(prev => ({ ...prev, [userId]: status }));
            })
            .catch(() => Swal.fire('Error', 'Failed to mark attendance. Please try again later.', 'error'));
    };

    const handleSearch = (e) => {
        const term = e.target.value.toLowerCase();
        setSearchTerm(term);

        const filtered = users.filter(user =>
            `${user.firstName} ${user.lastName}`.toLowerCase().includes(term) ||
            user.rollNo.toLowerCase().includes(term)
        );
        setFilteredUsers(filtered);
    };

    const getMaxDate = () => {
        const today = new Date();
        return today.toISOString().split('T')[0]; // Format as yyyy-mm-dd
    };

    const generateReport = () => {
        if (!reportData.length) {
            Swal.fire('Info', 'No attendance data available for the selected date.', 'info');
            return;
        }

        const csvContent = [
            ['Name', 'Institute', 'Status'],
            ...reportData.map(record => [
                `${record.User.firstName} ${record.User.lastName}`,
                institutes.find(inst => inst.id === record.User.instituteId)?.name || 'N/A',
                record.status,
            ]),
        ]
            .map(row => row.join(','))
            .join('\n');

        const blob = new Blob([csvContent], { type: 'text/csv' });
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = `attendance_${selectedDate}.csv`;
        link.click();
    };

    return (
        <div className="p-6">
            <h1 className="text-3xl font-bold mb-4">Attendance System</h1>

            <div className="mb-4">
                <label htmlFor="date-picker" className="block text-lg mb-2">Select Date:</label>
                <input
                    id="date-picker"
                    type="date"
                    className="block w-full border rounded-md p-2"
                    onChange={(e) => setSelectedDate(e.target.value)}
                    value={selectedDate}
                    max={getMaxDate()}
                />
            </div>

            <div className="mb-4">
                <label htmlFor="event-select" className="block text-lg mb-2">Select Event:</label>
                <select
                    id="event-select"
                    className="block w-full border rounded-md p-2"
                    onChange={(e) => setSelectedEvent(e.target.value)}
                    value={selectedEvent}
                >
                    <option value="">--Select Event--</option>
                    {events.map((event, index) => (
                        <option key={index} value={event.name}>{event.name}</option>
                    ))}
                </select>
            </div>

            <div className="mb-4">
                <label htmlFor="search-bar" className="block text-lg mb-2">Search Users:</label>
                <input
                    id="search-bar"
                    type="text"
                    placeholder="Search by name or roll number"
                    className="block w-full border rounded-md p-2"
                    value={searchTerm}
                    onChange={handleSearch}
                />
            </div>

            <button
                onClick={generateReport}
                className="mb-4 px-4 py-2 rounded bg-blue-500 hover:bg-blue-600 text-white"
            >
                Download Attendance Report
            </button>

            <table className="table-auto w-full border-collapse border border-gray-300">
                <thead>
                    <tr>
                        <th className="border border-gray-300 p-2">Name</th>
                        <th className="border border-gray-300 p-2">Institute</th>
                        <th className="border border-gray-300 p-2">Status</th>
                        <th className="border border-gray-300 p-2">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredUsers.map(user => {
                        const userInstituteName = institutes.find(inst => inst.id === user.instituteId)?.name || 'N/A';
                        const status = userAttendance[user.id] || 'Absent';
                        return (
                            <tr key={user.id} className="hover:bg-gray-100">
                                <td className="border border-gray-300 p-2">{user.firstName} {user.lastName}</td>
                                <td className="border border-gray-300 p-2">{userInstituteName}</td>
                                <td className="border border-gray-300 p-2">{status}</td>
                                <td className="border border-gray-300 p-2">
                                    <button
                                        onClick={() => handleAttendance(user.id, 'Present')}
                                        className="px-4 py-2 rounded bg-green-500 hover:bg-green-600 text-white mr-2"
                                    >
                                        Mark Present
                                    </button>
                                    <button
                                        onClick={() => handleAttendance(user.id, 'Absent')}
                                        className="px-4 py-2 rounded bg-red-500 hover:bg-red-600 text-white"
                                    >
                                        Mark Absent
                                    </button>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
}

export default Attendance;
