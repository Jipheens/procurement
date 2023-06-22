import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import "./styles.css";

function LoginPage() {
  const [Username, setUsername] = useState('');
  const [Password, setPassword] = useState('');
  const [token, setToken] = useState(null);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);
  const navigate = useNavigate();
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch('https://localhost:44381/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ Username, Password })
      });

      if (response.ok) {
        const data = await response.json();
        setToken(data.token);

        
      } else {
        setError('Invalid username or password');
      }
    } catch (error) {
      setError('Something went wrong. Please try again later.');
      console.log(error);
    }

  };

  useEffect(() => {
    if (token) {
      const fetchData = async () => {
        try {
          const response = await fetch('https://localhost:44381/api/user/sellers', {
            headers: {
              Authorization: `Bearer ${token}`
            }
          });

          if (response.ok) {
            const data = await response.json();
            setData(data.seller);
            navigate('/dashboard', { state: { user: data.user } });



          } else {
            setError('Authentication Failed. You are not a seller.');
          }
        } catch (error) {
          setError('Something went wrong. Please try again later.');
        }
      };

      fetchData();
    }
  }, [token]);


  useEffect(() => {
    if (token) {
      const fetchData = async () => {
        try {
          const response = await fetch('https://localhost:44381/api/user/Admins', {
            headers: {
              Authorization: `Bearer ${token}`
            }
          });

          if (response.ok) {
            const data = await response.json();
            setData(data.administrator);
            navigate('/admindashboard', { state: { user: data.user } });



          } else {
            setError('Authentication Failed. You are not an Admin.');
          }
        } catch (error) {
          console.log(error);
          setError('Something went wrong. Please try again later.');
        }
      };

      fetchData();
    }
  }, [token]);

  

  return (
    <div className='app'>
      <h1>Login</h1>
      <div className="form">
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={Username}
            onChange={(event) => setUsername(event.target.value)}
          />
        </div>
        <div className="input-container">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={Password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>
        {error && <div style={{ color: 'red' }}>{error}</div>}
        <button type="submit">Submit</button>
      </form>
      </div>
      {/*{token && <p>Token: {token}</p>}
       {data && (
        <div>
          <h2>Data</h2>
          <p>{data}</p>
        </div>
      )} */}
    </div>
  );
}

export default LoginPage;
