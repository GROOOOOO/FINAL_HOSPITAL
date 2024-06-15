import React, { useState } from 'react';

import {
    Link,
    useNavigate,
} from 'react-router-dom';

export default function Header({ items, setSearchData }) {
    const [query, setQuery] = useState('');
    const navigate = useNavigate();
    const user = JSON.parse(localStorage.getItem('user-info'));

    async function search() {
        let result = await fetch('http://127.0.0.1:8000/api/search/' + query);
        result = await result.json();

        if (result) {
            setSearchData(result);
            navigate("/search");
        } else {
            console.log(result);
            navigate('/message');
        }
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <div className="navbar-brand d-flex align-items-center">
                    <img src="/PNCS.png" alt="Logo" className="me-2" style={{ maxWidth: '50px', maxHeight: '50px' }} />
                    <span style={{ color: 'green', fontWeight: 'bold' }}>PNC-FAKE_H0SPITAL</span>
                </div>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <ul className="navbar-nav"><li className="nav-item">
                        <Link style={{ color: 'green', fontWeight: 'bold' }} className="nav-link" to="/">Home</Link>
                    </li>
                        {/* Add more navigation items as needed */}
                        <li className="nav-item dropdown">

                            {
                                user ? (
                                    <>
                                        <Link style={{ color: 'green', fontWeight: 'bold' }} className="nav-link dropdown-toggle" to="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            {user.name}
                                        </Link>
                                        <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                            <li><Link style={{ color: 'green', fontWeight: 'bold' }} className="dropdown-item" to="/logout">Logout</Link></li>
                                        </ul>
                                    </>
                                ) : (
                                    <Link style={{ color: 'green', fontWeight: 'bold' }} className="nav-link" to="/login">Login</Link>
                                )
                            }
                        </li>
                        {!user && (
                            <li className="nav-item">
                                <Link style={{ color: 'green', fontWeight: 'bold' }} className="nav-link" to="/register">Register</Link>
                            </li>
                        )}
                    </ul>
                </div>
            </div>
        </nav>
    );
}
