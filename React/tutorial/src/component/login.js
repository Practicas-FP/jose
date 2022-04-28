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
import AjaxComponent from './componentes-tutorial/AjaxComponent';
import { Ejercicio1 } from './componentes-tutorial/Ejercicio1';
import { EventosComponente } from './componentes-tutorial/EventosComponente';
import { MiPrimerEstado } from './componentes-tutorial/MiPrimerEstado';
import { PruebasComponent } from './componentes-tutorial/PruebasComponent';
import { SegundoComponente } from './componentes-tutorial/SegundoComponente';
import { TercerComponente } from './componentes-tutorial/TercerComponente';

const Login = () => {
    return (
        <Container>
        <hr/>
        <PruebasComponent />
        <hr />
        <AjaxComponent />
        <hr/>
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