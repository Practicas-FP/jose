import React from 'react';
import { Navbar } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { auth, signInWithEmailAndPassword, signInWithGoogle } from "../services/FirebaseAuth";
import { useAuthState } from "react-firebase-hooks/auth";

import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from 'react-router-dom';

export const NavigationBar = () => {
    const [user, loading, error] = useAuthState(auth);
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand>Busqueda de anime</Navbar.Brand>
                <Nav className="me-auto">
                    <Link to="/inicio" className="nav-link">Inicio</Link>
                    <Link to="/about" className="nav-link">Acerca de</Link>
                    {user ? (
                        <>
                        <Link to="/dashboard" className="nav-link">Área de usuario</Link>
                        <Link to="/favoritos" className="nav-link">Favoritos</Link>
                        </>

                    )
                    :
                    (
                        <Link to="/login" className="nav-link">Acceso</Link>
                    )}
                </Nav>
            </Container>
        </Navbar>
    )
}