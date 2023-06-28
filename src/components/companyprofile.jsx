import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';

const CompanyProfile = () => {
  return (
    <Box sx={{ marginLeft: '22%' }}>
      <Typography variant="h4" gutterBottom>
        Company Profile
      </Typography>
      <Box sx={{ display: 'grid', gridGap: '1rem' }}>
        <Typography variant="h6">
          <b>Company Name:</b> ABC Corporation
        </Typography>
        <Typography variant="h6">
          <b>Year Est:</b> 2005
        </Typography>
        <Typography variant="h6">
          <b>Company Size:</b> Large
        </Typography>
        <Typography variant="h6">
          <b>No of Employees:</b> 500+
        </Typography>
        <Typography variant="h6">
          <b>Industry:</b> Technology
        </Typography>
        <Typography variant="h6">
          <b>Products and Services:</b> Software Development
        </Typography>
        <Typography variant="h6">
          <b>Areas Served:</b> Global
        </Typography>
        <Typography variant="h6">
          <b>Tax ID:</b> 123456789
        </Typography>
        <Typography variant="h6">
          <b>PO Delivery Email:</b> info@abccorp.com
        </Typography>
        <Typography variant="h6">
          <b>Ownership Type:</b> Public
        </Typography>
      </Box>

      <Box sx={{ display: 'flex', alignItems: 'center', marginTop: '2rem' }}>
        <Typography variant="h6" sx={{ marginRight: '1rem' }}>
          Online Presence:
        </Typography>
        <Box sx={{ display: 'flex', gap: '1rem', fontSize: '2rem' }}>
          <FaFacebook color="blue" />
          <FaInstagram color="pink" />
          <FaLinkedin color="green" />
          <FaTwitter color="red" />
        </Box>
      </Box>
    </Box>
  );
};

export default CompanyProfile;