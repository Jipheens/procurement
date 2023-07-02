import React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import "../components/Tabcomponent.css";

const TabComponent = ({ activeTab, handleTabChange }) => {
  const handleChange = (event, newValue) => {
    handleTabChange(newValue);
  };

  return (
    <div className="tab-component">
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={activeTab}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{
          borderRight: '1px solid rgba(0, 0, 0, 0.12)',
        }}
      >
        <Tab
          label="Company Profile"
          value={0}
          sx={{
            fontSize: '16px',
            fontWeight: 'bold',
            '&.Mui-selected': {
              color: '#000',
            },
          }}
        />
        <Tab
          label={
            <div>
              Environmental,
              <br />
              Social,
              <br />
              Governance &amp; Diversity
            </div>
          }
          value={1}
          sx={{
            fontSize: '16px',
            fontWeight: 'bold',
            '&.Mui-selected': {
              color: '#000',
            },
          }}
        />
        <Tab
          label="Risk & Compliance"
          value={2}
          sx={{
            fontSize: '16px',
            fontWeight: 'bold',
            '&.Mui-selected': {
              color: '#000',
            },
          }}
        />
        <Tab
          label="Financial Performance"
          value={3}
          sx={{
            fontSize: '16px',
            fontWeight: 'bold',
            '&.Mui-selected': {
              color: '#000',
            },
          }}
        />
        <Tab
          label="Rating & References"
          value={4}
          sx={{
            fontSize: '16px',
            fontWeight: 'bold',
            '&.Mui-selected': {
              color: '#000',
            },
          }}
        />
      </Tabs>
    </div>
  );
};

export default TabComponent;
