import Table from 'react-bootstrap/Table';
import { useQuery } from "@apollo/client";
import gql from "graphql-tag";
import Avance from "./Avance";
import { Container } from 'react-bulma-components';
import MenuPrincipal from '../Menu';



const ListaAvances = () => {
    const AVANCES = gql` 

    query {
        avances {
        descripcionAvance
        fechaAvance
        observaciones               
      }
    }
`;
    const { data, loading, error } = useQuery(AVANCES);

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
        <h1>Lista de Avances</h1>
        <h2>Proyecto Uno</h2>
        <Table striped bordered hover size="sm">
            <thead>
                <tr>
                    <th >Descripción</th>
                    <th >Fecha</th>
                    <th >Observaciones</th>                    
                </tr >
                
            </thead>
            <tbody>
                
                {data.avances.map((avance) => <Avance avance={avance} />)}
                
            </tbody>
            <tr>
                
            </tr>
        </Table>
        </Container >
    </div>
}

export default ListaAvances