import MenuPrincipal from "../Menu";
import Form from 'react-bootstrap/Form'
import { Container } from "react-bootstrap";
import { Modal, ModalHeader, ModalBody, ModalFooter } from "react-bootstrap";

import {
    gql, useMutation
} from "@apollo/client";
import React from "react";
import { useHistory } from "react-router";

const CreateAvance = () => {
    const his = useHistory();

    let idAvance, descripcionAvance, fechaAvance, observaciones, project

    const registroAvance = async (e) => {
        e.preventDefault()
        let nuevoAvance = {
            "idAvance": idAvance.value,
            "descripcionAvance": descripcionAvance.value,
            "fechaAvance": fechaAvance.value,
            "observaciones": observaciones.value,
            "project": project.value            
        }
        const response = await crearAvance({ variables: { avance: nuevoAvance } })
        if (response?.data?.createAvance) {
            alert("Avance Creado")
            his.push("/home")
        } else {
            alert("Se presento un error")
        }
    }

    const CREAR_PROYECTO = gql`
    mutation CreateAvance($avance: AvanceInput) {
        createAvance(avance: $avance)
      }
    
    `

    const [crearAvance] = useMutation(CREAR_PROYECTO)


    return (
    <>
    <div><MenuPrincipal />
 
        
        <form >

            <Container class="container-sd" style={{width: 500+'px'}}>
                <h1>Crear Avance</h1>
                <Form.Group>
                    <Form.Label>ID Avance</Form.Label>
                    <Form.Control input ref={val => idAvance = val} placeholder="ID Avance" />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Descripción del Avance</Form.Label>
                    <Form.Control input ref={val => descripcionAvance = val} placeholder="Descripción del Avance" />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Fecha del Avance</Form.Label>
                    <Form.Control input type="date" data-date-format="mm/dd/yyyy" ref={val => fechaAvance = val} placeholder="Fecha" />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Observaciones</Form.Label>
                    <Form.Control input ref={val => observaciones = val} placeholder="Observaciones" />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Proyecto</Form.Label>
                    <Form.Control input ref={val => project = val} placeholder="Proyecto" />
                </Form.Group>
                
                <div><button className="btn btn-primary" onClick={registroAvance}>Registrar Proyecto</button></div>
            </Container>
        </form>
        
    </div>
    </>)
}

export default CreateAvance