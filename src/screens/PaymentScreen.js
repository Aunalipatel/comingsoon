import React, { useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Img from 'react-bootstrap/Image';
import toon from './assets/images/Toon1.png';
const PaymentScreen = () => {

    let order = "";
    
    useEffect(() => {
        console.log('Running useEffect 1');
        order = localStorage.getItem('order');
    }, []);

  return (
  <div>

    <Container fluid className = "m-0 p-0"  style = {{  backgroundColor: "#265385" }}>

        <Container fluid className = "m-0 p-0 py-2" style = {{  backgroundColor: "#265385" , height :"100vh" }}>
            <p className = " mt-5  mb-0 pb-0" style = {{color: "white" , fontSize:"30px"}}><br/> Please Continue to pay through Razorpay to confirm your purchase for:</p>
            <p className = " pt-0 m-0" style = {{color: "white" , fontSize:"30px"}}><br/>{order}</p>
        </Container>

    </Container>

  </div>
  )
};

export default PaymentScreen;