import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../components/RiskAndCompliance.css";

const Questionnaire = () => {
  return (
    
    <div className='page' style={{ marginTop: '60px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
        <div style={{ textAlign: 'left' }}>
          <Typography variant="h4" component="h2" style={{ fontWeight: 'bold' }}>
            Risk & Compliance
          </Typography>
          <Typography variant="subtitle1" color="textSecondary" style={{ textAlign: 'left' }}>
            Help build trust with customers by sharing your policies regarding information security, data privacy and re 
          </Typography>
        </div>
        <div style={{ marginLeft: 'auto' }}>
          <button className="edit-section-button">EDIT SECTION</button>
        </div>
      </div>
    
      <Accordion className='custom-jumbotron'>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="Supplier-Diversity-and-Inclusion"
        >
          <Typography variant="h6">Supplier Diversity & Inclusion</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
    
          <br />
    
          <Accordion className='custom-jumbotron'>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="Tier-Two-Supplier-Diversities"
            >
              <Typography variant="h6">Tier Two Supplier Diversities</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
    
          <br />
    
          <Accordion className='custom-jumbotron'>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="Anti-Bribery-and-Anti-Corruption"
            >
              <Typography variant="h6">Anti-Bribery & Anti-Corruption</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
    
          <br />
    
          <Accordion className='custom-jumbotron'> 
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="Corporate-Social-Responsibility"
            >
              <Typography variant="h6">Corporate Social Reponsibility</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
    
          <br />
    
          <Accordion className='custom-jumbotron'>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="Child-Labour"
            >
              <Typography variant="h6">Child Labour</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
    
          <br />
    
          <Accordion className='custom-jumbotron'>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="Conflict-Minerals"
            >
              <Typography variant="h6">Conflict Minerals</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
    
          <br />
    
          <Accordion className='custom-jumbotron'>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="Hazardous-Minerals"
            >
              <Typography variant="h6">Hazardous Minerals</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
    
          <br />
    
          <Accordion className='custom-jumbotron'>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="ESG-Reports/Sustainability-Goals"
            >
              <Typography variant="h6">ESG Reports/Sustainability Goals</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
    
          <br />
    
          <Accordion className='custom-jumbotron'>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="ESG-Ratings"
            >
              <Typography variant="h6">ESG Ratings</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
    
          <br />
    
          <Accordion className='custom-jumbotron'>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="Sustainability-Ratings"
            >
              <Typography variant="h6">Sustainability Ratings</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
    
          <br />
    
          <Accordion className='custom-jumbotron'>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="Carbon-Footprint/GH-Emissions"
            >
              <Typography variant="h6">Carbon Footprint/GH Emissions</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
    
          <br />
    
          <Accordion className='custom-jumbotron'>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="Net-Zero-Targets"
            >
              <Typography variant="h6">Net Zero Targets</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>
      );
};

export default Questionnaire;
