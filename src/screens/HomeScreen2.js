import React from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Img from 'react-bootstrap/Image';
import toon from './assets/images/Toon1.png';
import {useHistory} from 'react-router-dom';
const HomeScreen2 = () => {
    
    let history = useHistory() ;
    const storeordertolocal = (e) => {
        console.log(e.target.value);
        localStorage.setItem('order',  JSON.stringify(e.target.value));
        localStorage.setItem('order2',  e.target.value);
        history.push("/payment")

        
    }

  return (
  <div 

  >

    

    <Container fluid className = "m-0 p-0"  style = {{  backgroundColor: "#265385" }}>

        <Container fluid className = "m-0 p-0 py-2" style = {{  backgroundColor: "#265385" }}>
            <p className = " mt-5  mb-0 pb-0" style = {{color: "white" , fontSize:"30px"}}><br/> Affordable servicing for your laptops!</p>
        </Container>

    </Container>

    

    
    
    

    <Container fluid id="container-4" classname = "m-0 p-0">
        

        <Container fluid className = "m-0 p-0" >

            <Row>

                <Col id = "imgcol">
                <Img src={toon} style={{width:"30vh"}}/>
                </Col>

                <Col >
                    <Container style = {{width : "70vh"}}>

                        <h4 className = "py-3">Choose any one of our Services!</h4>

                        <Form>
                            <Button block variant = "info"  type="submit"  value = "Visiting and Diagnosis – 199" onClick = {storeordertolocal} >Visiting and Diagnosis – 199</Button>
                            <h6 className = "pb-2 pt-4" style={{textAlign:"left"}}>Software Issues </h6>

                            <Button block variant = "info"  type="submit"  value = "Software Issues - BIOS Troubleshooting - 299" onClick = {storeordertolocal} >BIOS Troubleshooting - 299</Button>
                            <Button block variant = "info"  type="submit"  value = "Software Issues - Drivers Troubleshooting - 299" onClick = {storeordertolocal} >Drivers Troubleshooting - 299 </Button>
                            <Button block variant = "info"  type="submit"  value = "Software Issues - Windows Formatting - 399" onClick = {storeordertolocal} >Windows Formatting - 399</Button>
                            
                            <h6 className = "pb-2 pt-4" style={{textAlign:"left"}}>	Data Backup </h6>

                            <Button block variant = "info"  type="submit"  value = "Data Backup - 100+ GB - 499" onClick = {storeordertolocal} >100+ GB - 499</Button>
                        </Form>
                        
                
                    </Container>
                </Col>
                

            </Row>

        </Container>
        
    </Container>

      
      
      
  </div>
  )
};

export default HomeScreen2;