import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  // State variables for username and password
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  
  // Hook to navigate programmatically
  const navigate = useNavigate();

  // Function to handle login
  const handleLogin = () => {
    // Check if both username and password are provided
    if (username && password) {
      // Navigate to the landing page
      navigate('/landing');
    } else {
      // Alert the user to enter both username and password
      alert('Please enter both username and password');
    }
  };

  return (
    <div>
      <h1>Login Here</h1>
      <p>This is the Login Page.</p>
      <div>
        <label>
          Username:
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)} // Update username state
          />
        </label>
      </div>
      <div>
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)} // Update password state
          />
        </label>
      </div>
      <button onClick={handleLogin}>Take Qualifier Quiz</button>
    </div>
  );
};

export default LoginPage;