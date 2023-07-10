import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

const CustomNavbar = () => {
  const navigate = useNavigate();
  const [confirmLogout, setConfirmLogout] = useState(false);

  const handleLogout = () => {
    // Perform logout actions here
    navigate('/');
  };

  const handleSourcingClick = () => {
    navigate('../source/ListofRfq');
  };

  const handleLogoutConfirmation = () => {
    setConfirmLogout(true);
  };

  const handleCancelLogout = () => {
    setConfirmLogout(false);
  };

  const handleConfirmLogout = () => {
    setConfirmLogout(false);
    handleLogout();
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark fixed-top" style={{ backgroundColor: '#1a5417' }}>
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
              <span className="sourcing-link" onClick={handleSourcingClick}>
                Sourcing
              </span>
            </a>
          </li>
            <li className="nav-item">
              <a className="nav-link" href="#" style={{ color: '#ffffff' }}>
                Setup
              </a>
            </li>
          </ul>
        </div>

        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <button className="btn btn-link" onClick={handleLogoutConfirmation}>
              <FontAwesomeIcon icon={faSignOutAlt} size="lg" style={{ color: '#ffffff' }} />
            </button>
          </li>
        </ul>
      </nav>

      {confirmLogout && (
        <div className="modal" style={{ display: 'block', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Confirm Logout</h5>
                <button type="button" className="close" aria-label="Close" onClick={handleCancelLogout}>
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <p>Are you sure you want to log out?</p>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={handleCancelLogout}>
                  Cancel
                </button>
                <button type="button" className="btn btn-success" onClick={handleConfirmLogout}>
                  Logout
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CustomNavbar;
