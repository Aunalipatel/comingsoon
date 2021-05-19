import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card'

const Customers = () => {


  return (
  <div  style = {{  backgroundColor: "#265385" , height:"200vh"}}>

     <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
    <h1>customers lol</h1>
      <br/>
      <Button variant = "info" href = "/add-customer-admin" >
        Add Customer +
    </Button>
    <br/>
    <br/>


        <Card style = {{width:  "40vh" }} className = "mx-auto mb-4">
            <Card.Body>Customer 1 info
                <p>
                    Name ,
                    email,
                    phone,
                    requests pending: yes or no,
                </p>
            </Card.Body>
        </Card >
        <Card style = {{width:  "40vh" }} className = "mx-auto mb-4">
            <Card.Body>Customer 2 info
                <p>
                    Name ,
                    email,
                    phone,
                    requests pending: yes or no,
                </p>
            </Card.Body>
        </Card >
        <Card style = {{width:  "40vh" }} className = "mx-auto mb-4">
            <Card.Body>Customer 3 info
                <p>
                    Name ,
                    email,
                    phone,
                    requests pending: yes or no,
                </p>
            </Card.Body>
        </Card >
        <Card style = {{width:  "40vh" }} className = "mx-auto mb-4">
            <Card.Body>Customer 4 info
                <p>
                    Name ,
                    email,
                    phone,
                    requests pending: yes or no,
                </p>
            </Card.Body>
        </Card >
        <Card style = {{width:  "40vh" }} className = "mx-auto mb-4">
            <Card.Body>Customer 5 info
                <p>
                    Name ,
                    email,
                    phone,
                    requests pending: yes or no,
                </p>
            </Card.Body>
        </Card >
        <Card style = {{width:  "40vh" }} className = "mx-auto mb-4">
            <Card.Body>Customer 6 info
                <p>
                    Name ,
                    email,
                    phone,
                    requests pending: yes or no,
                </p>
            </Card.Body>
        </Card >

  </div>
  )
};

export default Customers;