import React from "react";
import Header from './Header'
import { Link } from "react-router-dom"
/* import AddButton from './AddButton'
import ListProyectos from "./ListProyectos"; */





const MenuPrincipal = () => {

  return <ul class="nav justify-content-center">
      <Header title="Menú Principal"/>
    <li class="nav-item">
      <a class="nav-link"><Link to="/nuevoproyecto">Crear Proyecto</Link></a>
    </li>
    <li class="nav-item">
      <a class="nav-link"><Link to="/proyectos">Ver Proyectos</Link></a>
    </li>
    <li class="nav-item">
      <a class="nav-link"><Link to="usuarios">Usuarios</Link></a>
    </li>
  </ul>
}

export default MenuPrincipal