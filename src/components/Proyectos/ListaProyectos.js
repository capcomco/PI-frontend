import Table from 'react-bootstrap/Table';
import { useQuery } from "@apollo/client";
import gql from "graphql-tag";
import Proyecto from "./Proyecto";
import { Container } from 'react-bulma-components';
import MenuPrincipal from '../Menu';



const ListaProyectos = () => {
    const PROYECTOS = gql` 

    query {
        getProjects {
        _id
        nombre
        descripcion
        presupuesto
        estado
        
      }
    }
`;
    const { data, loading, error } = useQuery(PROYECTOS);

    if (loading) {
        return <div>
            <p>Estoy cargando aún</p>
        </div>
    }

    if (error) {
        return <div>
            <p>Hubo un error</p>
        </div>
    }

    return <div>
        <MenuPrincipal/>
        <Container fluid>
        <h1>Lista de Proyectos</h1>
        <Table striped bordered hover size="sm">
            <thead>
                <tr>
                    <th >Nombre</th>
                    <th >Identificacion</th>
                    <th >Descripcion</th>
                    <th >Presupuesto</th>
                    <th >Estado</th>
                    <th >Acciones</th>
                </tr >
                
            </thead>
            <tbody>
                
                {data.getProjects.map((getProjectById) => <Proyecto project={getProjectById} />)}
                
            </tbody>
            <tr>
                
            </tr>
        </Table>
        </Container >
    </div>
}

export default ListaProyectos