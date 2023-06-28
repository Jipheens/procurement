import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useLocation, Link } from 'react-router-dom';
import axios from 'axios';
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import '../components/Dashboard.css'; // Import the CSS file for Dashboard
import CompanyProfile from '../components/companyprofile';
import Enviromentalsgd from '../components/EnvSocialGovDiv';
import Questionnaire from "../components/Risk.jsx";


export default function Dashboard() {
 
  return (
    <div>
      <Navbar />
      <div className="dashboard-container">
          {/* <Sidebar/>
         <CompanyProfile/>   
                 <Enviromentalsgd/>*/} 
                 <Questionnaire/>

        
      </div>
    </div>
  );
}
