import React, { useState, useEffect } from 'react'

const AjaxComponent = () => {
    const [usuarios, setUsuarios] = useState([]);

    const getUsuariosEstaticos = () => {
        setUsuarios([{
            "id": 1,
            "email": "michael.lawson@reqres.in",
            "first_name": "Michael",
            "last_name": "Lawson",
            "avatar": "https://reqres.in/img/faces/7-image.jpg"
        },
        {
            "id": 1,
            "email": "lindsay.ferguson@reqres.in",
            "first_name": "Lindsay",
            "last_name": "Ferguson",
            "avatar": "https://reqres.in/img/faces/8-image.jpg"
        },
        {
            "id": 3,
            "email": "tobias.funke@reqres.in",
            "first_name": "Tobias",
            "last_name": "Funke",
            "avatar": "https://reqres.in/img/faces/9-image.jpg"
        }]);
    };

    const getUsuariosAjasPms = () => {
        fetch("https://reqres.in/api/users?page=1")
        .then(respuesta => respuesta.json())
        .then(resultadoFinal => {
            setUsuarios(resultadoFinal.data)
        },
        error => {
            console.log(error);
        })
    }

    useEffect(() => {
      getUsuariosAjasPms();
    }, [])
    

    return (
        <div>
            <h2>Listado de usuarios via Ajax</h2>
            <ol>
                {
                    usuarios.map(usuario => {
                        return (
                            <li key={usuario.id}>
                                {usuario.first_name} {usuario.last_name}
                            </li>
                        )
                    })
                }
            </ol>

        </div>
    )
}

export default AjaxComponent