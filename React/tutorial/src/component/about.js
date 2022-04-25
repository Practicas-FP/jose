import React from "react";
import logo from './logo.svg';
import './about.css';

function About() {
    return (
        <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Aplicación de formación en Accenture
          </p>
          <p>Desarrollada en React por José Hernández Riquelme</p>
        </header>
      </div>
    
    );
}

export default About;