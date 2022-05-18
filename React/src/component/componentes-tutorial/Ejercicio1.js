import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';


export const Ejercicio1 = ({ añoActual }) => {
    const [año, setAño] = useState(añoActual)

    const handleAñoAnterior = () => {
        setAño(año - 1)
    };

    const handleAñoSiguiente = () => {
        setAño(año + 1)
    };

    const handleInputAño = (event) => {
        let numero = event.target.value;
        if (!Number.isNaN(parseInt(numero))) {
            setAño(event.target.value);
        }
        else {
            setAño(añoActual);
        }

    }

    const cambiarYear = e => {
        let dato = parseInt(e.target.value);
        if (Number.isInteger(dato)) {
            setAño(dato);
        } else {
            setAño(añoActual);
        }
    }

    return (
        <div>
            <p>{año}</p>
            <p>
                <button onClick={handleAñoAnterior}>Año anterior</button>
                <button onClick={handleAñoSiguiente}>Año siguiente</button>
                <input type="text" onChange={cambiarYear} />
            </p>
        </div>
    )
}

Ejercicio1.propTypes = {
    añoActual: PropTypes.number.isRequired,
}

