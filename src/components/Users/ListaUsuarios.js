import Table from 'react-bootstrap/Table'
import { useQuery } from "@apollo/client";
import gql from "graphql-tag";
import Usuario from "./Usuario";
import { Container } from 'react-bulma-components';
import MenuPrincipal from '../Menu';



const ListaUsuarios = () => {
    const USUARIOS = gql` 

    query {
        getUsers {
        _id
        name
        lastName
        email
        perfil
        estado
      }
    }
`;
    const { data, loading, error } = useQuery(USUARIOS);

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
        <Container>
        <h1 >Lista de Usuarios</h1>
        <Table striped bordered hover size="sm">
            <thead>
                <tr>
                    <th>Nombre</th>
                    
                    <th>Estado</th>
                    <th>Email</th>
                    <th>Perfil</th>
                    <th>Acciones</th>
                </tr>
               
            </thead>
            <tbody>
                {data.getUsers.map((getUserById) => <Usuario user={getUserById} />)}
            </tbody>
        </Table>
        </Container>
    </div>
}

export default ListaUsuarios