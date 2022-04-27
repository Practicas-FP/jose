import React from 'react';
import { Container, FormSelect } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { Navbar } from 'react-bootstrap';
import { NavDropdown } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import { FormControl } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { Card } from 'react-bootstrap';
import { CardGroup } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Pagination } from 'react-bootstrap';

import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
    useParams
} from 'react-router-dom';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            DataisLoaded: false,
            searchName: '',
            lastPage: null,
            currentPage: 1,
            status: '',
            type: '',
        }
    };

    callBackFunction = (childData) => {
        this.setState({ searchName: childData });
    }

    componentDidMount() {
        this.hacerBusqueda('');
        console.log(this.state.currentPage);
    }

    hacerBusqueda() {
        fetch(
            "https://api.jikan.moe/v4/anime?q=" + this.state.searchName + "&page=" + this.state.currentPage + "&status=" + this.state.status + "&type=" + this.state.type + "&limit=8&sfw&order_by=score&sort=desc")
            .then((res) => res.json())
            .then((json) => {
                this.setState({
                    items: json,
                    DataisLoaded: true,
                    lastPage: json.pagination.last_visible_page,
                });
            })
    }

    buscarAnimes(searchName) {
        this.setState({ searchName: searchName })
    }

    handleStatusSelectChange = (event) => {
        this.setState({status: event.target.value});
    }

    handleTypeSelectChange = (event) => {
        this.setState({type: event.target.value});
    }

    avanzarPagina = () => {
        if (this.state.items.pagination.current_page < this.state.lastPage) {
            this.setState({ currentPage: (this.state.currentPage + 1) });
            this.hacerBusqueda();
            console.log(this.state.currentPage);
        }
    }

    retrocederPagina = () => {
        if (this.state.currentPage > 0) {
            this.setState({ currentPage: this.state.currentPage - 1 });
            this.hacerBusqueda();
        }
    }

    avanzarUltimaPagina = () => {
        this.setState({ currentPage: this.state.lastPage });
        this.hacerBusqueda();
    }

    retrocederPrimeraPagina = () => {
        this.setState({ currentPage: 1 });
        this.hacerBusqueda();
    }

    getInputValue = (event) => {
        // do cool stuff here!
        console.log(event.target.value)
        this.setState({ searchName: event.target.value });
    };
    render() {
        const { DataisLoaded, items } = this.state;
        if (!DataisLoaded) return <div>
            <h1> Pleses wait some time.... </h1> </div>;
        return (
            <Container>

                <Form className="d-flex">
                    <FormControl
                        type="search"
                        placeholder="Buscar..."
                        className="me-2"
                        aria-label="Search"
                        onChange={this.getInputValue}

                    />
                    <Button variant="outline-success" onClick={() => this.hacerBusqueda()}>Buscar</Button>
                    <FormSelect value={this.state.value} onChange={this.handleStatusSelectChange}>
                        <option>Estado de emisión</option>
                        <option value="">Cualquiera</option>
                        <option value="airing">En emision</option>
                        <option value="complete">Emitido</option>
                        <option value="upcoming">Por emitir</option>
                    </FormSelect>
                    <FormSelect value={this.state.type} onChange={this.handleTypeSelectChange}>
                        <option>Filtrar por tipo</option>
                        <option>Cualquiera</option>
                        <option value="tv">TV</option>
                        <option value="movie">Película</option>
                        <option value="ova">OVA</option>
                        <option value="special">Special</option>
                    </FormSelect>
                </Form>
                <Row xs={1} sm={2} md={4} className="g-4">
                    {items.data.map((item) => (
                        <Col key={item.mal_id}>
                            <Card>
                                <Card.Img variant="top" src={item.images.jpg.image_url} />
                                <Card.Body>
                                    <Card.Title>{item.title}</Card.Title>
                                    <Link to={`/anime/${item.mal_id}/`}>Detalles</Link>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
                <Container>
                    <Pagination>
                        <Pagination.First onClick={this.retrocederPrimeraPagina} />
                        <Pagination.Prev onClick={this.retrocederPagina} />

                        <Pagination.Item active>{items.pagination.current_page}</Pagination.Item>

                        <Pagination.Next onClick={this.avanzarPagina} />
                        <Pagination.Last onClick={this.avanzarUltimaPagina} />
                    </Pagination>
                </Container>

            </Container>
        )

    }
}

export default Home;