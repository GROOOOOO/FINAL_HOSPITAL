import './homepage.css'; // Import your CSS file for custom styles

import React from 'react';

import { Link } from 'react-router-dom';

const Homepage = () => {
    return (
        <nav className="crud-side">
            <div className="position-sticky">
                <div className="nav flex-column">
                    <Link style={{ color: 'green', fontWeight: 'bold' }} className="nav-link" to="/admin"></Link>
                    <Link style={{ color: 'green', fontWeight: 'bold' }} className="nav-link" to="/manageuser">Manage User</Link>
                    <Link style={{ color: 'green', fontWeight: 'bold' }} className="nav-link" to="/managedoctor">Manage Doctor</Link>
                </div>
            </div>
        </nav>
    );
}

export default Homepage;
