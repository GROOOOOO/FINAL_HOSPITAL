import React, {
    useEffect,
    useState,
} from 'react';

import { useNavigate } from 'react-router-dom';

import Homepageuser from './HomePageUser';

export default function DoctorManagement() {
    const [appointments, setAppointments] = useState([]);
    const navigate = useNavigate();
    const loggedInEmail = localStorage.getItem('user-email'); // Get logged-in user's email
    const userId = Number(localStorage.getItem('user-id')); // Get logged-in user's ID and convert it to a number
    console.log('Logged in email:', loggedInEmail);
    console.log('Logged in user ID:', userId);

    useEffect(() => {
        const fetchData = async () => {
            try {
                // Fetch appointments
                const appointmentResponse = await fetch('http://127.0.0.1:8000/api/appointments');
                const appointmentData = await appointmentResponse.json();

                console.log('Fetched appointment data:', appointmentData);

                if (appointmentData.length > 0) {
                    let userAppointments = [];

                    // Iterate through each appointment object in appointmentData
                    for (let i = 0; i < appointmentData.length; i++) {
                        console.log('Checking appointment:', appointmentData[i]);
                        // Check if the patient_id of the current appointment matches the loggedIn userId
                        if (appointmentData[i].patient_id === userId) {
                            console.log('Match found for userId:', userId);
                            // If match found, add to userAppointments array
                            userAppointments.push(appointmentData[i]);
                        }
                    }

                    if (userAppointments.length > 0) {
                        setAppointments(userAppointments);
                    } else {
                        console.error('No appointments found for the provided user ID.');
                        // Handle the case where no appointments are found for the user
                    }
                } else {
                    console.error('No appointments found in the database.');
                    // Handle the case where no appointments are found in the database
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        if (userId) {
            fetchData();
        }
    }, [userId]);

    const deleteAppointment = async (appointmentId) => {
        try {
            const response = await fetch(`http://127.0.0.1:8000/api/appointments/${appointmentId}`, {
                method: 'DELETE',
            });

            if (response.ok) {
                // Remove the deleted appointment from the state
                setAppointments(appointments.filter(appointment => appointment.id !== appointmentId));
            } else {
                console.error('Failed to delete the appointment.');
            }
        } catch (error) {
            console.error('Error deleting the appointment:', error);
        }
    };

    return (
        <div className="crud">
            <Homepageuser />
            <main className="crud-body">
                <h1 style={{ color: 'green', fontWeight: 'bold' }}>Appointments</h1>
                <table className='table table-striped'>
                    <thead className='thead-dark'>
                        <tr>
                            <th>ID</th>
                            <th>Patient ID</th>
                            <th>Doctor ID</th>
                            <th>Appointment Date</th>
                            <th>Status</th>
                            <th>Reason</th>
                            <th>Option</th>
                        </tr>
                    </thead>
                    <tbody>
                        {appointments.map((appointment) => (
                            <tr key={appointment.id}>
                                <td>{appointment.id}</td>
                                <td>{appointment.patient_id}</td>
                                <td>{appointment.doctor_id}</td>
                                <td>{new Date(appointment.appointment_date).toLocaleString()}</td>
                                <td>{appointment.status}</td>
                                <td>{appointment.reason}</td>
                                <td>
                                    <button
                                        className="btn btn-danger"
                                        onClick={() => deleteAppointment(appointment.id)}
                                        type="button">
                                        Cancel
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </main>
        </div>
    );
}
