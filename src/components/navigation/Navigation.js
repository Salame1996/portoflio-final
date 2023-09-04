import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "bootstrap/dist/css/bootstrap.min.css";
import './Navigation.css';

function Navigation() {
  return (
    <div>
   <Navbar className="background">
        <Navbar.Brand href="/" className="nav-link" style={{ color: "white" }}>
          Carlos Salame
        </Navbar.Brand>
        <Nav style={{ position:'absolute', left:'1350px'}} >
          <Nav.Link href="about" className="nav-link" style={{ color: "white" }}>
            About
          </Nav.Link>
          <Nav.Link href="resume" className="nav-link" style={{ color: "white" }}>
            Resume
          </Nav.Link>
          <Nav.Link href="projects" className="nav-link" style={{ color: "white" }}>
            Projects
          </Nav.Link>
          <Nav.Link href="contact" className="nav-link" style={{ color: "white" }}>
            Contact
          </Nav.Link>
        </Nav>
      </Navbar>
    </div>
  );
}

export default Navigation;
