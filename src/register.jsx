import React, { useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';
import AOS from 'aos';
import 'aos/dist/aos.css';

const RegisterPage = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="container" style={{marginTop:'10em', marginBottom:'10em'}}>
      <h2 className="mb-4">Register</h2>
      <Form>
        <Form.Group controlId="formBasicName">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Enter your name" />
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Button variant="success" type="submit" className='mt-3'>
          Register
        </Button>
      </Form>
    </div>
  );
};

export default RegisterPage;
