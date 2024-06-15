import React from 'react';

import { Link } from 'react-router-dom';

const Homepageuser = () => {
    return (
        <nav className="crud-side">
            <div className="position-sticky">
                <div className="nav flex-column">
                    <Link style={{ color: 'green', fontWeight: 'bold' }} className="nav-link" to="/user"></Link>
                    <Link style={{ color: 'green', fontWeight: 'bold' }} className="nav-link" to="/appointmentDoctor">Manage Appointment</Link>
                    <Link style={{ color: 'green', fontWeight: 'bold' }} className="nav-link" to="/userpage">Appoint Doctor</Link>
                    <Link style={{ color: 'green', fontWeight: 'bold' }} className="nav-link" to="/MyMedicalRecords">My Medical Record</Link>
                </div>
            </div>
        </nav>
    );
}

export default Homepageuser;
