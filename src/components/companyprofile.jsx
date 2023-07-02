import React, { useContext } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Fab from '@mui/material/Fab';
import EditIcon from '@mui/icons-material/Edit';
import { Dialog, DialogTitle, DialogContent, TextField, Button } from '@mui/material';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { CompanyProfileContext } from './CompanyProfileContext';

const CompanyProfile = () => {
  const { companyProfile, updateCompanyProfile } = useContext(CompanyProfileContext);
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSave = () => {
    // Here, you can update the company profile information in your external storage or API
    // For now, we will just console log the updated profile
    console.log('Updated Company Profile:', companyProfile);

    handleClose();
  };

  return (
    <Box sx={{ marginLeft: '22%', marginTop: '1%' }}>
      <Box
        sx={{
          borderBottom: '1px solid #ccc',
          paddingRight: '1rem',
          marginBottom: '1rem',
          position: 'relative',
        }}
      >
        <Typography variant="h4" gutterBottom>
          Company Profile
        </Typography>
        <Box
          sx={{
            display: 'grid',
            gridGap: '1rem',
            gridTemplateColumns: '1fr 1fr',
            alignItems: 'start',
            marginBottom: '1rem',
          }}
        >
          <div>
            <Typography variant="h6">
              <b>Company Name:</b> {companyProfile.companyName}
            </Typography>
            <Typography variant="h6">
              <b>Year Est:</b> {companyProfile.yearEst}
            </Typography>
            <Typography variant="h6">
              <b>Company Size:</b> {companyProfile.companySize}
            </Typography>
            <Typography variant="h6">
              <b>No of Employees:</b> {companyProfile.noOfEmployees}
            </Typography>
            <Typography variant="h6">
              <b>Industry:</b> {companyProfile.industry}
            </Typography>
          </div>
          <div>
            <Typography variant="h6">
              <b>Products and Services:</b> {companyProfile.productsAndServices}
            </Typography>
            <Typography variant="h6">
              <b>Areas Served:</b> {companyProfile.areasServed}
            </Typography>
            <Typography variant="h6">
              <b>Tax ID:</b> {companyProfile.taxID}
            </Typography>
            <Typography variant="h6">
              <b>PO Delivery Email:</b> {companyProfile.poDeliveryEmail}
            </Typography>
            <Typography variant="h6">
              <b>Ownership Type:</b> {companyProfile.ownershipType}
            </Typography>
          </div>

          <Fab
            color="secondary"
            aria-label="edit"
            size="large"
            sx={{
              position: 'absolute',
              top: '1rem',
              right: 'calc(1rem + 17px + 12px)',
              width: '64px',
              height: '64px',
              color: '#113d18',
              backgroundColor: '#113d18',
            }}
            onClick={handleClickOpen}
          >
            <EditIcon sx={{ color: '#fff' }} />
          </Fab>
        </Box>
      </Box>

      <Box
        sx={{
          borderBottom: '1px solid #ccc',
          paddingRight: '1rem',
          paddingBottom: '1rem',
          marginTop: '1rem',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Typography variant="h6">
          <b>Online Presence:</b>
        </Typography>
        <Box sx={{ display: 'flex', gap: '1rem', fontSize: '2rem', marginTop: '1rem' }}>
          <FaFacebook color="blue" />
          <FaInstagram color="pink" />
          <FaLinkedin color="green" />
          <FaTwitter color="red" />
        </Box>
      </Box>

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Edit Company Profile</DialogTitle>
        <DialogContent>
          <TextField
            label="Company Name"
            fullWidth
            value={companyProfile.companyName}
            onChange={(e) => updateCompanyProfile({ companyName: e.target.value })}
            sx={{ marginBottom: '1rem' }}
          />
          <TextField
            label="Year Est"
            fullWidth
            value={companyProfile.yearEst}
            onChange={(e) => updateCompanyProfile({ yearEst: e.target.value })}
            sx={{ marginBottom: '1rem' }}
          />
          <TextField
            label="Company Size"
            fullWidth
            value={companyProfile.companySize}
            onChange={(e) => updateCompanyProfile({ companySize: e.target.value })}
            sx={{ marginBottom: '1rem' }}
          />
          <TextField
            label="No of Employees"
            fullWidth
            value={companyProfile.noOfEmployees}
            onChange={(e) => updateCompanyProfile({ noOfEmployees: e.target.value })}
            sx={{ marginBottom: '1rem' }}
          />
          <TextField
            label="Industry"
            fullWidth
            value={companyProfile.industry}
            onChange={(e) => updateCompanyProfile({ industry: e.target.value })}
            sx={{ marginBottom: '1rem' }}
          />
          <TextField
            label="Products and Services"
            fullWidth
            value={companyProfile.productsAndServices}
            onChange={(e) => updateCompanyProfile({ productsAndServices: e.target.value })}
            sx={{ marginBottom: '1rem' }}
          />
          <TextField
            label="Areas Served"
            fullWidth
            value={companyProfile.areasServed}
            onChange={(e) => updateCompanyProfile({ areasServed: e.target.value })}
            sx={{ marginBottom: '1rem' }}
          />
          <TextField
            label="Tax ID"
            fullWidth
            value={companyProfile.taxID}
            onChange={(e) => updateCompanyProfile({ taxID: e.target.value })}
            sx={{ marginBottom: '1rem' }}
          />
          <TextField
            label="PO Delivery Email"
            fullWidth
            value={companyProfile.poDeliveryEmail}
            onChange={(e) => updateCompanyProfile({ poDeliveryEmail: e.target.value })}
            sx={{ marginBottom: '1rem' }}
          />
          <TextField
            label="Ownership Type"
            fullWidth
            value={companyProfile.ownershipType}
            onChange={(e) => updateCompanyProfile({ ownershipType: e.target.value })}
            sx={{ marginBottom: '1rem' }}
          />

          <Button variant="contained" color="primary" onClick={handleSave} sx={{ marginTop: '1rem' }}>
            Save
          </Button>
        </DialogContent>
      </Dialog>
    </Box>
  );
};

export default CompanyProfile;
