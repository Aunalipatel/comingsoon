import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
const AddCustomer = () => {
  
  const [signupEmail, setSignupEmail] = useState('');
  const [name, setName] = useState('');
  const [code, setCode] = useState();
  const [signupPassword, setSignupPassword] = useState('');
  const [confirmPass, setConfirmPass] = useState('');


  return (
  <div  style = {{  backgroundColor: "#265385" , height : "150vh"}}>

     <br/>
      <br/>
      <br/>
      <br/>
      
      <br/>
    <h1>Add customer form</h1>
    <Container style = {{width : "100vh"}}>
        <Form >
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Full Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter full name"
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                />
              </Form.Group>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="email"
                  value={signupEmail}
                  onChange={(event) => setSignupEmail(event.target.value)}
                />
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  value={signupPassword}
                  onChange={(event) => setSignupPassword(event.target.value)}
                />
              </Form.Group>
              <Form.Group controlId="formBasicPassword">
                <Form.Label>Re-enter Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Re-enter password"
                  value={confirmPass}
                  onChange={(event) => setConfirmPass(event.target.value)}
                />
              </Form.Group>

              <Button block variant="primary" className=" ">
                Add Customer
                {/* change button to link with a onclick function to match theme, 
                            how it needs to be done is on stack overflow  https://www.google.com/search?q=can+i+add+a+onclick+to+a+link&rlz=1C1CHBF_enIN914IN914&oq=can+i+add+a+onclick+to+a+link&aqs=chrome..69i57j33i22i29i30l6.13467j0j7&sourceid=chrome&ie=UTF-8 */}
              </Button>
            </Form>
    </Container>
    

  </div>
  )
};

export default AddCustomer;