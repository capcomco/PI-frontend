import React from "react";
import MenuPrincipal from "./Menu";

import 'bootstrap/dist/css/bootstrap.min.css';
import { Container} from "react-bootstrap";
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