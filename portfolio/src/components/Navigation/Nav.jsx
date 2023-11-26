import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Navigation = () => {
  return (
    <div>
    <Navbar bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="#">Madeleine Abraham</Navbar.Brand>
        <Nav className="ms-auto">
          <Nav.Link href="#">About Me</Nav.Link>
          <Nav.Link href="#">Contact</Nav.Link>
          <Nav.Link href="#">Portfolio</Nav.Link>
          <Nav.Link href="#">Resume</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  </div>
  )
}

export default Navigation