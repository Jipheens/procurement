import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faLock } from '@fortawesome/free-solid-svg-icons';
import './styles.css';

function LoginPage() {
  const [Username, setUsername] = useState('');
  const [Password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch('http://192.168.43.103:9099/erp/suppliers/auth/signin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: Username,
          password: Password,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        const { token, username, roles, email } = data;

        navigate('/dashboard', {
          state: {
            user: {
              username,
              roles,
              email,
            },
          },
        });
      } else {
        setError('Invalid username or password');
      }
    } catch (error) {
      setError('Something went wrong. Please try again later.');
      console.log(error);
    }
  };

  return (
    <div className="app">
      <h1>Login</h1>
      <div className="form">
        <form onSubmit={handleSubmit}>
          <div className="input-container">
            <label htmlFor="username">
              <FontAwesomeIcon icon={faUser} />
            </label>
            <input
              type="text"
              id="username"
              placeholder="Username"
              value={Username}
              onChange={(event) => setUsername(event.target.value)}
              className="form-control"
            />
          </div>
          <div className="input-container">
            <label htmlFor="password">
              <FontAwesomeIcon icon={faLock} />
            </label>
            <input
              type="password"
              id="password"
              placeholder="Password"
              value={Password}
              onChange={(event) => setPassword(event.target.value)}
              className="form-control"
            />
          </div>
          {error && <div className="error-message">{error}</div>}
          <button type="submit" className="btn btn-primary">
            Login
          </button>
          <p>
            Don't have an account?
            <Link to="/register">Sign up instead</Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
