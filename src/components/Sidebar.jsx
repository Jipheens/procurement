import React, { useState } from 'react';
import '../components/sidebar.css';
import { Button } from '@mui/material';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import TabComponent from './Tabcomponents';
import { useLocation, Link } from 'react-router-dom';


const Sidebar = ({ profile }) => {
  const [selectedFiles, setSelectedFiles] = useState({
    certificate: null,
    taxRegistration: null,
    taxCompliance: null,
    registeredOffice: null,
    financialStatements: null,
    
  });
  const location = useLocation();
  const { user } = location.state;
  const [data, setData] = useState([]);

  const handleFileChange = (event, field) => {
    setSelectedFiles((prevSelectedFiles) => ({
      ...prevSelectedFiles,
      [field]: event.target.files[0],
    }));
  };

  const handleUpload = (field) => {
    const selectedFile = selectedFiles[field];
    if (selectedFile) {
      console.log(`Uploading ${field}:`, selectedFile);
      // Perform upload logic here
    }
  };

  return (
    <div className="sidebar">
     <div className="user-info">
  <h1>Welcome, {user.username}!</h1>
  <h1>You are a, {user.role}!</h1>
  <p>Email: {user.emailAddress}</p>
  <div className="profile-picture">
    <input type="file" id="profile-picture" accept="image/*" />
    <img src="/images/avatar.png" alt="Profile Picture" id="image-preview" />
  </div>
</div>





      <button>Edit Profile</button>
      <TabComponent />
      <hr></hr>
      <hr></hr>
      <TabComponent />
      <hr></hr>
      <hr></hr>
      <TabComponent />
      <hr></hr>
      <hr></hr>
  
    </div>
  );
};

export default Sidebar;
