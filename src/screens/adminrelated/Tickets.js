import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card'
const Tickets = () => {


  return (
  <div  style = {{  backgroundColor: "#265385" , height : "200vh"}}>
      <br/>
      <br/>
      <br/>
      <br/>
      
    <Button variant = "info" href = "/create-ticket-admin" >
        Create Request +
    </Button>
      <br/>
      <br/>


    <h1>List of requests/tickets</h1>
      <br/>

    <div className ="mx-auto">
        <Card style = {{width:  "40vh" }} className = "mx-auto mb-4">
            <Card.Body>Request 1 info
                <ul>
                    <li>ID</li>
                    <li>PRODUCT</li>
                    <li>CUSTOMER NAME</li>
                    <li>ENGINEER NAME</li>
                </ul>
            </Card.Body>
        </Card >
        <Card style = {{width:  "40vh"}} className = "mx-auto mb-4">
            <Card.Body>Request 2 info
                <ul>
                    <li>ID</li>
                    <li>PRODUCT</li>
                    <li>CUSTOMER NAME</li>
                    <li>ENGINEER NAME</li>
                </ul>
            </Card.Body>
        </Card >
    </div>
   

  </div>
  )
};

export default Tickets;