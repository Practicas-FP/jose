import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import TarjetaAnime from './TarjetaAnime';

const Favoritos = () => {
    const [items, setItems] = useState({});
    return (
        <Container>
        <h1>Por implementar los favoritos</h1>
            {items.data && (
                <Row xs={1} sm={2} md={4} className="g-4">
                    {items.data.map((item) => (
                        <Col key={item.mal_id}>
                            <TarjetaAnime item={item} />
                        </Col>
                    ))}
                </Row>
            )}
        </Container>





    )


}

export default Favoritos