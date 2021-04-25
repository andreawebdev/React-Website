import React from "react";
// import { Link } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";

import Form from "react-bootstrap/Form";
// import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import "./Navbar.css";

class NavBar extends React.Component {
  render() {
    return (
      <nav>
        <Navbar className="nvbar_my" variant="dark" expand="lg" fixed="top">
          <Navbar.Brand>
            <p>
              <i class="fab fa-affiliatetheme fa-1x"></i>
            </p>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <LinkContainer to="/">
                <Nav.Link>Home</Nav.Link>
              </LinkContainer>

              <Nav.Link href="#about">About</Nav.Link>
              <Nav.Link href="#destinations">Destinations</Nav.Link>

              {/* <Nav.Link href="#promo">Promo offers</Nav.Link> */}
              <Nav.Link href="#news">News</Nav.Link>
              <LinkContainer disabled to="/services">
                <Nav.Link>Services</Nav.Link>
              </LinkContainer>
              {/* <LinkContainer disabled to="/products">
                <Nav.Link>Products</Nav.Link>
              </LinkContainer> */}

              <NavDropdown.Divider />
            </Nav>

            <LinkContainer to="/SignUp">
              <Form inline>
                <Button variant="outline-warning">Sign Up</Button>
              </Form>
            </LinkContainer>
            {/* <Form inline>
            <Button variant="outline-warning">Sign Up</Button>
          </Form> */}
          </Navbar.Collapse>
        </Navbar>
      </nav>
    );
  }
}

export default NavBar;
