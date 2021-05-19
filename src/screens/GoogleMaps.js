import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/esm/Container';

function GoogleMaps() {
  const [address, setAddress] = useState({
    line1: '',
    line2: '',
    zip: 0,
    state: '',
    city: '',
  });

  const storeVariables = () => {
    console.log('Function called');
    console.log('address', address);
    const servicerequest = JSON.parse(localStorage.getItem('servicerequest'));
    servicerequest.address = address;
    localStorage.setItem('servicerequest', JSON.stringify(servicerequest));
  };

  return (
    <div
      style={{
        paddingTop: '10vh',
        background: '#011B41',
        height: '100vh',
        color: 'white',
      }}
    >
      <Container className="mt-5">
        <h1>Please enter your location details</h1>
        <Form className="mt-3">
          <Form.Group controlId="formGridAddress1">
            <Form.Label>Address</Form.Label>
            <Form.Control
              placeholder="1234 Main St"
              onChange={(e) =>
                setAddress({ ...address, line1: e.target.value })
              }
            />
          </Form.Group>

          <Form.Group controlId="formGridAddress2">
            <Form.Label>Address 2</Form.Label>
            <Form.Control
              placeholder="Apartment, studio, or floor"
              onChange={(e) =>
                setAddress({ ...address, line2: e.target.value })
              }
            />
          </Form.Group>

          <Form.Row>
            <Form.Group as={Col} controlId="formGridCity">
              <Form.Label>City</Form.Label>
              <Form.Control
                onChange={(e) =>
                  setAddress({ ...address, city: e.target.value })
                }
              />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridState">
              <Form.Label>State</Form.Label>
              <Form.Control
                as="select"
                defaultValue="Choose..."
                onClick={(e) =>
                  setAddress({ ...address, state: e.target.value })
                }
              >
                <option>Maharashtra</option>
                <option>...</option>
              </Form.Control>
            </Form.Group>

            <Form.Group as={Col} controlId="formGridZip">
              <Form.Label>Zip</Form.Label>
              <Form.Control
                onChange={(e) =>
                  setAddress({ ...address, zip: e.target.value })
                }
              />
            </Form.Group>
          </Form.Row>

          <Button
            variant="info"
            className="mt-4"
            type="submit"
            href="/select-service-date-and-time"
            onClick={storeVariables}
          >
            Continue
          </Button>
        </Form>
      </Container>
    </div>
  );
}

export default GoogleMaps;
