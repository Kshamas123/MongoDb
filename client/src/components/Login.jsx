import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function Login() {
    const [email,setmail]=useState('');
    const [lpassword,setlpassword]=useState('');

     const handlesubmit=async(e)=> {
    e.preventDefault();
    console.log(email, lpassword);
    try {
    const response = await fetch('http://localhost:5000/api/auth/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email:email,
        password:lpassword
      }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    console.log('Success:', data);
  } catch (error) {
    console.error('Error:', error);
  }
  }
  return (
    <Form onSubmit={handlesubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
       
{/* email entry */}
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" value={email}  onChange={(e)=>{setmail(e.target.value)}} />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

{/* password entry */}
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Password"
          value={lpassword}
          onChange={(e) => setlpassword(e.target.value)}
        />
      </Form.Group>


{/* button */}
     <Button variant="primary" type="submit" >
        Submit
      </Button>
    </Form>
  );
}

export default Login;