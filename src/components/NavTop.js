import { Navbar,Container,Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import React from 'react'
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useContext } from "react";
import {CarritoContext} from '../Context/carritoContext';


export default function NavTop() {

  const {carrito} = useContext(CarritoContext) /* metodo kevin solo trae carrito y en return manda el .length */
  console.log( "Carrito navbar",carrito);

  const mapeo = carrito.map((item)=>{
    return item.cantidad
  })

  let carritoFinal = [...mapeo,0]


  let sumProducts = carritoFinal.reduce((a,b)=>{
    return a+b
  })


  console.log("mapeo",sumProducts)

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
          <Nav.Link >
            <Link to={"/"} className="nav-link">Home</Link>{/* Para que funcione el to, se utiliza el import de Link */}
            
          </Nav.Link>
          <Nav.Link>
            <Link to={"/productos"} className="nav-link">Productos</Link>
          </Nav.Link>
        </Nav>
        <Nav.Link>
            <Link to="/carrito" className="nav-link">
              <Badge badgeContent={sumProducts} color="primary"> {/* badgeContent={carrito.length} con el meetodo de kevin de solo  */}
                <ShoppingCartIcon />
              </Badge>
            </Link>
          </Nav.Link>

      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}
