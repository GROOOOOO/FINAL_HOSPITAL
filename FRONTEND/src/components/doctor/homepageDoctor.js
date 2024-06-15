import React from 'react';

import { Link } from 'react-router-dom';

const Homepagedoctor = () => {
    return (
        <nav className="crud-side">
            <div className="position-sticky">
                <div className="nav flex-column">
                    <Link style={{ color: 'green', fontWeight: 'bold' }} className="nav-link" to="/doctor"></Link>
                    <Link style={{ color: 'green', fontWeight: 'bold' }} className="nav-link" to="/doctorpage">Patient List</Link>
                    <Link style={{ color: 'green', fontWeight: 'bold' }} className="nav-link" to="/myAppointment">My Appointment</Link>
                    <Link style={{ color: 'green', fontWeight: 'bold' }} className="nav-link" to="/medicalrecords">Medical Records</Link>
                </div>
            </div>
        </nav>
    );
}

export default Homepagedoctor;
