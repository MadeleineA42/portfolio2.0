// src/components/ContactForm.js
import React, { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import './contact.css'
const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [formErrors, setFormErrors] = useState({
    name: '',
    email: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    // Validate required fields
    setFormErrors((prevErrors) => ({
      ...prevErrors,
      [name]: value.trim() === '' ? 'This field is required' : '',
    }));

    // Validate email format
    if (name === 'email') {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      setFormErrors((prevErrors) => ({
        ...prevErrors,
        email: !emailRegex.test(value) ? 'Invalid email address' : '',
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <Form className='form-body' onSubmit={handleSubmit}>
      <Form.Group controlId="formName">
        <Form.Label>Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter your name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          isInvalid={!!formErrors.name}
        />
        <Form.Control.Feedback type="invalid">{formErrors.name}</Form.Control.Feedback>
      </Form.Group>

      <Form.Group controlId="formEmail">
        <Form.Label>Email Address</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter your email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          isInvalid={!!formErrors.email}
        />
        <Form.Control.Feedback type="invalid">{formErrors.email}</Form.Control.Feedback>
      </Form.Group>

      <Form.Group controlId="formMessage">
        <Form.Label>Message</Form.Label>
        <Form.Control
          as="textarea"
          rows={4}
          placeholder="Enter your message"
          name="message"
          value={formData.message}
          onChange={handleChange}
        />
      </Form.Group>

      <Button className='btn' type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default Contact;
