import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './nav.css';

const Navigation = () => {
  return (
    <div>
    <Navbar bg="dark" data-bs-theme="dark">
      <Container className='bar'>
        <Navbar.Brand href="#">Madeleine Abraham</Navbar.Brand>
        <Nav className="ms-auto">
          <Nav.Link href="#about">About Me</Nav.Link>
          <Nav.Link href="#contact">Contact</Nav.Link>
          <Nav.Link href="#portfolio">Portfolio</Nav.Link>
          <Nav.Link href="#resume">Resume</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  </div>
  )
}

export default Navigation