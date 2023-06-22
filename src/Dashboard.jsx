import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
// import liquorsale from "./pictures/liquorsale.png";

function exportTableToPDF() {
  console.log('Exporting to PDF...');

  const doc = new jsPDF();

  // Get the table element
  const table = document.getElementById('my-table');
  console.log('Table element:', table);

  // Get the table data as an array of arrays
  const data = [];
  const rows = table.querySelectorAll('tr');
  rows.forEach((row) => {
    const rowData = [];
    const cells = row.querySelectorAll('td, th');
    cells.forEach((cell) => {
      rowData.push(cell.innerText);
    });
    // Exclude the last cell (action buttons) from the data
    rowData.pop();
    data.push(rowData);
  });
  console.log('Table data:', data);

  // Define the columns and column widths for the PDF
  const columns = ['Item Code', 'Item Name', 'Buying Price', 'Selling Price', 'Terminus'];
  const columnWidths = [30, 60, 80, 30, 60];

  // Add the table data to the PDF
  autoTable(doc, { head: [columns], body: data, startY: 20, columnWidths });

  doc.save('my-table.pdf');
}

export default function Dashboard() {
  const location = useLocation();
  const { user } = location.state;
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:40805/api/item")
      .then((response) => response.json())
      .then((jsonResponse) => {
        setData(jsonResponse);
      });
  }, []);

  async function handleDelete(itemCode) {
    try {
      await axios.delete("http://localhost:40805/api/item/" + itemCode);
      fetchData();
    } catch (error) {
      console.log(error);
    }
  }

  function fetchData() {
    fetch("http://localhost:40805/api/item")
      .then((response) => response.json())
      .then((jsonResponse) => {
        setData(jsonResponse);
      });
  }

  return (
    <div style={{ border: '1px solid black', padding: '20px' }}>
      <h2 style={{ textAlign: 'center' }}>Sellers Dashboard</h2>
      <div>
        <h1>Welcome, {user.username}!</h1>
        <h1>You are a, {user.role}!</h1>
        <p>Email: {user.emailAddress}</p>

        <p><hr /></p>
        <Link to="/new">
          <button className='btn btn-warning'>NEW ITEM</button>
        </Link>
        <button onClick={exportTableToPDF}>Export to PDF</button>

        <p><hr /></p>
        <table id="my-table" className='table table-striped table-active table-hover my-table'>
          <thead className="table-dark">
            <tr>
              <th>Item Code</th>
              <th>Item Name</th>
              <th>Buying Price</th>
              <th>Selling Price</th>
              <th>Terminus</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((product) => (
              <tr key={product.itemCode}>
                <td>{product.itemCode}</td>
                <td>{product.itemName}</td>
                <td>{product.buyingPrice}</td>
                <td>{product.sellingPrice}</td>
                <td>{product.terminus}</td>
                <td>
                  <Link to={`/${product.itemCode}/edit`}>
                    <button className="btn btn-primary btn-sm">EDIT</button>
                  </Link>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => handleDelete(product.itemCode)}
                  >
                    DELETE
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
