import React from 'react'
import { Container } from 'react-bootstrap'

export const SegundoComponente = () => {
    const libros = ["Potter", "Juego Tronos", "Clean Code"];

    return (
        <Container>
            <h1>Listado de libros</h1>
            {
                libros.length >= 1
                    ?
                    (<ul>
                        {
                            libros.map((libro, indice) => {
                                return <li key={indice}>Libro {indice}: {libro}</li>
                            })
                        }
                    </ul>)
                    :
                    (<p>No hay libros</p>)
            }
        </Container>
    )
}
