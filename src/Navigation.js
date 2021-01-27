import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "./Navigation.css";

export default function Navigation(){
    
    return (
    <Navbar collapseOnSelect expand="lg" className= "justify-content-end links">
         <Navbar.Toggle className= "justify-content-end" />
         <Navbar.Collapse className= "justify-content-end" >
        <Nav.Item>
            <Nav.Link className= "nav-link" href="#portfolio">
                PORTFOLIO
            </Nav.Link>
        </Nav.Item>
  
        <Nav.Item>
            <Nav.Link className= "nav-link" href="#resume">
            RESUME
            </Nav.Link>
        </Nav.Item>
  
        <Nav.Item>
            <Nav.Link className= "nav-link" href="#coding">
                CODING
            </Nav.Link>
        </Nav.Item>

        <Nav.Item>
            <Nav.Link className= "nav-link" href="#contact">
                CONTACT
            </Nav.Link>
        </Nav.Item>
        </Navbar.Collapse>
</Navbar>
    );
}