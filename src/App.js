import React, { useState, useEffect } from 'react';

function AttendanceList() {
    // State to store attendance data
    const [attendanceData, setAttendanceData] = useState([]);

    // useEffect hook to fetch data when the component mounts
    useEffect(() => {
        // Function to fetch attendance data using Fetch API
        const fetchAttendanceData = async () => {
            try {
                // Make GET request to fetch attendance data
                const response = await fetch('http://localhost:8000/api/attendance');
                const data = await response.json();

                // Set attendance data in state
                setAttendanceData(data);
            } catch (error) {
                console.error('Error fetching attendance data:', error);
            }
        };

        // Call fetchAttendanceData function
        fetchAttendanceData();
    }, []); // Empty dependency array to run effect only once on mount

    return (
        <div>
            <h2>Attendance List</h2>
            <ul>
                {/* Render attendance data */}
                {attendanceData.map((attendance, index) => (
                    <li key={index}>{attendance.name} - {attendance.status}</li>
                ))}
            </ul>
        </div>
    );
}

export default AttendanceList;
