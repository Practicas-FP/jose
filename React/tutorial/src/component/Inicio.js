import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { FormControl } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { FormSelect } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Pagination } from 'react-bootstrap';
import TarjetaAnime from './TarjetaAnime';

const Inicio = () => {

    const [items, setItems] = useState([]);
    const [DataisLoaded, setDataisLoaded] = useState(false);
    const [searchName, setSearchName] = useState("");
    const [lastPage, setLastPage] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [status, setStatus] = useState("");
    const [type, setType] = useState("");

    useEffect(() => {
        hacerBusqueda("");
        console.log(currentPage);
    }, [])


    const hacerBusqueda = () => {
        fetch(
            "https://api.jikan.moe/v4/anime?q=" + searchName + "&page=" + currentPage + "&status=" + status + "&type=" + type + "&limit=8&sfw&order_by=score&sort=desc")
            .then((res) => res.json())
            .then((json) => {
                setItems(json);
                setDataisLoaded(true);
                setLastPage(json.pagination.last_visible_page);
            })
    }

    const buscarAnimes = (searchName) => {
        setSearchName(searchName);
    }

    const handleStatusSelectChange = (event) => {
        setStatus(event.target.value);
    }

    const handleTypeSelectChange = (event) => {
        setType(event.target.value);
    }

    const avanzarPagina = () => {
        if (items.pagination.current_page < lastPage) {
            setCurrentPage(currentPage + 1);
            hacerBusqueda();
            console.log(currentPage);
        }
    }

    const retrocederPagina = () => {
        if (currentPage > 0) {
            setCurrentPage(currentPage - 1);
            hacerBusqueda();
        }
    }

    const avanzarUltimaPagina = () => {
        setCurrentPage(lastPage);
        hacerBusqueda();
    }

    const retrocederPrimeraPagina = () => {
        setCurrentPage(1);
        hacerBusqueda();
    }

    const getInputValue = (event) => {
        console.log(event.target.value)
        setSearchName(event.target.value);

    }
    return (
        <Container>

            <div className="d-flex" onSubmit={hacerBusqueda}>
                <FormControl
                    type="search"
                    placeholder="Buscar..."
                    className="me-2"
                    aria-label="Search"
                    onChange={getInputValue}

                />
                <Button variant="outline-success" onClick={hacerBusqueda}>Buscar</Button>
                <FormSelect onChange={handleStatusSelectChange}>
                    <option>Estado de emisión</option>
                    <option value="">Cualquiera</option>
                    <option value="airing">En emision</option>
                    <option value="complete">Emitido</option>
                    <option value="upcoming">Por emitir</option>
                </FormSelect>
                <FormSelect value={type} onChange={handleTypeSelectChange}>
                    <option>Filtrar por tipo</option>
                    <option>Cualquiera</option>
                    <option value="tv">TV</option>
                    <option value="movie">Película</option>
                    <option value="ova">OVA</option>
                    <option value="special">Special</option>
                </FormSelect>
            </div>
            {items.data && (
                <Row xs={1} sm={2} md={4} className="g-4">
                    {items.data.map((item) => (
                        <Col key={item.mal_id}>
                            <TarjetaAnime item={item} />
                        </Col>
                    ))}
                </Row>
            )}

            <Container>
                {items.pagination && (
                    <Pagination>
                        <Pagination.First onClick={retrocederPrimeraPagina} />
                        <Pagination.Prev onClick={retrocederPagina} />

                        <Pagination.Item active>{items.pagination.current_page}</Pagination.Item>


                        <Pagination.Next onClick={avanzarPagina} />
                        <Pagination.Last onClick={avanzarUltimaPagina} />
                    </Pagination>
                )}

            </Container>

        </Container>
    )
}

export default Inicio