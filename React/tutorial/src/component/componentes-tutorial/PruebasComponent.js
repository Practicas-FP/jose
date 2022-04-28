import React, { useEffect, useState } from 'react'
import AvisoComponente from './AvisoComponente';

export const PruebasComponent = () => {

    const [usuario, setUsuario] = useState("Victor Robles");
    const [fecha, setFecha] = useState("01-01-1998");
    const [contador, setContador] = useState(0);
    
    const modUsuario = (event) => {
        setUsuario(event.target.value);
        setContador(contador + 1);
    }

    const cambiarFecha = e => {
        setFecha(Date.now);
    }
    useEffect(() => {
        console.log("cargaste el componente");
    }, [])
    

  return (
    <div>
        <h1>El efecto - Hook useEffect</h1>
        <p><strong>{usuario}</strong></p>
        <p><strong>{fecha}</strong></p>
        <p>Contador: {contador}</p>
        {usuario === "jose" && <AvisoComponente cambiarFecha={cambiarFecha} />}
        <p>
            <input type="text" onChange={modUsuario} />
            <button onClick={cambiarFecha}>Cambiar fecha</button>
        </p>
    </div>
  )
}
