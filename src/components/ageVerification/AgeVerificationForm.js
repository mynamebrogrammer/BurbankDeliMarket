import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './AgeVerificationForm.css';

function AgeVerificationForm({ onSubmit }) {
  const [age, setAge] = useState('');
  const [error, setError] = useState('');

  const handleAgeChange = (event) => {
    setAge(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Validate age
    if (age.trim() === '') {
      setError('Please enter your age.');
      return;
    }

    if (isNaN(age) || parseInt(age) < 0) {
      setError('Please enter a valid age or you are not old enough to view the contents of this page.');
      return;
    }

    // Clear error
    setError('');

    // Submit the age
    onSubmit(parseInt(age));
  };

  return (
    <div className="age-verification-form">
      <h3>Age Verification</h3>
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label>You must be 21 years of age or older to view the contents on this page.</Form.Label>
          <Form.Control
            type="text"
            id="age"
            name="age"
            value={age}
            onChange={handleAgeChange}
            placeholder="Enter your age"
          />
        </Form.Group>
        {error && <div className="error">{error}</div>}
        <Button type="submit">Submit</Button>
      </Form>
    </div>
  );
}

export default AgeVerificationForm;
