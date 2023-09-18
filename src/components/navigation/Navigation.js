import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Navigation.css";
import { Link } from 'react-router-dom'; 

function Navigation() {
  return (
    <div>
      <Navbar className="background">
        <Navbar.Brand
          as={Link}
          to="/"
          className="nav-link"
          style={{ color: "white" }}
        >
          Carlos Salame
        </Navbar.Brand>
        <Nav>
          <Nav.Link
            as={Link}
            to="/about"
            className="nav-link"
            style={{ color: "white" }}
          >
            About
          </Nav.Link>
          <Nav.Link
            href="resume"
            className="nav-link"
            style={{ color: "white" }}
          >
            Resume
          </Nav.Link>
          <Nav.Link
          as={Link}
            to="/projects"
            className="nav-link"
            style={{ color: "white" }}
          >
            Projects
          </Nav.Link>
          <Nav.Link
             as={Link}
             to="/contact"
            className="nav-link"
            style={{ color: "white" }}
          >
            Contact
          </Nav.Link>
        </Nav>
      </Navbar>
    </div>
  );
}

export default Navigation;
