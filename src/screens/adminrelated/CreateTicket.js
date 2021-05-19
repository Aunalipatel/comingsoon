import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
const CreateTicket = () => {
  const [laptop, setLaptop] = useState('');
  const [brand, setBrand] = useState('');
  const [serial, setSerial] = useState();
  const [problem, setProblem] = useState('');

  const storeVariables = () => {
    console.log('Function called');
    const servicerequest = {
      product: 'laptop',
      brand: brand,
      modelNo: laptop,
      serial: serial,
      problem: problem,
    };
    // localStorage.setItem('servicerequest', JSON.stringify(servicerequest));
    // send the service request to database in this function itlsef
    console.log(servicerequest);
  };


  return (
  <div  style = {{  backgroundColor: "#265385" , height: "400vh" }}>

     <br/>
      <br/>
      <br/>
      <br/>
      <br/>
    <h1>create ticket page lol</h1>
    <Container style = {{width : "100vh"}}>
        

        <Form onSubmit={storeVariables}>
          
          <Form.Group className="py-2" controlId="formBasicEmail">
            {/* <Form.Label>Email address</Form.Label> */}
            <Form.Control
              type="String"
              placeholder="Laptop Brand"
              onChange={(e) => setBrand(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="py-2" controlId="formBasicEmail">
            {/* <Form.Label>Email address</Form.Label> */}
            <Form.Control
              type="String"
              placeholder="Model Number"
              onChange={(e) => setLaptop(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="py-2" controlId="formBasicEmail">
            {/* <Form.Label>Email address</Form.Label> */}
            <Form.Control
              type="String"
              placeholder="Type of Problem"
              onChange={(e) => setProblem(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="py-2" controlId="formBasicEmail">
            {/* <Form.Label>Email address</Form.Label> */}
            <Form.Control
              type="String"
              placeholder="Serial Number"
              onChange={(e) => setSerial(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="py-2" controlId="formBasicEmail">
            {/* <Form.Label>Email address</Form.Label> */}
            <Form.Control
              type="String"
              placeholder="Add ons"
              onChange={(e) => setSerial(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="py-2" controlId="formBasicEmail">
            {/* <Form.Label>Email address</Form.Label> */}
            <Form.Control
              type="String"
              placeholder="purchased techcare?"
              onChange={(e) => setSerial(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="py-2" controlId="formBasicEmail">
            {/* <Form.Label>Email address</Form.Label> */}
            <Form.Control
              type="String"
              placeholder="Customer Name"
              onChange={(e) => setSerial(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="py-2" controlId="formBasicEmail">
            {/* <Form.Label>Email address</Form.Label> */}
            <Form.Control
              type="String"
              placeholder="Customer ID"
              onChange={(e) => setSerial(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="py-2" controlId="formBasicEmail">
            {/* <Form.Label>Email address</Form.Label> */}
            <Form.Control
              type="String"
              placeholder="Date and Time"
              onChange={(e) => setSerial(e.target.value)}
            />
          </Form.Group>
          

          <Button
            block
            variant="info"
            type="submit"
            href="/laptop-addons"
            onClick={storeVariables}
          >
            send service request
          </Button>
        </Form>
      </Container>
  </div>
  )
};

export default CreateTicket;