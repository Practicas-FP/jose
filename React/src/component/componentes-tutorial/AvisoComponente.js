import React from 'react';
import { useEffect } from 'react';

const AvisoComponente = ({cambiarFecha}) => {

    useEffect(() => {
        //Cuando el componente se monta
        alert("Se ha montado el componente AvisoComponent");
        return () => {
            alert("El componente AvisoComponent se ha desmontado");
        }
    }, [])
    

  return (
    <div style={{borderStyle: "dotted"}}>
        <h1>Hola Jose, como estás</h1>
        <button onClick={cambiarFecha}>Cambiar fecha desde otro componente</button>
    </div>
  )
}

export default AvisoComponente