import React from "react";
// import { Link } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";

// import Form from "react-bootstrap/Form";
// import FormControl from "react-bootstrap/FormControl";
// import Button from "react-bootstrap/Button";

class NavBar extends React.Component {
  render() {
    return (
      <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
        <Navbar.Brand>
          <p>
            MVV <i class="fab fa-typo3" />
          </p>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <LinkContainer to="/">
              <Nav.Link>Home</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/services">
              <Nav.Link>Home</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/products">
              <Nav.Link>Home</Nav.Link>
            </LinkContainer>

            <NavDropdown.Divider />
          </Nav>
          {/* <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-success">Search</Button>
          </Form> */}
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default NavBar;
