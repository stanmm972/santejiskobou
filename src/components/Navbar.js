import React from 'react';
import logo from "../assets/jiskobou.png";
import './navbar.css';
import {Navbar, Nav,Container} from 'react-bootstrap';

const Header = () => {
  return (
    <header>
      <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#"><img src={logo} id="logo" alt="logo" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="ml-auto">
            <Nav.Link href="#apropos">À propos de nous</Nav.Link>
            <Nav.Link href="#service">Services et Emploi</Nav.Link>
            <Nav.Link href="#contact">Contactez nous</Nav.Link>
            <Nav.Link href="https://jiskobou-ws.herokuapp.com">Jiskobou Portail (Membre uniquement)</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </header>
  )
}

export default Header