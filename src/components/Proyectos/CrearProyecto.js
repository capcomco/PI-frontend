import {
    gql, useMutation
} from "@apollo/client";
import React from "react";

const MUTATION_PROYECTO = gql`
mutation CreateProject($nombre: String, $descripcion: String, $objetivosGenerales: String, $objetivosEspecificos: [String], $presupuesto: Int, $fechaInicio: String, $fechaTerminacion: String, $estado: EstadoStatus, $fase: FaseStatus, $lider: ID) {
    createProject( nombre: $nombre, descripcion: $descripcion, objetivosGenerales: $objetivosGenerales, objetivosEspecificos: $objetivosEspecificos, presupuesto: $presupuesto, fechaInicio: $fechaInicio, fechaTerminacion: $fechaTerminacion, estado: $estado, fase: $fase, lider: $lider)
    }
`;

const CreateProject = () => {
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

    return (<div><h1>Crear Proyecto</h1>
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
            <div>
                <label>Nombre Proyecto</label>
                <input ref={nombre => project.nombreProyecto = nombre} placeholder="Nombre" />
            </div>
            <div>
                <label>Objetivos</label>
                <input ref={objetivos => project.objetivos = objetivos} placeholder="Objetivos" />
            </div>
            <div>
                <label>Objetivos Especificos</label>
                <input ref={objetivosEspecificos => project.objetivosEspecificos = objetivosEspecificos} placeholder="Objetivos Especificos" />
            </div>
            <div>
                <label>Lider</label>
                <input ref={lider => project.lider = lider} placeholder="Lider" />
            </div>
            <div>
                <label>Presupuesto</label>
                <input ref={presupuesto => project.presupuesto = presupuesto} placeholder="Presupuesto" />
            </div>
            <div><button className="btn btn-primary" type="submit">Registrar Proyecto</button></div>
        </form>
    </div>)
}

export default CreateProject