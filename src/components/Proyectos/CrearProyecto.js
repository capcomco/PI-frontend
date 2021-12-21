import MenuPrincipal from "../Menu";
import Form from 'react-bootstrap/Form'
import { Container } from "react-bootstrap";

import {
    gql, useMutation
} from "@apollo/client";
import React from "react";
import { useHistory } from "react-router";

const CreateProyecto = () => {
    const his = useHistory();

    let identificador, nombreProyecto, descripcion, objetivosGenerales, objetivosEspecificos, presupuesto, lider, fechaInicio, fechaTerminacion, fase, estado

    const registroProyecto = async (e) => {
        e.preventDefault()
        let nuevoProyecto = {
            "identificador": identificador.value,
            "nombreProyecto": nombreProyecto.value,
            "descripcion": descripcion.value,
            "objetivosGenerales": objetivosGenerales.value,
            "objetivosEspecificos": objetivosEspecificos.value,
            "presupuesto": parseInt(presupuesto.value),
            "fechaInicio": fechaInicio.value,
            "fechaTerminacion": fechaTerminacion.value,
            "estado": estado.value,
            "fase": fase.value,
            "lider": lider.value
        }
        const response = await crearProject({ variables: { project: nuevoProyecto } })
        if (response?.data?.createProject) {
            alert("Proyecto Creado")
            his.push("/home")
        } else {
            alert("Se presento un error")
        }
    }

    const CREAR_PROYECTO = gql`
    mutation CreateProject($project: ProjectInput) {
        createProject(project: $project)
      }
    
    `

    const [crearProject] = useMutation(CREAR_PROYECTO)


    return (<div><MenuPrincipal />

        <form >

            <Container>
                <h1>Crear Proyecto</h1>
                <Form.Group>
                    <Form.Label>Nombre Proyecto</Form.Label>
                    <Form.Control input ref={val => nombreProyecto = val} placeholder="Nombre Proyecto" />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Identificador</Form.Label>
                    <Form.Control input ref={val => identificador = val} placeholder="Identificador" />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Descripcion</Form.Label>
                    <Form.Control input ref={val => descripcion = val} placeholder="Descripción" />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Objetivos Generales</Form.Label>
                    <Form.Control input ref={val => objetivosGenerales = val} placeholder="Objetivos Generales" />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Objetivos Específicos</Form.Label>
                    <Form.Control input ref={val => objetivosEspecificos = val} placeholder="Objetivos Especificos" />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Lider</Form.Label>
                    <Form.Control input ref={val => lider = val} placeholder="Lider" />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Fecha Inicio</Form.Label>
                    <Form.Control input ref={val => fechaInicio = val} placeholder="fecha de inicio" />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Fecha Terminación</Form.Label>
                    <Form.Control input ref={val => fechaTerminacion = val} placeholder="fecha de terminación" />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Presupuesto</Form.Label>
                    <Form.Control input ref={val => presupuesto = val} placeholder="Presupuesto" />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Fase</Form.Label>
                    <Form.Select class="form-control" id="sel1" ref={val => fase = val} >
                        <option value="Iniciado">Iniciado</option>
                        <option value="Desarrollo">Desarrollo</option>
                        <option value="Terminado">Terminado</option>                        
                    </Form.Select>
                    {/* <Form.Control selec ref={val => fase = val} placeholder="Fase" /> */}
                </Form.Group>
                <Form.Group>
                    <Form.Label>Estado</Form.Label>
                    <Form.Control input ref={val => estado = val} placeholder="Estado" />
                </Form.Group>
                <div><button className="btn btn-primary" onClick={registroProyecto}>Registrar Proyecto</button></div>
            </Container>
        </form>
    </div>)
}

export default CreateProyecto