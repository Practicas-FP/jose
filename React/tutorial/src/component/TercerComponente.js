import React from 'react';
import PropTypes from 'prop-types'; // ES6


export const TercerComponente = ({nombre, apellido, ficha_medica}) => {

    

  return (
    <div>
        <h1>Comunicación entre componentes</h1>
        <ul>
            <li>
            {nombre}
            </li>
            <li>
            {apellido}
            </li>
            {ficha_medica ? <li>{JSON.stringify(ficha_medica)}</li> : <li>No hay datos</li>}
        </ul>

    </div>
  )
}

TercerComponente.propTypes = {
    nombre: PropTypes.string.isRequired,
    apellido: PropTypes.string,
    ficha_medica: PropTypes.object,
}

TercerComponente.defaultProps = {
    nombre: "Jose",
    apellido: "Hernandez"
}

