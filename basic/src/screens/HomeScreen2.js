import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Img from 'react-bootstrap/Image';
import toon from './assets/images/Toon1.png';
const HomeScreen2 = () => {
  return (
  <div 

  >

    

    <Container fluid className = "m-0 p-0"  style = {{  backgroundColor: "#265385" }}>

        <Container fluid className = "m-0 p-0" style = {{  backgroundColor: "#265385" }}>
            <p className = " mt-5  mb-0 pb-0" style = {{color: "white" , fontSize:"30px"}}><br/> Coming Soon!</p>
        </Container>

    </Container>

    

    
    
    

    <Container fluid id="container-4" classname = "m-0 p-0">
        

        <Container fluid className = "m-0 p-0" >

            <Row>

                <Col id = "imgcol">
                <Img src={toon} style={{width:"30vh"}}/>
                </Col>

            </Row>

        </Container>
        
    </Container>

      
      
      
  </div>
  )
};

export default HomeScreen2;