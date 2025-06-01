import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './LoginPage.css'

function Login() {
  const [email, setmail] = useState('');
  const [lpassword, setlpassword] = useState('');
  const navigate = useNavigate();

  const handlesubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/api/auth/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password: lpassword }),
      });

      if (response.ok) {
        const data = await response.json();
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
      <Form onSubmit={handlesubmit} className="login-form">
        <h2 className="form-title">Login</h2>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setmail(e.target.value)}
            className="glitch-input"
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            value={lpassword}
            onChange={(e) => setlpassword(e.target.value)}
            className="glitch-input"
          />
        </Form.Group>

        <Button variant="primary" type="submit" className="glitch-button">
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default Login;
