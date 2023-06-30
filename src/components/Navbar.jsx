import React from 'react';

const CustomNavbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark" style={{ backgroundColor: '#1a5417' }}>
      <a className="navbar-brand" href="#" style={{ color: '#ffffff' }}>
        KINGDOM BANK
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link" href="#" style={{ color: '#ffffff' }}>
              Home
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#" style={{ color: '#ffffff' }}>
              Profile
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#" style={{ color: '#ffffff' }}>
              Orders
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#" style={{ color: '#ffffff' }}>
              Invoice
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#" style={{ color: '#ffffff' }}>
              Sourcing
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#" style={{ color: '#ffffff' }}>
              Setup
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default CustomNavbar;
