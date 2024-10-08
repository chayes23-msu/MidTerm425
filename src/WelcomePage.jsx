import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const WelcomePage = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const navigate = useNavigate();

  const handleRegister = () => {
    if (username && email && firstname && lastname) {
      alert('Registration successful!');
      navigate('/'); // Navigate to the home page
    } else {
      alert('Please fill in all fields');
    }
  };

  return (
    <div>
      <h1>Welcome to HackerCon</h1>
      <p>Welcome SuperHacker You Are Inz</p>
      <div>
        <label>
          Username:
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          First Name:
          <input
            type="text"
            value={firstname}
            onChange={(e) => setFirstname(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          Last Name:
          <input
            type="text"
            value={lastname}
            onChange={(e) => setLastname(e.target.value)}
          />
        </label>
      </div>
      <button onClick={handleRegister}>Register for Hackerthon</button>
      <button onClick={() => navigate('/')}>HOME</button>
    </div>
  );
};

export default WelcomePage;