import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/esm/Container';

function SelectServiceDateandTime() {
  const [date, setDate] = useState({
    day: '',
    time: 1,
  });

  const storeVariables = () => {
    console.log('Function called');
    console.log('Date', date);
    const servicerequest = JSON.parse(localStorage.getItem('servicerequest'));
    servicerequest.date = date;
    localStorage.setItem('servicerequest', JSON.stringify(servicerequest));
  };

  return (
    <div
      style={{
        marginTop: '50px',
        background: '#011B41',
        height: '100vh',
        color: 'white',
      }}
    >
      <Container style={{ paddingTop: '100px' }}>
        <h1>When would you like Techguy to serve you?</h1>
        <Form style={{ width: '40vh' }} className="mx-auto mt-5 pt-3">
          <Form.Group controlId="exampleForm.ControlSelect2">
            <Form.Label>Select Date</Form.Label>
            <Form.Control
              as="select"
              onSelect={(e) => setDate({ ...date, day: e.target.value })}
            >
              <option>Today</option>
              <option>Tomorrow</option>
            </Form.Control>
            <br />

            <Form.Label>Select Time</Form.Label>
            <Form.Control
              as="select"
              onSelect={(e) => setDate({ ...date, time: e.target.value })}
            >
              <option>1pm</option>
              <option>2pm</option>
              <option>3pm</option>
              <option>4pm</option>
              <option>5pm</option>
              <option>6pm</option>
              <option>7pm</option>
            </Form.Control>
          </Form.Group>
          <Button
            className="mt-4"
            block
            variant="info"
            type="submit"
            href="/payment-gateway"
            onClick={storeVariables}
          >
            Continue
          </Button>
        </Form>
      </Container>
    </div>
  );
}

export default SelectServiceDateandTime;
