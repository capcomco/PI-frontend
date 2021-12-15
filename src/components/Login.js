import { useMutation } from "@apollo/client"
import gql from "graphql-tag"
import { useState } from "react";
import { useHistory } from "react-router";
import 'bulma/css/bulma.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Col, Container, Form, Row} from "react-bootstrap";



const Login = () => {
    const his = useHistory();
    let user;
    const [pass, setPass] = useState("")
    const AUTENTICAR_USUARIO = gql`
        mutation autenticar($usuario:String,$clave:String){
            autenticar(usuario:$usuario,clave:$clave){
                status
                jwt
            }
        }
    `
    const changeClave = (e) => {
        e.preventDefault();
        setPass(e.target.value)
    }
    const [auth] = useMutation(AUTENTICAR_USUARIO)
    const autenticar = async (e) => {
        e.preventDefault();

        const { data: { autenticar } } = await auth({
            variables: {
                usuario: user.value,
                clave: pass
            }
        })
        if (autenticar.status != 200) {
            alert("Usuario y/o contrasena invalida")
        } else {
            localStorage.setItem('auth_token', autenticar.jwt)
            his.push("/menu")
        }
    }

    return <div>
            <Container>
                <h1 className="shadow-sm text-success mt-3 p-1 text-center rounded">Login</h1>
                <Row className="mt-5">
                    <Col lg={5} md={6} sm={12} className="p-5 m-auto shadow-sm rounded-lg">
                        <Form>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Correo Electrónico</Form.Label>
                                <Form.Control type="email" placeholder="Su Email" id="username" ref={u => user = u} />
                            </Form.Group>

                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>Contraseña</Form.Label>
                                <Form.Control type="password" placeholder="Escriba su Clave" id="password" value={pass} onChange={changeClave} />
                            </Form.Group>

                            <Button href="/home"  variant="success btn-block mt-3" type="submit">
                                Login
                            </Button>
                            <Button href="/registrousuario"  variant="secondary btn-block mt-3" type="submit">
                                Registrarse
                            </Button>
                            {/* {autenticar} */}
                        </Form>
                    </Col>
                </Row>
                <h6 className="mt-5 p-5 text-center text-secondary ">Wow-Software-Group © 2021.</h6>
            </Container>              
    </div>
}

export default Login