import { Button, Container } from 'react-bootstrap';
import React from 'react'

export const EventosComponente = () => {
    
    const hasDadoClick = (e, nombre) => {
        alert("Has dado click al boton " + nombre);
    }

    function hasDadoDobleClick(e) {
        alert("Has dado doble click");
        console.log(e);
    }

    const hasEntrado = (e) => {
        alert("Has entrado en la zona");
    }

    const hasSalido = (e) => {
        alert("Has salido de la zona");
    }

    const estasDentro = (e) => {
        alert("Estas dentro del input, introduce tu nombre");
    }

  return (
    <div>
    <h1>Eventos en React</h1>
    {/* Evento click */}
    <Button onClick={e => hasDadoClick(e, "Victor")}>Dame click</Button>    
    <Button onDoubleClick={e => hasDadoDobleClick}>Dame doble click</Button>    

    <p>
        <input 
        type="text" 
        onFocus={estasDentro} 
        placeholder="Introduce tu nombre"/>
    </p>
    </div>
  )
}
