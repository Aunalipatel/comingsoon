import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/esm/Container';
import { useHistory } from 'react-router-dom';

function TechcareScreen() {
  // const [subscription, setSubscription] = useState(false);
  
  let history = useHistory();

  const storeVariables = (e) => {
    // e.preventDefault();
    // setSubscription(e.target.value);
    console.log('Function called');
    console.log('Subscription?', e.target.value );
    console.log(e.target.value);
    const servicerequest = JSON.parse(localStorage.getItem('servicerequest'));
    servicerequest.subscription = e.target.value ;
    localStorage.setItem('servicerequest', JSON.stringify(servicerequest));
    // window.open()
    history.push("/enter-location") ;
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
      <Container fuild style={{ paddingTop: '100px' }}>
        <Form>
          <h3>About TECHCARE </h3>
          <br />
          <br />

          <Button
            variant="light"
            type="submit"
            className="mr-5"
            // href="/enter-location"
            value={false}
            onClick={(e) => storeVariables(e)}
          >
            No ill pay 200
          </Button>
          <Button
            variant="info"
            type="submit"
            // href="/enter-location"
            value={true}
            onClick={(e) => storeVariables(e)}

          >
            Buy Techcare
          </Button>
        </Form>
      </Container>
    </div>
  );
}

export default TechcareScreen;