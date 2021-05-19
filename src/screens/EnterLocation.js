import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/esm/Container';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkedAlt } from '@fortawesome/free-solid-svg-icons';

function EnterLocation() {
  return (
    <div
      style={{
        marginTop: '50px',
        background: '#011B41',
        height: '100vh',
        color: 'white',
      }}
    >
      <Container fuild style={{ paddingTop: '100px' }}>
        <h1 className="mb-5 pb-4 pt-3">Where do you want your service?</h1>
        <Button variant="info" type="submit" href="/google-maps">
          <FontAwesomeIcon
            className="ml-0 mr-2 p-0"
            icon={faMapMarkedAlt}
            size="x"
          />
          Current Location
        </Button>
        <br />
        <Button
          variant="info"
          type="submit"
          href="/google-maps"
          className="my-4"
        >
          Choose Other Location
        </Button>
      </Container>
    </div>
  );
}

export default EnterLocation;
