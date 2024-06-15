import './Home.css'; // Make sure to create and import a CSS file for custom styles
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';

import React from 'react';

export default function Home() {
    return (
        <div className="home-container">
            <div className='img-container'>
                <img
                    className='presentation-img'
                    src='/NURS.jpg' // Assuming the image is in the public folder
                    alt='Home'
                />
            </div>
            <div className='home-options'>
                <button className="btn custom-btn" onClick={() => { window.location.href = 'login' }}>Log In</button>
                <button className="btn custom-btn" onClick={() => { window.location.href = 'signup' }}>Sign Up</button>
            </div>
            {/* Additional content goes here */}
        </div>
    );
}
