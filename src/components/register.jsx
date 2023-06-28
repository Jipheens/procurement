import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEnvelope, faLock, faEye } from '@fortawesome/free-solid-svg-icons';
import './styles.css';

function RegisterPage() {
  const [Username, setUsername] = useState('');
  const [Email, setEmail] = useState('');
  const [Password, setPassword] = useState('');
  const [ConfirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (Password !== ConfirmPassword) {
      setError("Passwords don't match");
      return;
    }

    // Code for making API call to register the user
    try {
      const response = await fetch('https://localhost:44381/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ Username, Email, Password }),
      });

      if (response.ok) {
        setSuccess(true);
        setError(null);
        setUsername('');
        setEmail('');
        setPassword('');
        setConfirmPassword('');
      } else {
        const data = await response.json();
        setError(data.error);
        setSuccess(false);
      }
    } catch (error) {
      setError('Something went wrong. Please try again later.');
    }
  };

  return (
    <div className="app">
      <h1>Register</h1>
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
            />
          </div>

          <div className="input-container email-input">
            <label htmlFor="email">
              <FontAwesomeIcon icon={faEnvelope} />
            </label>
            <input
              type="email"
              id="email"
              placeholder="Email"
              value={Email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </div>
          <div className="input-container">
            <label htmlFor="password">
              <FontAwesomeIcon icon={faLock} />
            </label>
            <input
              type={showPassword ? 'text' : 'password'}
              id="password"
              placeholder="Password"
              value={Password}
              onChange={(event) => setPassword(event.target.value)}
            />
          </div>
          <div className="input-container">
            <label htmlFor="confirm-password">
              <FontAwesomeIcon icon={faLock} />
            </label>
            <input
              type="password"
              id="confirm-password"
              placeholder="Confirm Password"
              value={ConfirmPassword}
              onChange={(event) => setConfirmPassword(event.target.value)}
            />
          </div>
          <div className="password-toggle">
            <input
              type="checkbox"
              id="show-password"
              checked={showPassword}
              onChange={(event) => setShowPassword(event.target.checked)}
            />
            <label htmlFor="show-password">
              <FontAwesomeIcon icon={faEye} />
              Show Password
            </label>
          </div>
          {error && <div className="error-message">{error}</div>}
          {success && (
            <div className="success-message">Registration successful!</div>
          )}
          <button type="submit">Register</button>
          <p>
            Already have an account? <Link to="/" className='login-link'>Log in instead</Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default RegisterPage;
