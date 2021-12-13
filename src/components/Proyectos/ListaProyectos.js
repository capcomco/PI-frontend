import { useQuery } from "@apollo/client";
import gql from "graphql-tag";
import Proyecto from "./Proyecto";



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
        <h1 >Lista de Proyectos</h1>
        <table className="table">
            <thead>
                <tr>
                    <th>Nombre</th>
                    <th>Identificacion</th>
                    <th>Descripcion</th>
                    <th>Presupuesto</th>
                    <th>Estado</th>
                    <th>Acciones</th>
                </tr>
                {data.getProjects.map((getProjectById) => <Proyecto project={getProjectById} />)}
            </thead>
        </table>
    </div>
}

export default ListaProyectos