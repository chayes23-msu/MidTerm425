import emailjs from 'emailjs-com';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const WelcomePage = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const navigate = useNavigate();

  const handleRegister = async () => {
    if (username && email && firstname && lastname) {
      const templateParams = {
        username,
        email,
        firstname,
        lastname,
      };

      try {
        await emailjs.send(
          'service_0p72t0b', // Replace with your EmailJS service ID
          'template_q7m4kra', // Replace with your EmailJS template ID
          templateParams,
          'J5erP2mRMNmEdNgsi' // Replace with your EmailJS user ID
        );
        alert('Registration successful! Check your email for details.');
        navigate('/'); // Navigate to the home page
      } catch (error) {
        console.error('Error sending email:', error);
        alert('Registration failed. Please try again.');
      }
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