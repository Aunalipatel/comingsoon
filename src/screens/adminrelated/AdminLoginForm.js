import React , {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/esm/Container';



function AdminLoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <div style = {{marginTop : "50px" , background: "#011B41" , height : "800vh" , color : "white", paddingLeft:"14vh", paddingRight:"14vh", textAlign:"left"}}>
        <h1 className = "pt-5">Admin login form</h1>
        
        <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                value={email}
                placeholder="Enter email"
                onChange={(event) => setEmail(event.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                value={password}
                placeholder="Password"
                onChange={(event) => setPassword(event.target.value)}
              />
            </Form.Group>
            <br />

            <Button block variant="outline-info" className=" ">
              Continue
              {/* change button to link with a onclick function to match theme, 
                            how it needs to be done is on stack overflow  https://www.google.com/search?q=can+i+add+a+onclick+to+a+link&rlz=1C1CHBF_enIN914IN914&oq=can+i+add+a+onclick+to+a+link&aqs=chrome..69i57j33i22i29i30l6.13467j0j7&sourceid=chrome&ie=UTF-8 */}
            </Button>
          </Form>
    </div>
  );
}

export default AdminLoginForm;


