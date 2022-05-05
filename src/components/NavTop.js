import { Navbar,Container,Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import React from 'react'

export default function NavTop() {

  return (
    <Navbar bg="light" expand="lg">
    <Container>
      <Navbar.Brand>
        <Link to="/" style={{
          textDecoration:"none",
          textUnderline:"none",
          color:"black",
          fontSize:"1.5rem"
          
        }}>
        Korporalia
        </Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link>
            <Link to={"/"}>Home</Link>{/* Para que funcione el to, se utiliza el import de Link */}
          </Nav.Link>
          <Nav.Link>
            <Link to="/carrito">Carrito</Link>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}
