// import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
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
                
            </Navbar>

            
    </div>
  );
}

export default NavbarComponent;
