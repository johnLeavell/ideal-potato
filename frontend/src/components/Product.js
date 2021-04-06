import React from 'react';
import { Container, Card, Image, } from 'react-bootstrap';
import { Link } from 'react-router-dom';




const Product = ({ product }) => {
  
 

  return (
    <Container>
      <Card className="my-1 p-1 rounded">
        <Link to={`/product/${product._id}`}>
          <Image src={product.image} variant="top" thumbnail fluid />
        </Link>
        
        <Card.Body>
          <Card.Title as="h4">
            <strong className='text-primary'>{product.bankName}</strong>
          </Card.Title>
          
          <Card.Text as="div">
            <div className="my-1">Card ID: {product.cardId}</div>
          </Card.Text>

          <Card.Text as="div">
            <div className="my-1">Date Opened: {product.dateOpened}</div>
          </Card.Text>

          <Card.Text as="h5">
            <div className="my-1">Credit Limit: ${product.creditLimit.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</div>
          </Card.Text>

          <Card.Text as="div">
            <div className="my-1">{product.availability} {product.availability > 0 ? 'Available' : 'None Available'}</div>
          </Card.Text>
          
          <Card.Text as='h5'>
            <div className='my-1'>Price: ${product.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
            </div>
          </Card.Text>
        </Card.Body>
      </Card>
    </Container> 
  );
};

export default Product;
