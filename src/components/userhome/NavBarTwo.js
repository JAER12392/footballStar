import React from 'react';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';

const NavBarTwo = () => (
   <Navbar>
    <Navbar.Header>
      <Navbar.Brand>
        <a href="#">footballStar</a>
      </Navbar.Brand>
    </Navbar.Header>
    <Nav>
      <NavItem eventKey={1} href="#">News</NavItem>
      <NavItem eventKey={2} href="#">Matches</NavItem>
      <NavDropdown eventKey={3} title="Players" id="basic-nav-dropdown">

        <MenuItem eventKey={3.1}>Cristiano Ronaldo</MenuItem>
        <MenuItem eventKey={3.2}>Luis Figo</MenuItem>
        <MenuItem eventKey={3.3}>Eusebio</MenuItem>
        <MenuItem divider />
        <MenuItem eventKey={3.5}>Lionel Messi</MenuItem>
        <MenuItem eventKey={3.6}>Maradona</MenuItem>
        <MenuItem eventKey={3.7}>Mario Kempes</MenuItem>
        <MenuItem divider />
        <MenuItem eventKey={3.8}>Hugo Sanchez</MenuItem>
        <MenuItem eventKey={3.9}>Luis Hernandez</MenuItem>
        <MenuItem eventKey={4.0}>Rafael Marquez</MenuItem>
         <MenuItem divider />
      </NavDropdown>
    </Nav>
  </Navbar>
);

export default NavBarTwo;
