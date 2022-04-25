import React from 'react';
import { Container } from 'react-bootstrap';
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
        }
    };

    callBackFunction = (childData) => {
        this.setState({ searchName: childData });
    }

    componentDidMount() {
        this.hacerBusqueda('');
    }

    hacerBusqueda() {
        fetch(
            "https://api.jikan.moe/v4/anime?q=" + this.state.searchName + "&status=&type=&limit=10&sfw&order_by=score&sort=desc")
            .then((res) => res.json())
            .then((json) => {
                this.setState({
                    items: json,
                    DataisLoaded: true
                });
            })
    }

    buscarAnimes(searchName) {
        this.setState({ searchName: searchName })
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
                </Form>
                <Row xs={1} sm={2} md={4} className="g-4">
                    {items.data.map((item) => (
                        <Col key={item.mal_id}>
                            <Card>
                                <Card.Img variant="top" src={item.images.jpg.image_url} />
                                <Card.Body>
                                    <Card.Title>{item.title}</Card.Title>
                                    <Card.Text>
                                        {item.synopsis.slice(0, 90) + '...'}
                                    </Card.Text>
                                    <Link to={`/anime/${item.mal_id}/`}>Detalles</Link>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        )

    }
}

export default Home;