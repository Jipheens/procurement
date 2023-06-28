import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';

function a11yProps(index: number) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

const VerticalTabs = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  return (
    <Tabs
      orientation="vertical"
      variant="scrollable"
      value={value}
      onChange={handleChange}
      aria-label="Vertical tabs example"
      sx={{
        flexGrow: 1,
        bgcolor: 'background.paper',
        display: 'flex',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        borderRadius: '4px',
        overflow: 'hidden',
      }}
      TabIndicatorProps={{ style: { display: 'none' } }} // Hide the indicator line
    >
      <Tab
        label="COMPANY PROFILE"
        {...a11yProps(0)}
        sx={{
          width: '100%',
          color: '#212529',
          fontWeight: 'bold',
          '&:hover': {
            backgroundColor: 'rgba(0, 0, 0, 0.1)',
            transition: 'background-color 0.3s ease-in-out',
          },
        }}
      />
      <Tab
        label={
          <Typography sx={{ lineHeight: '1.2em' }}>
            ENVIRONMENTAL SOCIAL<br />GOVERNANCE & DIVERSITY
          </Typography>
        }
        {...a11yProps(1)}
        sx={{
          width: '100%',
          color: '#212529',
          fontWeight: 'bold',
          '&:hover': {
            backgroundColor: 'rgba(0, 0, 0, 0.1)',
            transition: 'background-color 0.3s ease-in-out',
          },
        }}
      />
      <Tab
        label="Risk and Compliance"
        {...a11yProps(2)}
        sx={{
          width: '100%',
          color: '#212529',
          fontWeight: 'bold',
          '&:hover': {
            backgroundColor: 'rgba(0, 0, 0, 0.1)',
            transition: 'background-color 0.3s ease-in-out',
          },
        }}
      />
      <Tab
        label="Financial Profits"
        {...a11yProps(3)}
        sx={{
          width: '100%',
          color: '#212529',
          fontWeight: 'bold',
          '&:hover': {
            backgroundColor: 'rgba(0, 0, 0, 0.1)',
            transition: 'background-color 0.3s ease-in-out',
          },
        }}
      />
    </Tabs>
  );
  
  
  
};

export default VerticalTabs;
