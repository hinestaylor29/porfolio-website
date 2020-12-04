import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "./Navigation.css";

export default function Navigation(){
    return (
    <Navbar  expand="lg" className="justify-content-end link" activeKey="/home">
         <Navbar.Toggle />
         <Navbar.Collapse>
        <Nav.Item>
            <Nav.Link href="/home">
                Portfolio
            </Nav.Link>
        </Nav.Item>
  
        <Nav.Item>
            <Nav.Link eventKey="link-1">
            Resume
            </Nav.Link>
        </Nav.Item>
  
        <Nav.Item>
            <Nav.Link eventKey="link-2">
                Coding
            </Nav.Link>
        </Nav.Item>

        <Nav.Item>
            <Nav.Link eventKey="link-2">
                Contact
            </Nav.Link>
        </Nav.Item>
        </Navbar.Collapse>
</Navbar> 
    );
}