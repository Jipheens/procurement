import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useLocation, Link } from 'react-router-dom';
import axios from 'axios';
import '../components/Dashboard.css'; // Import the CSS file for Dashboard
import CompanyProfile from '../components/companyprofile';


function tendersSourcing() {

    const location = useLocation();
  const { user } = location.state;
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  async function handleDelete(itemCode) {
    try {
      await axios.delete(`http://localhost:40805/api/item/${itemCode}`);
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
    <div>
      <Navbar />
      <div className="dashboard-container">
        <Sidebar />
        <CompanyProfile/>

        <div className="content-container">
          <h2 className="dashboard-title">Tenders Sourcing :</h2>          
          <table className='table table-striped table-hover'>
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
    </div>
  );

      
}

export default tendersSourcing