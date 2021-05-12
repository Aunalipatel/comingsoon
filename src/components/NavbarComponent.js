// import './App.css';
import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/esm/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './navbar.css';
import { useState } from 'react';
import googleicon from '../screens/assets/images/googleicon.jpg';
import Form from 'react-bootstrap/Form';
import logo from '../screens/assets/images/Logo_blue.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faPhoneSquareAlt } from '@fortawesome/free-solid-svg-icons';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import Image from 'react-bootstrap/Image';

import { Auth } from 'aws-amplify';

function NavbarComponent() {
  const [sidebar, setSidebar] = useState(false);
  const [otp_sidebar, setotp_Sidebar] = useState(false);
  const [signin_email, setsignin_email] = useState(false);
  const [signupslider, setsignupslider] = useState(false);
  const [signupemail, setsignupemail] = useState(false);
  const [codeSent, setCodeSent] = useState(false);
  const [user, setUser] = useState(null);
  const [email, setEmail] = useState('');
  const [signupEmail, setSignupEmail] = useState('');
  const [name, setName] = useState('');
  const [code, setCode] = useState();
  const [password, setPassword] = useState('');
  const [signupPassword, setSignupPassword] = useState('');
  const [confirmPass, setConfirmPass] = useState('');
  // const [loggedIn,setLoggedIn] = useState(false);

  const showSidebar = () => {
    setSidebar(!sidebar);
  };

  const showotp_Sidebar = (e) => {
    setotp_Sidebar(!otp_sidebar);
    e.preventDefault();
    console.log('showotpsidebar clicked');
  };
  const showsigninemail = (e) => {
    setsignin_email(!signin_email);
    e.preventDefault();
  };

  const showsignupslider = (e) => {
    setsignupslider(!signupslider);
    e.preventDefault();
  };
  const showSignUpOtpslider = (e) => {
    showotp_Sidebar(e);
    showsignupslider(e);
  };
  const showsignupemail = (e) => {
    setsignupemail(!signupemail);
    e.preventDefault();
  };
  const signinemail = () => {
    Auth.signIn(email, password)
      .then((user) => {
        console.log(user);
        setUser(user);
        closeallsliders();
      })
      .catch((err) => console.log('error', err));
  };
  const closeallsliders = () => {
    setSidebar(false);
    setotp_Sidebar(false);
    setsignin_email(false);
    setsignupslider(false);
    setsignupemail(false);
  };
  const signup = () => {
    Auth.signUp({
      username: signupEmail,
      password: signupPassword,
      attributes: {
        name: name,
        email: signupEmail,
      },
      validationData: [],
    })
      .then((user) => {
        console.log('success', user);
        setCodeSent(true);
      })
      .catch((err) => console.log('error', err));
  };
  const verifyCode = () => {
    Auth.confirmSignUp(signupEmail, code, {
      forceAliasCreation: true,
    })
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  };
  const logout = async () => {
    try {
      await Auth.signOut();
      setUser(null);
    } catch (e) {
      console.log('error:', e);
    }
  };

  useEffect(() => {
    Auth.currentAuthenticatedUser({
      bypassCache: false,
    })
      .then((user) => {
        console.log(user);
        setUser(user);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="Navbardiv">
      {/* <Container> */}

      <Navbar bg="dark" variant="dark" fixed="top" id="nav1" className="px-5">
        {/* <Navbar.Brand href="#home" className = "px-3">TechguyService</Navbar.Brand>
                align-top height="38"
                */}

        <Navbar.Brand href="/">
          <img
            src={logo}
            width={58 * 1.5}
            className="d-inline-block 
                    
                     p-0 m-0"
            alt="TechGuyService logo"
          />
        </Navbar.Brand>

        <Nav id="nav1" className="mr-auto ">
          <NavDropdown title="Company" id="nav-company" className=" pl-4  pr-2">
            <NavDropdown.Item eventKey="4.1" href="/aboutus">
              About Us
            </NavDropdown.Item>
            <NavDropdown.Item eventKey="4.2" href="/tandc">
              Terms and Conditions
            </NavDropdown.Item>
            <NavDropdown.Item eventKey="4.3" href="/privacy-policy">
              Privacy Policy
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item eventKey="4.4" href="/refund-policy">
              Refund and Cancellations
            </NavDropdown.Item>
            <NavDropdown.Item eventKey="4.4" href="/contact-us">
              Contact Us
            </NavDropdown.Item>
          </NavDropdown>

          {/* MAKE THIS CHANGE  */}
        </Nav>

        <Nav id="nav1">
          {/* <Nav.Link style={{ color: 'white' }} classname="p-0 m-0">
            <FontAwesomeIcon
              className="ml-1 mr-4 p-0"
              icon={faPhoneSquareAlt}
              size="2x"
            />
          </Nav.Link>
          <Nav.Link style={{ color: 'white' }} classname="p-0 m-0">
            <FontAwesomeIcon
              className="ml-1 mr-4 p-0"
              icon={faShoppingCart}
              size="2x"
            />
          </Nav.Link>
          <Nav.Link
            style={{ color: 'white', fontSize: '20px' }}
            classname="mx-5"
          >
            Cart
          </Nav.Link> */}

          {user && (
            <NavDropdown
              style={{ color: 'white', fontSize: '20px' }}
              title="Profile"
              id="nav-profile"
              className="mx-5"
            >
              <NavDropdown.Item eventKey="4.1">My Services</NavDropdown.Item>
              <NavDropdown.Item eventKey="4.2" onClick={logout}>
                LogOut
              </NavDropdown.Item>
            </NavDropdown>
          )}

          {!user && (
            <Nav.Link
              style={{ color: 'white', fontSize: '20px' }}
              classname="mx-5"
              onClick={showSidebar}
            >
              Sign In
            </Nav.Link>
          )}

          {/* <Button variant="outline-light" className = " ml-5"  onClick={() => setShow(true)}>Sign In</Button> */}
        </Nav>

        {/* onClick={() => setShow(true)} */}
      </Navbar>

      <Container
        id="slider"
        className={sidebar ? 'nav-menu active' : 'nav-menu'}
      >
        <Container>
          <Container id="slidertop">
            {/* <Nav.Link id= "cross" onClick={showSidebar}><BsChevronRight md="2x"/></Nav.Link> */}
            <Nav.Link
              style={{ color: 'white' }}
              classname="p-0 m-0"
              onClick={showSidebar}
            >
              <FontAwesomeIcon
                className="ml-0 mr-2 p-0"
                icon={faTimes}
                size="2x"
              />
            </Nav.Link>

            <h5 id="sliderp">Please Login to continue</h5>

            {/* dsjhcfvwjewn */}
          </Container>

          <hr />
          <Form inline>
            <Form.Group controlId="formBasicEmail">
              <br />
              <br />
              <br />
              <br />
              <br />
              <Form.Control
                as="select"
                className="my-1 mr-1 ml-3"
                id="inlineFormCustomSelectPref"
                custom
              >
                <option value="0">+91</option>
                <option value="1">+121</option>
                <option value="2">+11 </option>
              </Form.Control>
              <Form.Control
                type="text"
                className="ml-1"
                placeholder="Enter phone number"
                variant="dark"
              />
            </Form.Group>

            <Button
              block
              variant="outline-info"
              type="submit"
              className="mx-3 "
              onClick={showotp_Sidebar}
            >
              Continue
              {/* change button to link with a onclick function to match theme, 
                            how it needs to be done is on stack overflow  https://www.google.com/search?q=can+i+add+a+onclick+to+a+link&rlz=1C1CHBF_enIN914IN914&oq=can+i+add+a+onclick+to+a+link&aqs=chrome..69i57j33i22i29i30l6.13467j0j7&sourceid=chrome&ie=UTF-8 */}
            </Button>

            <h4 className="mx-auto my-4">OR</h4>
            <Button
              block
              variant="danger"
              type="submit"
              className="mx-3 "
              onClick={showsigninemail}
            >
              <FontAwesomeIcon
                className="ml-0 mr-2 p-0"
                icon={faEnvelope}
                size="1.5x"
              />{' '}
              Login with Email
              {/* change button to link with a onclick function to match theme,  faEnvelope
                            how it needs to be done is on stack overflow  https://www.google.com/search?q=can+i+add+a+onclick+to+a+link&rlz=1C1CHBF_enIN914IN914&oq=can+i+add+a+onclick+to+a+link&aqs=chrome..69i57j33i22i29i30l6.13467j0j7&sourceid=chrome&ie=UTF-8 */}
            </Button>
            <Button
              block
              variant="primary"
              className="mx-3 "
              id="facebookbutton"
              onClick={() => {
                Auth.federatedSignIn({ provider: 'Facebook' });
              }}
            >
              <FontAwesomeIcon
                className="ml-0 mr-2 p-0"
                icon={faFacebookF}
                size="1.5x"
              />{' '}
              Login with Facebook
            </Button>
            <Button
              block
              variant="light"
              className="mx-3 "
              id="googlebutton"
              onClick={() => {
                Auth.federatedSignIn({ provider: 'Google' });
              }}
            >
              <Image
                className="ml-0 mr-2 p-0"
                style={{ width: '20px' }}
                src={googleicon}
                rounded
              />{' '}
              Login with Google
            </Button>
            <Nav.Link
              href="/shop"
              style={{ color: 'white', textDecoration: 'underline' }}
              onClick={showsignupslider}
              className="mx-auto "
            >
              {' '}
              Don&apos;t have an account? Sign Up here{' '}
            </Nav.Link>
          </Form>
        </Container>
      </Container>

      <Container
        id="slider-otp-phone"
        className={otp_sidebar ? 'nav-menu active' : 'nav-menu'}
      >
        <Container>
          <Container id="slidertop">
            {/* <Nav.Link id= "cross" onClick={showSidebar}><BsChevronRight md="2x"/></Nav.Link> */}
            <Nav.Link
              style={{ color: 'white' }}
              classname="p-0 m-0"
              onClick={showotp_Sidebar}
            >
              <FontAwesomeIcon
                className="ml-0 mr-2 p-0"
                icon={faTimes}
                size="2x"
              />
            </Nav.Link>

            <h5 id="sliderp">Please Enter OTP</h5>
          </Container>

          <hr />
          <Form inline>
            <Form.Group controlId="formBasicEmail">
              <br />
              <br />
              <br />
              <br />
              <br />

              <Form.Control
                type="text"
                className="ml-2"
                placeholder="Enter OTP"
                variant="dark"
              />

              <Button variant="outline-info" type="submit" className="mx-3 ">
                Continue
                {/* change button to link with a onclick function to match theme, 
                            how it needs to be done is on stack overflow  https://www.google.com/search?q=can+i+add+a+onclick+to+a+link&rlz=1C1CHBF_enIN914IN914&oq=can+i+add+a+onclick+to+a+link&aqs=chrome..69i57j33i22i29i30l6.13467j0j7&sourceid=chrome&ie=UTF-8 */}
              </Button>
            </Form.Group>
          </Form>
        </Container>
      </Container>

      <Container
        id="slider-signin-email"
        className={signin_email ? 'nav-menu active' : 'nav-menu'}
      >
        <Container>
          <Container id="slidertop">
            {/* <Nav.Link id= "cross" onClick={showSidebar}><BsChevronRight md="2x"/></Nav.Link> */}
            <Nav.Link
              style={{ color: 'white' }}
              classname="p-0 m-0"
              onClick={showsigninemail}
            >
              <FontAwesomeIcon
                className="ml-0 mr-2 p-0"
                icon={faTimes}
                size="2x"
              />
            </Nav.Link>

            <h5 id="sliderp">Sign in with Email</h5>
          </Container>

          <hr />
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

            <Button
              block
              variant="outline-info"
              className=" "
              onClick={() => signinemail()}
            >
              Continue
              {/* change button to link with a onclick function to match theme, 
                            how it needs to be done is on stack overflow  https://www.google.com/search?q=can+i+add+a+onclick+to+a+link&rlz=1C1CHBF_enIN914IN914&oq=can+i+add+a+onclick+to+a+link&aqs=chrome..69i57j33i22i29i30l6.13467j0j7&sourceid=chrome&ie=UTF-8 */}
            </Button>
          </Form>
        </Container>
      </Container>

      <Container
        id="slider-signin-email"
        className={signupslider ? 'nav-menu active' : 'nav-menu'}
      >
        <Container>
          <Container id="slidertop">
            {/* <Nav.Link id= "cross" onClick={showSidebar}><BsChevronRight md="2x"/></Nav.Link> */}
            <Nav.Link
              style={{ color: 'white' }}
              classname="p-0 m-0"
              onClick={showsignupslider}
            >
              <FontAwesomeIcon
                className="ml-0 mr-2 p-0"
                icon={faTimes}
                size="2x"
              />
            </Nav.Link>

            <h5 id="sliderp">Sign Up Here</h5>
          </Container>

          <hr />
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Enter Phone number</Form.Label>
              <Form.Control type="email" placeholder="+91 - " />
            </Form.Group>
            <Button
              block
              variant="outline-info"
              type="submit"
              className=" "
              onClick={showSignUpOtpslider}
            >
              Get OTP
              {/* change button to link with a onclick function to match theme, 
                            how it needs to be done is on stack overflow  https://www.google.com/search?q=can+i+add+a+onclick+to+a+link&rlz=1C1CHBF_enIN914IN914&oq=can+i+add+a+onclick+to+a+link&aqs=chrome..69i57j33i22i29i30l6.13467j0j7&sourceid=chrome&ie=UTF-8 */}
            </Button>
            <h4 className="mx-auto my-4">OR</h4>
            <Button
              block
              variant="light"
              type="submit"
              className="mx-auto "
              onClick={showsignupemail}
            >
              <FontAwesomeIcon
                className="ml-0 mr-2 p-0"
                icon={faEnvelope}
                size="1.5x"
              />{' '}
              Sign Up with Email
              {/* change button to link with a onclick function to match theme,  faEnvelope
                            how it needs to be done is on stack overflow  https://www.google.com/search?q=can+i+add+a+onclick+to+a+link&rlz=1C1CHBF_enIN914IN914&oq=can+i+add+a+onclick+to+a+link&aqs=chrome..69i57j33i22i29i30l6.13467j0j7&sourceid=chrome&ie=UTF-8 */}
            </Button>
          </Form>
        </Container>
      </Container>

      <Container
        id="slider-signin-email"
        className={signupemail ? 'nav-menu active' : 'nav-menu'}
      >
        <Container>
          <Container id="slidertop">
            {/* <Nav.Link id= "cross" onClick={showSidebar}><BsChevronRight md="2x"/></Nav.Link> */}
            <Nav.Link
              style={{ color: 'white' }}
              classname="p-0 m-0"
              onClick={showsignupemail}
            >
              <FontAwesomeIcon
                className="ml-0 mr-2 p-0"
                icon={faTimes}
                size="2x"
              />
            </Nav.Link>

            <h5 id="sliderp">Sign Up Here</h5>
          </Container>

          <hr />

          {!codeSent && (
            <Form>
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

              <Button
                block
                variant="primary"
                className=" "
                onClick={() => signup()}
              >
                Register!
                {/* change button to link with a onclick function to match theme, 
                            how it needs to be done is on stack overflow  https://www.google.com/search?q=can+i+add+a+onclick+to+a+link&rlz=1C1CHBF_enIN914IN914&oq=can+i+add+a+onclick+to+a+link&aqs=chrome..69i57j33i22i29i30l6.13467j0j7&sourceid=chrome&ie=UTF-8 */}
              </Button>
            </Form>
          )}
          {codeSent && (
            <Form>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Full Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter code"
                  value={code}
                  onChange={(event) => setCode(event.target.value)}
                />
              </Form.Group>
              <Button
                block
                variant="primary"
                className=" "
                onClick={() => verifyCode()}
              >
                Verify code
                {/* change button to link with a onclick function to match theme, 
                            how it needs to be done is on stack overflow  https://www.google.com/search?q=can+i+add+a+onclick+to+a+link&rlz=1C1CHBF_enIN914IN914&oq=can+i+add+a+onclick+to+a+link&aqs=chrome..69i57j33i22i29i30l6.13467j0j7&sourceid=chrome&ie=UTF-8 */}
              </Button>
            </Form>
          )}
        </Container>
      </Container>
    </div>
  );
}

export default NavbarComponent;
