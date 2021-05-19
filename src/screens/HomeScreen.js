import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import bg from './assets/images/bg.jpeg';
import Card from 'react-bootstrap/Card';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Carousel from 'react-bootstrap/Carousel';
import pr from './assets/images/printer-repair.webp';
import lap from './assets/images/laptop-repair.webp';
import pro from './assets/images/projector-repair.webp';
import sq from './assets/images/playstation-square-icon2.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'


const HomeScreen = () => {
  return (
  <div 
//   style = {{padding: "20 20"}}
  >
    <Container fluid id="lol">

        {/* <Image src= {bg} fluid id = "bghome"/> */}

        <Container fluid id = "kk">
            <p style = {{color: "white" , fontSize: "70px" }}><br/> Techguy Service</p>
        </Container>

    </Container>

    {/* style = {{ marginTop: "-50px"}} */}
    
    <Container fluid id="lol1" >
        <Container id = "lol2"style = {{width: '80%'  , marginTop : "-120px" }}>
            
            <Container fluid style = {{backgroundColor: 'white' ,padding:"0px" , margin:"0px"}}>
                <Card style = {{padding : "30px" , minHeight: "120px"}}>
                    <Container fluid>
                        <Row>
                            <Col>
                                <Card>
                                    {/* <Card.Img variant="top" src= {sq} /> */}

                                    <Card.Body>
                                        <Button variant="light" href = "/laptop-repair">Light <FontAwesomeIcon className = "mx-1" icon={faCoffee} /></Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col>
                                <Card>
                                    <Card.Body>This is some text within a card body.</Card.Body>
                                </Card>
                            </Col>
                            <Col>
                                <Card>
                                    <Card.Body><Button variant="light">Light <FontAwesomeIcon className = "mx-1" icon={faCoffee} /></Button></Card.Body>
                                </Card>
                            </Col>
                        </Row>
                        <Row style = {{marginTop:"20px"}}>
                            <Col>
                                <Card>
                                    <Card.Body>This is some text within a card body.</Card.Body>
                                </Card>
                            </Col>
                            <Col>
                                <Card>
                                    <Card.Body><Button variant="light">Light <FontAwesomeIcon className = "mx-1" icon={faCoffee} /></Button></Card.Body>
                                </Card>
                            </Col>
                            <Col>
                                <Card>
                                    <Card.Body>This is some text within a card body.</Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    </Container>
                    
                </Card>
                
                {/* <Row>
                    <Col>1 of 3</Col>
                    <Col>2 of 3</Col>
                    <Col>3 of 3</Col>
                </Row> */}
            </Container>
        </Container>
        
    </Container>

    <Container fluid id="container-4">
        Lorem ipsum dolor sit amet consectetur adipisicin

        <Container>

            <Row>

                <Col></Col>

                <Col>
                    <Carousel style = {{marginBottom : "100px"}}>

                        <Carousel.Item class = "carousel-item" interval={1000}>
                            <img
                            className="d-block w-100 carousel-1" 
                            src= {lap}

                            alt="First slide"
                            />
                            <Carousel.Caption>
                                <h3>First slide label</h3>
                                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                            </Carousel.Caption>
                        </Carousel.Item>

                        <Carousel.Item class = "carousel-item" interval={500}>
                            <img
                            className="d-block w-100 carousel-1"
                            src= {pr}
                            alt="Second slide"
                            />
                            <Carousel.Caption>
                                <h3>Second slide label</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </Carousel.Caption>
                        </Carousel.Item>

                        <Carousel.Item class = "carousel-item" >
                            <img
                            className="d-block w-100 carousel-1"
                            src= {pro}
                            alt="Third slide"
                            />
                            <Carousel.Caption>
                                <h3>Third slide label</h3>
                                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                            </Carousel.Caption>
                        </Carousel.Item>

                    </Carousel>
                </Col>

                <Col></Col>

            </Row>

        </Container>
        
    </Container>

      
      
      
  </div>
  )
};

export default HomeScreen;