import React from 'react';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';

const NavBar = () => (
   <Navbar>
    <Navbar.Header>
      <Navbar.Brand>
        <a href="#"></a>
      </Navbar.Brand>
    </Navbar.Header>
    <Nav>
      <NavItem eventKey={1} href="#">About</NavItem>
      <NavItem eventKey={2} href="#">Story</NavItem>
      <NavDropdown eventKey={3} title="Family" id="basic-nav-dropdown">

        <MenuItem eventKey={3.1}>Cesar Esquivel Ramos</MenuItem>
        <MenuItem eventKey={3.2}>Edgar Zepeda</MenuItem>
        <MenuItem eventKey={3.3}>Mauricio Acevedo</MenuItem>
        <MenuItem eventKey={3.4}>Lorenzo Ramos</MenuItem>
        <MenuItem eventKey={3.5}>Paola Esquivel Ramos</MenuItem>
      </NavDropdown>
    </Nav>
  </Navbar>
);

export default NavBar;

