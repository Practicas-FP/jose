import React, { useState } from 'react'

export const MiPrimerEstado = () => {
    const [nombre, setNombre] = useState("Victor Robles");
    
    const handleCambiarClick = () => {
        setNombre("Paco");
    };

    const handleEntradaTexto = (e) => {
      setNombre(e.target.value);
      
    }
  return (
    <div>
    <p>{nombre} hola</p>
    
    <p><button onClick={handleCambiarClick}>Cambiar</button></p>
    <p><input type="text" placeholder="Introduce nombre" onChange={handleEntradaTexto}></input></p>
    </div>
  )
}
