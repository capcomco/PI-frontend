import MenuPrincipal from "../Menu";
import Form from 'react-bootstrap/Form'
import { Container } from "react-bootstrap";

import {
    gql, useMutation
} from "@apollo/client";
import React from "react";

const MUTATION_PROYECTO = gql`
mutation CreateProject($nombre: String, $descripcion: String, $objetivosGenerales: String, $objetivosEspecificos: [String], $presupuesto: Int, $fechaInicio: String, $fechaTerminacion: String, $estado: EstadoStatus, $fase: FaseStatus, $lider: ID) {
    createProject( nombre: $nombre, descripcion: $descripcion, objetivosGenerales: $objetivosGenerales, objetivosEspecificos: $objetivosEspecificos, presupuesto: $presupuesto, fechaInicio: $fechaInicio, fechaTerminacion: $fechaTerminacion, estado: $estado, fase: $fase, lider: $lider)
    }
`;

const CreateUsuario = () => {
    const [creadorDeProyecto] = useMutation(MUTATION_PROYECTO)
    let project = {
        nombre: "",
        descripcion:"",
        objetivosGenerales: "",
        objetivosEspecificos:"",
        presupuesto: 0,
        fechaInicio: "",
        fechaTerminacion: "",
        estado:"",
        fase:"",
        lider: "",
        
    }

    return (<div><MenuPrincipal/>
        
        <form onSubmit={e => {
            e.preventDefault();
            creadorDeProyecto({variables:{
                //identificador: project.identificador.value,
                nombre: project.nombre.value,
                descripcion:project.descripcion.value,
                objetivosGenerales: project.objetivosGenerales.value,
                objetivosEspecificos: project.objetivosEspecificos.value,
                fechaInicio:project.fechaInicio.value,
                fechaTerminacion:project.fechaTerminacion.value,
                estado:project.estado.value,
                fase:project.fase.value,
                presupuesto: parseInt(project.presupuesto.value),
                lider: project.lider.value
            }})
        }} >
            <Container>
            <h1>Registro de Usuario</h1>
            <Form.Group>
                <Form.Label>Correo Electrónico</Form.Label>
                <Form.Control input ref={nombre => project.nombreProyecto = nombre} placeholder="Email" />
            </Form.Group>
            <Form.Group>
                <Form.Label>Identificación</Form.Label>
                <Form.Control input ref={objetivos => project.objetivos = objetivos} placeholder="Identificación" />
            </Form.Group>
            <Form.Group>
                <Form.Label>Nombre Completo</Form.Label>
                <Form.Control input ref={objetivosEspecificos => project.objetivosEspecificos = objetivosEspecificos} placeholder="Nombre Completo" />
            </Form.Group>
            <Form.Group>
                <Form.Label>Contraseña</Form.Label>
                <Form.Control input type="password" ref={lider => project.lider = lider} placeholder="Contraseña" />
            </Form.Group>
            <Form.Group>
                <Form.Label>Perfil</Form.Label>
                <Form.Control input ref={presupuesto => project.presupuesto = presupuesto} placeholder="Estudiante-Lider o Administrador" />
            </Form.Group>
            <div><button className="btn btn-primary" type="submit">Registrar Usuario</button></div>
        </Container>
        </form>
        
    </div>)
}

export default CreateUsuario