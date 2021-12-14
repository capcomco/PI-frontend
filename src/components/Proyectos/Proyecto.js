
import { useMutation } from "@apollo/client"
import gql from "graphql-tag"

const Proyecto = ({ project }) => {

    /*
        mutation{
            activeUser(identificacion:224465)
        }
    /*/
    /* const ACTIVAR_USUARIO = gql`
        mutation activeUser($identificacion:Int){
            activeUser(identificacion:$identificacion)
        }
    `
    const ELIMINAR_USUARIO = gql`
        mutation deleteUser($ident:Int){
            deleteUser(ident:$ident)
        }
    `
    const [activar] = useMutation(ACTIVAR_USUARIO)
    const [eliminar] = useMutation(ELIMINAR_USUARIO) */


    /* const activarUser = () => {
        activar({ variables: { identificacion: user.identificacion } })
    }

    const eliminarUser = () => {
        eliminar({ variables: { ident: user.identificacion } })
    } */

    return <tr>
        <td>{project.nombre}</td>
        <td>{project._id}</td>
        <td>{project.descripcion}</td>
        <td>{project.presupuesto}</td>
        <td>{project.estado}</td>
        {/* <td><button className="btn btn-primary" onClick={activarUser}>Activar</button>
            <button className="btn btn-primary" onClick={eliminarUser}>Eliminar</button></td> */}
    </tr>
}

export default Proyecto