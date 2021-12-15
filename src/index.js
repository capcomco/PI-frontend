import React from 'react';
import ReactDOM from 'react-dom';
import 'bulma/css/bulma.min.css';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
//import App from './App';
//import reportWebVitals from './reportWebVitals';
//import ProyectosLayout from './Proyectos/components/ProyectosLayout'


import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  
} from "@apollo/client";
  //ApolloLink,
  //HttpLink,


import MenuPrincipal from './components/Menu';
import NoExiste from './components/NoExiste';
import ListaUsuarios from './components/Users/ListaUsuarios';
import ListaProyectos from './components/Proyectos/ListaProyectos';
import CrearProyecto from './components/Proyectos/CrearProyecto';
import Login from './components/Login';
import Home from './components/Home';
import CreateUsuario from './components/Users/RegistroUsuario';
import EditarPerfil from './components/Users/EditarPerfil';
import { BrowserRouter, Switch, Route } from 'react-router-dom';



//const httpLink = new HttpLink({ uri: 'http://localhost:5555/graphql' });



//BrowserRouter Colocar Rutas
//Switch

const client = new ApolloClient({
  uri: 'http://localhost:5555/graphql',
  cache: new InMemoryCache()
});

const inicio = document.getElementById("root")

ReactDOM.render(
  <ApolloProvider client={client}>
    <BrowserRouter>
      <Switch>
      <Route exact path="/" component={Login} />
        <Route exact path="/menu" component={MenuPrincipal} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/proyectos" component={ListaProyectos} />
        <Route exact path="/usuarios" component={ListaUsuarios} />
        <Route exact path="/nuevoproyecto" component={CrearProyecto} />
        <Route exact path="/registrousuario" component={CreateUsuario} />
        <Route exact path="/editarperfil" component={EditarPerfil} />
        
        <Route path="/" component={NoExiste} />
      </Switch>
    </BrowserRouter>
  </ApolloProvider>, inicio)
