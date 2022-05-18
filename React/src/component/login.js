import { render } from '@testing-library/react';
import React, { useState, useEffect } from 'react';
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
    useParams,
    useNavigate
} from 'react-router-dom';
import AjaxComponent from './componentes-tutorial/AjaxComponent';
import { Ejercicio1 } from './componentes-tutorial/Ejercicio1';
import { EventosComponente } from './componentes-tutorial/EventosComponente';
import { MiPrimerEstado } from './componentes-tutorial/MiPrimerEstado';
import { PruebasComponent } from './componentes-tutorial/PruebasComponent';
import { SegundoComponente } from './componentes-tutorial/SegundoComponente';
import { TercerComponente } from './componentes-tutorial/TercerComponente';
import { auth, signInWithEmailAndPassword, signInWithGoogle } from "../services/FirebaseAuth";
import { useAuthState } from "react-firebase-hooks/auth";
import "./Login.css";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [user, loading, error] = useAuthState(auth);
    const navigate = useNavigate();
    useEffect(() => {
        if (loading) {
            // maybe trigger a loading screen
            return;
        }
        if (user) navigate("/dashboard");
    }, [user, loading]);
    return (
        <div className="login">
            <div className="login__container">
                <input
                    type="text"
                    className="login__textBox"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Correo electrónico"
                />
                <input
                    type="password"
                    className="login__textBox"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Contraseña"
                />
                <button
                    className="login__btn"
                    onClick={() => signInWithEmailAndPassword(email, password)}
                >
                    Iniciar sesión
                </button>
                <button className="login__btn login__google" onClick={signInWithGoogle}>
                    Iniciar sesión con google
                </button>
                <div>
                    <Link to="/reset">Olvidé mi contraseña</Link>
                </div>
                <div>
                    ¿No tienes cuenta? <Link to="/register">Registrate</Link> ahora.
                </div>
            </div>
        </div>
    );

}

export default Login;