import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const TarjetaAnime = ({ item }) => {
    return (
        <>
            {item && (
                <Card>
                    <Card.Img variant="top" src={item.images.jpg.image_url} />
                    <Card.Body>
                        <Card.Title>{item.title}</Card.Title>
                        <Link to={`/anime/${item.mal_id}/`}>Detalles</Link>
                    </Card.Body>
                </Card>
            )}
        </>

    )
}

export default TarjetaAnime