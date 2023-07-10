import React, { useState } from 'react';
import '../components/sidebar.css';
import { Button } from '@mui/material';
import TabComponent from '../components/Tabcomponents';
import { useLocation, Link } from 'react-router-dom';
import picha from "../images/profilePlaceholder.jpg"

const Sidebar = ({ profile, activeTab, handleTabChange }) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const location = useLocation();
  const { username,roles,email } = location.state.user;
  const [data, setData] = useState([]);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
    // Perform upload logic here if needed
  };

  const handleProfilePictureChange = (event) => {
    // Open file dialog on click
    event.preventDefault();
    document.getElementById("profile-picture").click();
  };

  return (
    <div className="sidebar">
      <div className="user-info">
        <h1>Welcome, {username}!</h1>
        <p>Username: {username}</p>
        <p>Roles: {roles.join(', ')}</p>
        <p>Email: {email}</p>
        <div className="profile-picture">
          <Link to="#" onClick={handleProfilePictureChange}>
            {selectedFile ? (
              <img
                src={URL.createObjectURL(selectedFile)}
                alt="Profile Picture"
                id="image-preview"
              />
            ) : (
              <img
                src={picha}
                alt="Profile Placeholder"
                className="placeholderimage"
              />
            )}
          </Link>
          <input
            type="file"
            id="profile-picture"
            accept="image/*"
            onChange={handleFileChange}
            style={{ display: 'none' }}
          />
        </div>
      </div>

      <button className="edit-profile-button">Edit Profile</button>
      <TabComponent activeTab={activeTab} handleTabChange={handleTabChange} />
      <hr></hr>
      {/* <hr></hr>
      <TabComponent activeTab={activeTab} handleTabChange={handleTabChange} />
      <hr></hr>
      <hr></hr>
      <TabComponent activeTab={activeTab} handleTabChange={handleTabChange} />
      <hr></hr>
      <hr></hr> */}
    </div>
  );
};

export default Sidebar;
