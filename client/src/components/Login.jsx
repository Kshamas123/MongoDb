import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './LoginPage.css'; // Reuse your styles

function Login() {  // Signup page (named Login.jsx but used for Signup)
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      alert('Please fill in all fields!');
      return;
    }

    try {
      const response = await fetch('http://localhost:5000/api/auth/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        // Signup successful, redirect to begin page or login page
        navigate('/beginpage');
      } else {
        const errorData = await response.json();
        alert('Signup failed: ' + (errorData.message || 'Unknown error'));
      }
    } catch (error) {
      alert('Network or server error');
    }
  };

  return (
    <div className="login-wrapper">
      <Form onSubmit={handleSubmit} className="login-form">
        <h2 className="form-title">Sign Up</h2>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="glitch-input"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="glitch-input"
          />
        </Form.Group>

        <Button variant="primary" type="submit" className="glitch-button">
          Submit
        </Button>

        <p style={{ marginTop: '20px', color: '#ccc' }}>
          Already have an account?{' '}
          <Link to="/userlogin" style={{ color: '#00E6F6', textDecoration: 'underline' }}>
            Login
          </Link>
        </p>
      </Form>
    </div>
  );
}

export default Login;
