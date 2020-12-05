import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "./Navigation.css";

export default function Navigation(){
    return (
    <Navbar expand="lg" className= "justify-content-end links">
         <Navbar.Toggle className= "justify-content-end" />
         <Navbar.Collapse className= "justify-content-end" >
        <Nav.Item>
            <Nav.Link className= "nav-link" href="#portfolio">
                Portfolio
            </Nav.Link>
        </Nav.Item>
  
        <Nav.Item>
            <Nav.Link className= "nav-link" href="#resume">
            Resume
            </Nav.Link>
        </Nav.Item>
  
        <Nav.Item>
            <Nav.Link className= "nav-link" href="#coding">
                Coding
            </Nav.Link>
        </Nav.Item>

        <Nav.Item>
            <Nav.Link className= "nav-link" href="#contact">
                Contact
            </Nav.Link>
        </Nav.Item>
        </Navbar.Collapse>
</Navbar> 
    );
}