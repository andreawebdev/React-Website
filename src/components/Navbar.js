import React from "react";
import { LinkContainer } from "react-router-bootstrap";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./Navbar.css";

class NavBar extends React.Component {
  render() {
    return (
      <nav>
        <Navbar className="myclass" variant="dark" bg="light" expand="lg">
          <Navbar.Brand href="#home">
            <img
              src="images/logo3.png"
              width="60"
              height="60"
              className="d-inline-block align-top"
              alt="images/logo3.png"
            />
          </Navbar.Brand> 
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <LinkContainer to="/">
                <Nav.Link>Home</Nav.Link>
              </LinkContainer>
              <Nav.Link href="#about">About</Nav.Link>
              <Nav.Link href="#destinations">Destinations</Nav.Link>
              <Nav.Link href="#news">News</Nav.Link>
            </Nav>
            <LinkContainer to="/SignUp">
              <Form inline>
                <Button variant="outline-warning">Sign Up</Button>
              </Form>
            </LinkContainer>
          </Navbar.Collapse>
        </Navbar>
       
      </nav>
    );
  }
}

export default NavBar;
