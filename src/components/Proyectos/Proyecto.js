
import { useMutation } from "@apollo/client"
import gql from "graphql-tag"
import Nav from 'react-bootstrap/Nav'
import React from 'react'
import {Button, Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap'
import CreateAvance from "../Avances/CrearAvance"
import { useState } from "react"





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
    

    return (
    <>
    
    <tr>
        <td>{project.nombreProyecto}</td>
        <td>{project.identificador}</td>
        <td>{project.descripcion}</td>
        <td>{project.presupuesto}</td>
        <td>{project.estado}</td>
        <td><button  className="btn btn-primary btn-sm" >Act/Desact</button></td>
        <td>
            
            <button className="btn btn-success btn-sm"  >Avances</button>
            
        </td>        
    </tr>

      {/* <Modal isOpen={this.state.abierto}>
          <ModalHeader>Agregar Avance</ModalHeader>
          <ModalBody>
            <CreateAvance/>
          </ModalBody>
          <ModalFooter>

          </ModalFooter>
      </Modal> */}


 
    </>
    )
}

export default Proyecto