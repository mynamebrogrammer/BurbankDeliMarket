import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

// logo image file in project
import logo from '../../burbankdelilogo.png';

function Header() {
  return (
    <header>
      <Navbar bg="light" expand="lg">
        {/* Replace the Navbar.Brand component with an img element */}
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
              <Nav.Link>Promotions</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/contact">
              <Nav.Link>Contact</Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
}

export default Header;
