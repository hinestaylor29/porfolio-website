import React from 'react';
import Nav from 'react-bootstrap/Nav';
import "./Navbar.css";

export default function Navbar(){
    return (
    <Nav  className="justify-content-end link" activeKey="/home" onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}>
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
                Contact
            </Nav.Link>
        </Nav.Item>
</Nav> 
    );
}