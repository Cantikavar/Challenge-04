import React from 'react'
import { Button, Container, Nav, Navbar } from 'react-bootstrap'
import logoDashboard from '../../IMG/logo.png'

export const NavbarDefault = () => {
  return (
    <div>
    <Navbar bg="light" variant="light">
    <Container>
    <Navbar.Brand><img alt='' src={logoDashboard} className='logoDashboard' /> </Navbar.Brand>
    <Nav className="justify-content-end">
      <Nav.Link href="#our-sevices">Our Services</Nav.Link>
      <Nav.Link href="#why-us">Why Us</Nav.Link>
      <Nav.Link href="#testimonial">Testimonial</Nav.Link>
      <Nav.Link href="#faq">FAQ</Nav.Link>
      <Button variant="success">Register</Button>
    </Nav>
    </Container>
  </Navbar>
    </div>
  )
}
