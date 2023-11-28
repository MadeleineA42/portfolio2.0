import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './nav.css';
import profileImage from '../../assets/images/avataaars.png';

const Navigation = () => {
  return (
    <div>
    <Navbar className="fixed-top" bg="dark" data-bs-theme="dark">
      <Container className='bar'>
      <Navbar.Brand href="#about">
            <img
              src={profileImage}
              alt="Logo"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
          </Navbar.Brand>
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