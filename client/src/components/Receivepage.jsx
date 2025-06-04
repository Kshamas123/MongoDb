import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
import './Receivepage.css';
import axios from 'axios';

const Receivepage = () => {
  const [passkey, setPasskey] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

const handleFetch = async (e) => {
  e.preventDefault();
  setError('');

  if (!passkey.trim()) {
    setError('Please enter a valid passkey');
    return;
  }

  try {
    const response = await axios.post('http://localhost:5000/api/message/fetch', { passkey: passkey.trim() });

    if (response.data && response.data.success) {
      localStorage.setItem('passkey', passkey.trim());
      localStorage.setItem('message', response.data.message);
      navigate('/receiveresult');
    } else {
      setError(response.data.message || 'No message found.');
    }
  } catch (err) {
    setError(err.response?.data?.message || 'Something went wrong');
  }
};


  return (
    <div className="form-wrapper">
      <Form onSubmit={handleFetch} className="styled-form">
        <Form.Group className="mb-3" controlId="passkeyInput">
          <Form.Label>Enter Passkey</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter passkey"
            value={passkey}
            onChange={(e) => setPasskey(e.target.value)}
          />
        </Form.Group>
        <Button type="submit" className="glitch-button">
          Fetch Message
        </Button>
        {error && (
          <div style={{ marginTop: '20px', color: '#ff013c', fontWeight: 'bold' }}>
            {error}
          </div>
        )}
      </Form>
    </div>
  );
};

export default Receivepage;
