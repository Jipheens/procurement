import React, { useEffect, useState } from 'react';
import { useNavigate, Link,useLocation } from 'react-router-dom';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import axios from 'axios';
import { Card, CardContent, Typography } from '@mui/material';
import { Assignment, CheckCircle, People,Search } from '@mui/icons-material';
import '../components/ListOfRfq.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ApplicationForm from '../components/ApplicationForm';



function Fetchdata() {
  const [data, setData] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedItem, setExpandedItem] = useState(null);
  const location = useLocation();

  const navigate = useNavigate();

  const handleAction = (item) => {
    const { rfqNumber, rfqTitle, rfqItems } = item;

    navigate(`/application-form/`, {
      state: {
        rfqNumber,
        rfqTitle,
        rfqItems,
      },
    });
  };

  const extractDate = (datetime) => {
    const date = new Date(datetime);
    return date.toDateString();
  };

 
  const rfq = [
    {
      "id": 1,
      "rfqNumber": "RFQ/000000001",
      "rfqTitle": "Test",
      "rfqDescription": "TestDesc",
      "requisitionNumber": "",
      "startDate": "2023-05-31T21:00:00.000+00:00",
      "endDate": "2023-06-28T21:00:00.000+00:00",
      "createdBy": "soaadmin",
      "createdOn": "2023-06-22T14:16:10.163+00:00",
      "approvedBy": "soaadmin",
      "approvedOn": "2023-06-23T06:30:18.398+00:00",
      "modifiedOn": null,
      "remarks": "NA",
      "numberOfSuppliers": 2,
      "sendEmails": "Yes",
      "status": "APPROVED",
      "rfqItems": [
        {
          "id": 1,
          "itemName": "phone",
          "itemDescription": "Test DEsc",
          "quantity": 6
        },
        {
          "id": 2,
          "itemName": "laptop",
          "itemDescription": "Test DEsc",
          "quantity": 7
        },{
          "id": 1,
          "itemName": "bike",
          "itemDescription": "Test DEsc",
          "quantity": 8
        }]
      }]

           
  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
     setData(rfq);
    try {
      const response = await axios.get('http://192.168.0.112:9090/api/v1/rfq/one/gicovyr%40mailinator.com');
      // setData(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  async function handleDelete(rfqNumber) {
    try {
      await axios.delete(`http://192.168.0.112:9090/api/v1/rfq/one/gicovyr%40mailinator.com/${rfqNumber}`);
      fetchData();
    } catch (error) {
      console.log(error);
    }
  }

  function handleSearch(e) {
    setSearchQuery(e.target.value);
  }

  function filterData() {
    if (!searchQuery) {
      return data;
    }

    const lowercaseQuery = searchQuery.toLowerCase();

    return data.filter((rfq) =>
      Object.values(rfq)
        .join(' ')
        .toLowerCase()
        .includes(lowercaseQuery)
    );
  }

  const filteredData = filterData();

  function handleExpandItem(item) {
    if (expandedItem === item) {
      setExpandedItem(null);
    } else {
      setExpandedItem(item);
    }
  }

  // Number of records in the table
  const totalRecords = data.length;

  // Number of records with status as approved
  const approvedRecords = data.filter((rfq) => rfq.status === 'APPROVED').length;

  // Number of suppliers
  const totalSuppliers = data.reduce(
    (sum, rfq) => sum + rfq.numberOfSuppliers,
    0
  );

  return (
    <div>
     
      <div className="search-container">
        <div className="search-input-container">
          <input
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={handleSearch}
            className="search-input"
            style={{ backgroundColor: '#f5f5f5' }}
          />
          <Search className="search-icon" />
        </div>
      </div>


<div className="analytics-cards">
        <Card className="analytics-card" style={{ backgroundColor: '#113d18', color: 'white' }}>
          <CardContent>
            <div className="analytics-card-content">
              <div className="analytics-card-info">
                <Typography variant="h5" component="div">
                  Total Records
                </Typography>
                <Typography variant="h4" component="div">
                  {totalRecords}
                </Typography>
              </div>
              <Assignment className="analytics-card-icon" fontSize="large" />
            </div>
          </CardContent>
        </Card>
        <Card className="analytics-card" style={{ backgroundColor: '#113d18', color: 'white' }}>
          <CardContent>
            <div className="analytics-card-content">
              <div className="analytics-card-info">
                <Typography variant="h5" component="div">
                  Approved Records
                </Typography>
                <Typography variant="h4" component="div">
                  {approvedRecords}
                </Typography>
              </div>
              <CheckCircle className="analytics-card-icon" fontSize="large" />
            </div>
          </CardContent>
        </Card>
        <Card className="analytics-card" style={{ backgroundColor: '#113d18', color: 'white' }}>
          <CardContent>
            <div className="analytics-card-content">
              <div className="analytics-card-info">
                <Typography variant="h5" component="div">
                  Total Suppliers
                </Typography>
                <Typography variant="h4" component="div">
                  {totalSuppliers}
                </Typography>
              </div>
              <People className="analytics-card-icon" fontSize="large" />
            </div>
          </CardContent>
        </Card>
      </div>
      <hr />
      <h2 className="centered-text">List of RFQS</h2>
      <hr />


     
        <Routes>
          <Route path="/application-form/:rfqNumber" element={<ApplicationForm />} />
          <Route path="/" element={<table className="table table-striped table-bordered table-hover">
          <thead className="thead-dark">
    <tr>
      <th>RFQ Number</th>
      <th>RFQ Title</th>
      <th>RFQ Description</th>
      <th>Start Date</th>
      <th>End Date</th>
      <th>Created By</th>
      <th>Created On</th>
      <th>Number of Suppliers</th>
      <th>Action</th> {/* New column for Action */}
      <th>Item Name</th>
      <th>Item Description</th>
      <th>Quantity</th>
    </tr>
  </thead>
  <tbody>
    {rfq.map((item) => (
      <React.Fragment key={item.id}>
        {item.rfqItems.map((rfqItem, index) => (
          <tr key={`${item.id}-${index}`}>
            {index === 0 && (
              <>
<td rowSpan={item.rfqItems.length}>{item.rfqNumber}</td>
                <td rowSpan={item.rfqItems.length}>{item.rfqTitle}</td>
                <td rowSpan={item.rfqItems.length}>{item.rfqDescription}</td>
                <td rowSpan={item.rfqItems.length}>{extractDate(item.startDate)}</td>
                <td rowSpan={item.rfqItems.length}>{extractDate(item.endDate)}</td>
                <td rowSpan={item.rfqItems.length}>{item.createdBy}</td>
                <td rowSpan={item.rfqItems.length}>{extractDate(item.createdOn)}</td>
                <td rowSpan={item.rfqItems.length}>{item.numberOfSuppliers}</td>
              </>
            )}
            {index === 0 && (
              <td rowSpan={item.rfqItems.length}>
                    <button className="btn btn-primary" style={{alignSelf:"center"}} onClick={() => handleAction(item)}>Apply</button>
                  </td>
            )}
            <td>{rfqItem.itemName}</td>
            <td>{rfqItem.itemDescription}</td>
            <td>{rfqItem.quantity}</td>
          </tr>
        ))}
      </React.Fragment>
    ))}
  </tbody>
          </table>} />
        </Routes>
      


               
    </div>
  );
}

export default Fetchdata;
