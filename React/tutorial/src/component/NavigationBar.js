import React from 'react';
import { Navbar } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';

import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from 'react-router-dom';

export const NavigationBar = () => {
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand>Busqueda de anime</Navbar.Brand>
                <Nav className="me-auto">
                    <Link to="/inicio" className="nav-link">Inicio</Link>
                    <Link to="/about" className="nav-link">Acerca de</Link>
                    <Link to="/login" className="nav-link">Acceso</Link>
                </Nav>
            </Container>
        </Navbar>
    )
}