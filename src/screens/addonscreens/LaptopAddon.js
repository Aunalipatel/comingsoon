import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/esm/Container';

function LaptopAddon() {
  const [addon, setaddon] = useState('');

  const storeVariables = () => {
    console.log('Function called');
    console.log('addon is', addon);
    const servicerequest = JSON.parse(localStorage.getItem('servicerequest'));
    servicerequest.addOn = addon;
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
      <Container fuild style={{ paddingTop: '100px' }}>
        <Form>
          {/* <Form.Control onChange = {(e) => {
                    setaddon(e.target.value);
                }}> */}
          <h3>Add Ons</h3>
          <br />
          <br />
          <hr />
          <Form.Check
            type="radio"
            name="form"
            value="antivirus"
            label="Anti-virus Installation Rs. 100"
            onClick={(e) => {
              setaddon(e.target.value);
            }}
          />
          <hr />
          <Form.Check
            type="radio"
            name="form"
            value="datarecovery"
            label="Data recovery Rs. 100"
            onClick={(e) => {
              setaddon(e.target.value);
            }}
          />
          <hr />
          <Form.Check
            type="radio"
            name="form"
            value="none"
            label="I do not require any Add on"
            onClick={(e) => {
              setaddon(e.target.value);
            }}
          />

          {/* </Form.Control> */}

          <hr />
          <br />
          <br />
          <Button
            block
            variant="info"
            type="submit"
            href="/techcare"
            onClick={storeVariables}
          >
            Continue
          </Button>
        </Form>
      </Container>
    </div>
  );
}

export default LaptopAddon;
