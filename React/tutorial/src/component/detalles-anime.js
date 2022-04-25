import React, { useState } from "react";
import { useEffect } from "react";
import "./detalles-anime.css";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
    useParams
} from 'react-router-dom';


function DetallesAnime() {
    const { id } = useParams();
    const [entrada, setEntrada] = useState();
    const [episodios, setEpisodios] = useState();


    useEffect(() => {
        // Actualiza el título del documento usando la API del navegador
        fetch(
            "https://api.jikan.moe/v4/anime/" + id)
            .then((res) => res.json())
            .then((json) => {
                setEntrada(json);
            })
        fetch(('https://api.jikan.moe/v4/anime/' + id +'/episodes'))
        .then((res) => res.json())
        .then((json) => {
            setEpisodios(json);
        })
    });    
    //('https://api.jikan.moe/v4/anime/' + id)




    if (!entrada || !episodios) return <div>
    <h1> Pleses wait some time.... </h1> </div>;

    return (
        <div className="grid-container">
            <div className="item1">
                <img src={entrada.data.images.jpg.large_image_url} />
                <h3>{entrada.data.title}</h3>

                <h4>Títulos alternativos <hr/> </h4>
                <p>Título original: {entrada.data.title} ({entrada.data.title_japanese})  </p>
                <p>Título en inglés: {entrada.data.title_english}</p>
                <h4>Información <hr/></h4>
                <p>Tipo: {entrada.data.type}</p>
                <p>Fuente: {entrada.data.source}</p>
                <p>Número de episodios: {entrada.data.episodes}</p>
                <p>Fecha de emisión: {entrada.data.aired.string}</p>
                <p>Puntuación: {entrada.data.score}</p>
                <p>Temporada: {entrada.data.season} {entrada.data.year}</p>
                <p>Estudio de animación: {entrada.data.studios[0].name}</p>
                <p>Género:     </p >
            </div >
            <div className="item2">
                <h2>Sinopsis<hr /></h2>
                <p>{entrada.data.synopsis}</p>
            </div>
            <div className="item3">
                <h2>Lista de episodios<hr /></h2>
                <table>
                    <tr>
                        <th>Número</th>
                        <th>Título</th>
                        <th>Fecha de emisión</th>
                    </tr>
                    <tr >
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                </table>
            </div >
        </div >
    );
}

export default DetallesAnime;