import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './LoginPage.css';

function UserLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleUserLogin = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      alert('Please fill in both email and password!');
      return;
    }

    try {
      const response = await fetch('http://localhost:5000/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        const data = await response.json();
        navigate('/beginpage');
      } else {
        const errorData = await response.json();
        alert('Login failed: ' + (errorData.message || 'Unknown error'));
      }
    } catch (error) {
      alert('Network or server error');
    }
  };

  return (
    <div className="login-wrapper">
      <Form onSubmit={handleUserLogin} className="login-form animated-border">
        <h2 className="form-title animated-text userlogin-title">User Login</h2>

        <Form.Group className="mb-3" controlId="userLoginEmail">
          <Form.Label>Email Address</Form.Label>
          <Form.Control
            type="email"
            placeholder="you@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="glitch-input pulse"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="userLoginPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="glitch-input pulse"
          />
        </Form.Group>

        <Button variant="primary" type="submit" className="glitch-button wave">
          Login
        </Button>

        <p style={{ marginTop: '15px', color: '#aaa' }}>
          Don't have an account?{' '}
          <span
            onClick={() => navigate('/')}
            style={{ color: '#FF013C', cursor: 'pointer', fontWeight: 'bold' }}
          >
            Sign up
          </span>
        </p>
      </Form>
    </div>
  );
}

export default UserLogin;
