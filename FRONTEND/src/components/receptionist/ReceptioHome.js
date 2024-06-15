import React from 'react';

import { Link } from 'react-router-dom';

const Homepagereceptionist = () => {
    return (
        <nav className="crud-side">
            <div className="position-sticky">
                <div className="nav flex-column">
                    <Link style={{ color: 'green', fontWeight: 'bold' }} className="nav-link" to="/homepagereceptionist"></Link>
                    <Link style={{ color: 'green', fontWeight: 'bold' }} className="nav-link" to="/appointment">Appointment</Link>
                    <Link style={{ color: 'green', fontWeight: 'bold' }} className="nav-link" to="/managepatient">Manage Patient</Link>
                </div>
            </div>
        </nav>
    );
}

export default Homepagereceptionist;
