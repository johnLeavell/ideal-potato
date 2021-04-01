import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Image, ListGroup, Card, Button } from 'react-bootstrap';
import products from '../products.js';


const ProductScreen = ({ match }) => {
    const product = products.find(product => product._id === match.params.id)
    return (
       <>
        <Link className='btn btn-light my-3' to='/'>
            Go Back
        </Link>
        <Row>
            <Col md={6}>
                <Image src={product.image} alt={product.bankName} fluid/>
            </Col>

            <Col md={3}>
                <ListGroup variant='flush'>
                    <ListGroup.Item>
                        <h3>{product.bankName}</h3>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        
                    </ListGroup.Item>
                </ListGroup>
            </Col>
        </Row>
       </>
    )
}

export default ProductScreen