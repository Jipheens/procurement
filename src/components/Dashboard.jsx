import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import CompanyProfile from '../components/companyprofile';
import Enviromentalsgd from '../components/EnvSocialGovDiv';
import Questionnaire from '../components/RiskAndCompliance';
import FinancialPerformance from '../components/FinancialPerformance';
import RatingAndReferences from '../components/RatingAndReferences';

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabChange = (newValue) => {
    setActiveTab(newValue);
  };

  return (
    <div>
      <Navbar />
      <div className="dashboard-container">
        <div className="sidebar">
          <Sidebar activeTab={activeTab} handleTabChange={handleTabChange} />
        </div>
        <div className="content">
          {activeTab === 0 && <CompanyProfile />}
          {activeTab === 1 && <Enviromentalsgd />}
          {activeTab === 2 && <Questionnaire />}
          {activeTab === 3 && <FinancialPerformance />}
          {activeTab === 4 && <RatingAndReferences />}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
