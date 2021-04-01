import React from 'react';
import products from '../products.js';
import { Row, Col } from 'react-bootstrap';
import Product from '../components/Product';

const HomeScreen = () => {
    return (
        <>
          <h1>Imperfect Supply List</h1>
          <Row>
            {products.map((product) => (
              <Col xs={6} sm={12} md={4} lg={4} lx={3}>
                <Product product={product} />
              </Col>
            ))}
          </Row>
        </>
      );
};

export default HomeScreen;