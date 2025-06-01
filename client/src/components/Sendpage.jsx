import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
import './Sendpage.css'; // Import the CSS file

const Sendpage = () => {
  const [passkeydata, setpasskey] = useState('');
  const navigate = useNavigate();

  function handlesubmit(e) {
    e.preventDefault();
    localStorage.setItem("passkey", passkeydata);
    navigate('/beginpage/sendpage/dataenter');
  }

  return (
    <div className="form-wrapper">
      <Form onSubmit={handlesubmit} className="styled-form">
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Enter Passkey</Form.Label>
          <Form.Control
            type="text"
            placeholder="passkey"
            value={passkeydata}
            onChange={(e) => setpasskey(e.target.value)}
          />
        </Form.Group>
        <Button variant="primary" type="submit" className="glitch-button">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default Sendpage;
