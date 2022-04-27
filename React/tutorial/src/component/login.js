import { render } from '@testing-library/react';
import React from 'react';
import { Container, FormSelect } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { Navbar } from 'react-bootstrap';
import { NavDropdown } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import { FormControl } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { Card } from 'react-bootstrap';
import { CardGroup } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Pagination } from 'react-bootstrap';

import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
    useParams
} from 'react-router-dom';
import { EventosComponente } from './EventosComponente';
import { SegundoComponente } from './SegundoComponente';
import { TercerComponente } from './TercerComponente';

const Login = () => {

    let numerito = 1;
    let usuario = {
        nombre: "Jose",
        apellidos: "Hernandez",
        web: "josesito.com"
    };

    const ficha_medica = {
        altura: "187cm",
        grupo: "O",
        estado: "bueno", 
        alergias: "bueno"
    };
    return (
        <Container>
        <p>Nombre: {usuario.nombre + " " + usuario.apellidos}</p>
        <p>Web: {usuario.apellidos}</p>
        <hr/>
        <SegundoComponente />
        <hr/>
        <TercerComponente 
        ficha_medica={ficha_medica} 
        nombre="Paco" 
        apellido="Gomez" />
        <hr />
        <EventosComponente />
        <hr />
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>

        </Container>
    );
}

export default Login;