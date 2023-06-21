import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

// logo image file in project
import logo from '../../burbankdelilogo.png';

function Header() {
  return (
    <header>
      <Navbar bg="light" expand="lg">
        <LinkContainer to="/">
          <Navbar.Brand>
            <img src={logo} alt="Burbank Deli Market" width="120" height="auto" />
          </Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <LinkContainer to="/">
              <Nav.Link>Home</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/menu">
              <Nav.Link>Menu</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/promotions">
              <Nav.Link>Wines</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/beer">
              <Nav.Link>Beer</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/contact">
              <Nav.Link>About Us</Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
}

export default Header;
