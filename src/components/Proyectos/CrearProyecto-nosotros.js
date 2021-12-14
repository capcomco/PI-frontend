import MenuPrincipal from "../Menu";
import Form from 'react-bootstrap/Form'

import {
    gql, useMutation
} from "@apollo/client";
import React from "react";
import { Container } from "react-bulma-components";

const MUTATION_PROYECTO = gql`
    mutation createProject($identificador:String,
        $nombre:String, 
        $descripcion: String, 
        $objetivosGenerales:String,
        $objetivosEspecificos[String],
        $presupuesto: Int,
        $fechaInicio: String,
        $fechaTerminacion: String,
        $estado: EstadoStatus,
        $fase:FaseStatus,
        lider: ID){
        createProject(project:{identificador:$identificador, 
            nombre:$nombre,
            descripcion:$descripcion,
            objetivosGenerales:$objetivosGenerales,
            objetivosEspecificos:$objetivosEspecificos,
            presupuesto:$presupuesto,
            fechaInicio:$fechaInicio,
            fechaTerminacion:$fechaTerminacion,
            estado:$estado,
            fase:$fase,
            lider:$lider})
    }
`;

const CrearProyecto = () => {
    const [creadorDeProyecto] = useMutation(MUTATION_PROYECTO)
    let project = {
            identificador:"", 
            nombre:"",
            descripcion:"",
            objetivosGenerales:"",
            objetivosEspecificos:[],
            presupuesto:0,
            fechaInicio:"",
            fechaTerminacion:"",
            estado:"",
            fase:"",
            lider:"",
    }

    return (<div>
        <MenuPrincipal/>
        <Container>
        <h1>Crear Proyecto</h1>
        <Form onSubmit={e => {
            e.preventDefault();
            creadorDeProyecto({variables:{
                objGe: project.objetivos.value,
                presupuesto: parseInt(project.presupuesto.value),
                nombreProyecto: project.nombreProyecto.value,
                lider: project.lider.value
            }})
        }} >
            <Form.Group>
                <Form.Label>Nombre Proyecto</Form.Label>
                <Form.Control type="text" input ref={nombre => project.nombreProyecto = nombre} placeholder="Nombre" />
            </Form.Group>
            <Form.Group>
                <Form.Label>Objetivos</Form.Label>
                <Form.Control type="text" input ref={objetivos => project.objetivos = objetivos} placeholder="Objetivos" />
            </Form.Group>
            <Form.Group>
                <Form.Label>Lider</Form.Label>
                <Form.Control type="text" input ref={lider => project.lider = lider} placeholder="Lider" />
            </Form.Group>
            <Form.Group>
                <Form.Label>Presupuesto</Form.Label>
                <Form.Control type="number" input ref={presupuesto => project.presupuesto = presupuesto} placeholder="Presupuesto" />
            </Form.Group>
            <div><button className="btn btn-primary" type="submit">Registrar Proyecto</button></div>
        </Form>
        </Container>
    </div>)
}

export default CrearProyecto