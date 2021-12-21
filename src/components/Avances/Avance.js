
import { useMutation } from "@apollo/client"
import gql from "graphql-tag"

const Avance = ({ avance }) => {

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
        <td>{avance.descripcionAvance}</td>
        <td>{avance.fechaAvance}</td>
        <td>{avance.observaciones}</td>        
        <td><button className="btn btn-primary btn-sm" >Agregar Avance</button></td>
        <td><button className="btn btn-primary btn-sm" >Agregar Observación</button></td>               
    </tr>
}

export default Avance