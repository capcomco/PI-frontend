import React from "react";
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import MenuPrincipal from "./Menu";

import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Col, Container, Form, Row} from "react-bootstrap";
/* import AddButton from './AddButton'
import ListProyectos from "./ListProyectos"; */





const Home = () => {

  return <div>
      
      <MenuPrincipal/>
      <Container>
      <h3 className="text-success mt-3 p-1">Por favor selecciona una de las Opciones del menú superior</h3>
      </Container>
  </div>
}

export default Home