// import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './navbar.css';
import logo from '../screens/assets/images/Logo_blue.png';
function NavbarComponent() {

  return (
    
    <div className="Navbardiv">

            <Navbar bg="dark" variant="dark" fixed="top" id = "nav1"className = "px-5 py-5">

                <Navbar.Brand href="https://techguyservice.com">

                <img
                    src= {logo}
                    width={75* 1.5}
                    
                    className="d-inline-block 
                    
                     p-0 m-0"
                    alt="TechGuyService logo"
                />

                </Navbar.Brand>

                <Nav id = "nav1"className="mr-auto ">

                    <NavDropdown title="Company" id="nav-company" className = " pl-4  pr-2">
                        <NavDropdown.Item eventKey="4.1" href = "/aboutus">About Us</NavDropdown.Item>
                        <NavDropdown.Item eventKey="4.2" href = "/tandc">Terms and Conditions</NavDropdown.Item>
                        <NavDropdown.Item eventKey="4.3" href = "/privacy-policy">Privacy Policy</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item eventKey="4.4" href = "/refund-policy">Refund Policy</NavDropdown.Item>
                        <NavDropdown.Item eventKey="4.4" href = "/contact-us">Contact Us</NavDropdown.Item>
                    </NavDropdown>
                    
                </Nav>
                
            </Navbar>

            
    </div>
  );
}

export default NavbarComponent;
