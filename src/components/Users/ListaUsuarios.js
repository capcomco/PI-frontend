import { useQuery } from "@apollo/client";
import gql from "graphql-tag";
import Usuario from "./Usuario";



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
        <h1 >Lista de Usuarios</h1>
        <table className="table">
            <thead>
                <tr>
                    <th>Nombre</th>
                    <th>Identificacion</th>
                    <th>Estado</th>
                    <th>Email</th>
                    <th>Perfil</th>
                    <th>Acciones</th>
                </tr>
                {data.getUsers.map((getUserById) => <Usuario user={getUserById} />)}
            </thead>
        </table>
    </div>
}

export default ListaUsuarios