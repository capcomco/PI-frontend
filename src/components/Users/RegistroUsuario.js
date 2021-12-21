import MenuPrincipal from "../Menu";
import Form from 'react-bootstrap/Form'
import { Container } from "react-bootstrap";

import {
    gql, useMutation
} from "@apollo/client";
import React from "react";
import { useHistory } from "react-router";

const RegistroUsuario = () => {
    const his = useHistory();

    let nombre, email, identificacion, clave, perfil, telefono

    const registrarUsuarioNuevo = async (e) => {
        e.preventDefault()
        let nuevoUsuario = {
            "nombre": nombre.value,
            "email": email.value,
            "identificacion": parseInt(identificacion.value),
            "telefono": telefono.value,
            "perfil": perfil.value,
            "clave": clave.value
        }
        const response = await crearUser({ variables: { user: nuevoUsuario } })
        if (response?.data?.createUser) {
            alert("Registro Exitoso, ahora puede loguearse")
            his.push("/")
        } else {
            alert("Se presento un error")
        }
    }

    const CREAR_USUARIO = gql`
    mutation CreateUser($user: UserInput) {
        createUser(user: $user)
    }

    `

const [crearUser] = useMutation(CREAR_USUARIO)

    return (<div><MenuPrincipal/>
        
        <form>
            <Container>
            <h1>Registro de Usuario</h1>
            <Form.Group>
                <Form.Label>Nombre</Form.Label>
                <Form.Control input ref={val => nombre = val} placeholder="Nombre" />
            </Form.Group>
            <Form.Group>
                <Form.Label>Correo Electrónico</Form.Label>
                <Form.Control input ref={val => email = val} placeholder="Correo Electrónico" />
            </Form.Group>
            <Form.Group>
                <Form.Label>Documento de Identidad</Form.Label>
                <Form.Control input ref={val => identificacion = val} placeholder="No de Documento" />
            </Form.Group>
            <Form.Group>
                <Form.Label>Número Telefónico</Form.Label>
                <Form.Control input ref={val => telefono = val} placeholder="No de Teléfono" />
            </Form.Group>
            <Form.Group>
                <Form.Label>Contraseña</Form.Label>
                <Form.Control input type="password" ref={val => clave = val} placeholder="Contraseña" />
            </Form.Group>
            <Form.Group>
                <Form.Label>Perfil</Form.Label>
                <Form.Control input ref={val => perfil = val} placeholder="Escoja el Rol al que se inscribe " />
            </Form.Group>
            <div><button className="btn btn-primary" onClick={registrarUsuarioNuevo}>Registrar Usuario</button></div>
        </Container>
        </form>
        
    </div>)
}

export default RegistroUsuario