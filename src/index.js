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
  ApolloLink,
  HttpLink,
} from "@apollo/client";
  //ApolloLink,
  //HttpLink,


import MenuPrincipal from './components/Menu';
import NoExiste from './components/NoExiste';
import ListaUsuarios from './components/Users/ListaUsuarios';
import RegistroUsuario from './components/Users/RegistroUsuario';
import ListaProyectos from './components/Proyectos/ListaProyectos';
import CrearProyecto from './components/Proyectos/CrearProyecto';
import ListaAvances from './components/Avances/ListaAvances';
import CrearAvance from './components/Avances/CrearAvance';
import Login from './components/Login';
/* import Login from './components/Autenticar'; */
import Home from './components/Home';
import EditarPerfil from './components/Users/EditarPerfil';
import { BrowserRouter, Switch, Route } from 'react-router-dom';



//const httpLink = new HttpLink({ uri: 'http://localhost:5555/graphql' });



//BrowserRouter Colocar Rutas
//Switch
const httpLink = new HttpLink({ uri: 'http://localhost:5555/graphql' });

const authLink = new ApolloLink((operation, forward) => {
  const token = localStorage.getItem('auth_token');
  operation.setContext({
    headers: {
      authorization: token ? `${token}` : ''
    }
  });
  return forward(operation);
});



const client = new ApolloClient({
  link: authLink.concat(httpLink),
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
        <Route exact path="/avances" component={ListaAvances} />
        <Route exact path="/crearavance" component={CrearAvance} />
        <Route exact path="/registrousuario" component={RegistroUsuario} />
        <Route exact path="/editarperfil" component={EditarPerfil} />
        
        <Route path="/" component={NoExiste} />
      </Switch>
    </BrowserRouter>
  </ApolloProvider>, inicio)
