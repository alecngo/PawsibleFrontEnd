import React from 'react';
import { Link } from 'react-router-dom';  // Import the Link component

function NavBar() {
    return (
        <nav className="navbar navbar-expand-lg bg-white navbar-light shadow-sm py-3 py-lg-0 px-3 px-lg-0">
            <Link to="/" className="navbar-brand ms-lg-5">
                <h1 className="m-0 text-uppercase text-dark"><i className="bi bi-shop fs-1 text-primary me-3"></i>RESCUE-DEV</h1>
            </Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarCollapse">
                <div className="navbar-nav ms-auto py-0">
                    <Link to="/home" className="nav-item nav-link active">Pet Finder</Link>
                    <Link to="/about" className="nav-item nav-link">About</Link>
                    <Link to="/portal" className="nav-item nav-link">Your Portal</Link>
                    <Link to="/login" className="nav-item nav-link nav-contact bg-primary text-white px-5 ms-lg-5">Login<i className="bi bi-arrow-right"></i></Link>
                    <Link to="/signup" className="nav-item nav-link nav-contact bg-primary text-white px-5 ms-lg-5">Sign Up<i className="bi bi-arrow-right"></i></Link>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;
