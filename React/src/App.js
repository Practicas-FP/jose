import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import Home from './component/home';
import About from './component/about';
import DetallesAnime from './component/detalles-anime';
import Contact from './component/contact';
import Login from './component/login';
import Reset from "./component/Reset"
import { NavigationBar } from './component/NavigationBar';

import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
  } from 'react-router-dom';
import Inicio from './component/Inicio';
import Dashboard from './component/Dashboard';
import Register from './component/Register';
import Favoritos from './component/Favoritos';

export const App = () => {
    return (
        <Container>
            <Router>
                <NavigationBar />
                <Routes>
                <Route exact path='/' element={< Inicio />}></Route>
                    <Route exact path='/inicio' element={< Inicio />}></Route>
                    <Route exact path='/about' element={< About />}></Route>
                    <Route exact path='/contact' element={< Contact />}></Route>
                    <Route exact path='/anime/:id' element={< DetallesAnime />}></Route>
                    <Route exact path='/login' element={< Login />}></Route>
                    <Route exact path='/dashboard' element={< Dashboard />}></Route>
                    <Route exact path='/reset' element={< Reset />}></Route>
                    <Route exact path='/register' element={< Register />}></Route>
                    <Route exact path='/favoritos' element={< Favoritos />}></Route>
                    
                </Routes>
            </Router>
        </Container>
    );
}
