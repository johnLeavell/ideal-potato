import React from 'react';
import { Container, Card, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Product = ({ product }) => {
  console.log(product);
  return (
    <Container>
      <Card className="my-1 p-1 rounded">

        <Link to={`/product/${product._id}`}>
          <Image src={product.image} variant="top" thumbnail fluid />
        </Link>

        <Card.Body>
          <Link to={`/product/${product._id}`}>
          <Card.Title as="h4">
            <strong className='text-primary'>{product.bankName}</strong>
          </Card.Title>
          </Link>
          
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

        </Card.Body>
      </Card>
    </Container>
 
  );
};

export default Product;





{/* <Table responsive='sm'>
<thead>
 <tr>
   <th>bank name</th>
   <th>card id</th>
   <th>Date opened</th>
   <th>Credit Limit</th>
   <th>Cards Available</th>
 </tr>
</thead>
<tbody>
  <tr>
    <td>{product.bankName}</td>
    <td>{product.cardId}</td>
    <td>{product.dateOpened}</td>
    <td>{product.creditLimit}</td>
    <td>{product.availability > 0 ? 'Available' : 'None Available'}</td>
  </tr>
</tbody>
</Table> */}