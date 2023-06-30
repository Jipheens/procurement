import React, { useState } from 'react';
import '../components/sidebar.css';
import { Button } from '@mui/material';
import TabComponent from '../components/Tabcomponents';
import { useLocation, Link } from 'react-router-dom';
import picha from "../images/profilePlaceholder.jpg"

const Sidebar = ({ profile, activeTab, handleTabChange }) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const location = useLocation();
  const { user } = location.state;
  const [data, setData] = useState([]);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = () => {
    if (selectedFile) {
      console.log('Uploading file:', selectedFile);
      // Perform upload logic here
    }
  };

  const handleProfilePictureChange = (event) => {
    handleFileChange(event);
  };

  return (
    <div className="sidebar">
      <div className="user-info">
        <h1>Welcome, {user.username}!</h1>
        <h1>You are a, {user.role}!</h1>
        <p>Email: {user.emailAddress}</p>
        <div className="profile-picture">
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
              className="custom-placeholder-image" 
            />
          )}
          <label htmlFor="profile-picture" className="choose-file-button">
            Choose File
            <input
              type="file"
              id="profile-picture"
              accept="image/*"
              onChange={handleProfilePictureChange}
            />
          </label>
        </div>
      </div>

      <button>Edit Profile</button>
      <TabComponent activeTab={activeTab} handleTabChange={handleTabChange} />
      <hr></hr>
      <hr></hr>
      <TabComponent activeTab={activeTab} handleTabChange={handleTabChange} />
      <hr></hr>
      <hr></hr>
      <TabComponent activeTab={activeTab} handleTabChange={handleTabChange} />
      <hr></hr>
      <hr></hr>
    </div>
  );
};

export default Sidebar;
