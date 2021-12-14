import React from "react";
import Header from './Header'
import { Link } from "react-router-dom"
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
/* import AddButton from './AddButton'
import ListProyectos from "./ListProyectos"; */





const MenuPrincipal = () => {

  return <Navbar bg="dark" variant="dark">
  <Navbar.Brand href="#home">P-I</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="/nuevoproyecto">Crear Proyecto</Nav.Link>
      <Nav.Link href="/proyectos">Proyectos</Nav.Link>
      <Nav.Link href="/usuarios">Usuarios</Nav.Link>
    </Nav>
  </Navbar>
}

export default MenuPrincipal