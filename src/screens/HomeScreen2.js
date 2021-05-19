import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Img from 'react-bootstrap/Image';
import toon from './assets/images/Toon1.png';
import Button from 'react-bootstrap/Button';
import lp from './assets/images/laptop_animated.jpg' ;
import Form from 'react-bootstrap/Form';

const HomeScreen2 = () => {
  return (
  <div 
//   style = {{padding: "20 20"}}
  >

    

    <Container fluid className = "m-0 p-0"  style = {{  backgroundColor: "#265385" }}>

        {/* <Image src= {bg} fluid id = "bghome"/> */}

        

        <Container fluid className = "m-0 p-0" style = {{  backgroundColor: "#265385" }}>
            <p className = " mt-5 mb-0 pb-0" style = {{color: "white" , fontSize:"40px"}}><br/> Notifications</p>
        </Container>

    </Container>

    {/* style = {{ marginTop: "-50px"}} */}

    
    
    

    <Container fluid id="container-4" classname = "m-0 p-0">
        

        <Container fluid className = "m-0 p-0" >

            <Row>

                <Col id = "imgcol">
                <Img src={toon} style={{width:"30vh"}}/>
                </Col>

                <Col id = "col" >
                    {/* <Card >
                        <Card.Img variant="top" src="holder.js/100px180" />

                        <Card.Body>
                            {/* <Card.Title>Card Title</Card.Title> */}
                            {/* <Button variant="dark">repair laptops</Button>
                        </Card.Body>

                    </Card> */}
                    <Form>
                    <Row className = "my-3">
                        <Col md={{ span: 7, offset: 2 }} ><Form.Control placeholder="What can i repair today?" /></Col>
                        <br/>
                    </Row>
                    </Form>
                    

                    <Row id = "row1">
                        <Col id = "imgcol"   md={{ span: 2, offset: 1 }} >
                            <Img src = {lp} rounded style={{width:"20vh"}}/><br/>
                            {/* <Card.Link href="#" style = {{color : "black"}}>Card Link</Card.Link> */}
                            <Button variant = "dark" style = {{width:"120px"}} href = "/laptop-repair">Laptop</Button>

                        </Col>
                        <Col id = "imgcol"  md={{ span: 2, offset: 1 }}>
                        <Img src = {lp} rounded style={{width:"20vh"}}/><br/>
                            <Button variant = "dark" style = {{width:"120px"}}>Mobile</Button>

                            
                        </Col>
                        <Col id = "imgcol"   md={{ span: 2, offset: 1 }}>
                        <Img src = {lp} rounded style={{width:"20vh"}}/><br/>
                            <Button variant = "dark" style = {{width:"120px"}}>Printer</Button>

                            
                        </Col>
                    </Row>

                    <Row id = "row1">
                        <Col id = "imgcol"   md={{ span: 2, offset: 1 }} >
                            <Img src = {lp} rounded style={{width:"20vh"}}/><br/>
                            {/* <Card.Link href="#" style = {{color : "black"}}>Card Link</Card.Link> */}
                            <Button variant = "dark" style = {{width:"120px"}}>Projector</Button>

                        </Col>
                        <Col id = "imgcol"  md={{ span: 2, offset: 1 }}>
                        <Img src = {lp} rounded style={{width:"20vh"}}/><br/>
                            <Button variant = "dark" style = {{width:"120px"}}>Printer</Button>

                            
                        </Col>
                        <Col id = "imgcol"   md={{ span: 2, offset: 1 }}>
                        <Img src = {lp} rounded style={{width:"20vh"}}/><br/>
                            <Button variant = "dark" style = {{width:"120px"}}>TV</Button>

                            
                        </Col>
                    </Row>

                    {/* <Row className = 'my-3' >
                        <Col >
                        <Img src = {lp} rounded style={{width:"20vh"}}/><br/>
                            <Button variant = "dark" style = {{width:"120px"}}> card link</Button>

                            
                        </Col>
                        <Col >
                        <Img src = {lp} rounded style={{width:"20vh"}}/><br/>
                            <Button variant = "dark" style = {{width:"120px"}}> card link</Button>

                            
                        </Col>
                        <Col >
                        <Img src = {lp} rounded style={{width:"20vh"}}/><br/>
                            <Button variant = "dark" style = {{width:"120px"}}> card link</Button>

                            
                        </Col>
                    </Row> */}
                </Col>

            </Row>

        </Container>
        <Container className = "mx-auto mt-5">
            <Button variant = "info" href =  "/admin-login-form">
                Are you an admin?
            </Button>
        </Container>
        
    </Container>

      
      
      
  </div>
  )
};

export default HomeScreen2;