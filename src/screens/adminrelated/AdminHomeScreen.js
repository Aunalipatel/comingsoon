import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/esm/Container';



function AdminHomeScreen() {
  return (
    <div style = {{marginTop : "50px" , background: "#011B41" , height : "800vh" , color : "white", paddingLeft:"14vh", paddingRight:"14vh", textAlign:"left"}}>
        <Container style = {{paddingTop:"30vh"}}>
            <Button variant = "info" href = "tickets-admin">
                Service Requests/Tickets
            </Button>
            <br/>
            <br/>
            <Button variant = "info" href = "/customers-admin">
                Customers
            </Button>
        </Container>
        
    </div>
  );
}

export default AdminHomeScreen;


