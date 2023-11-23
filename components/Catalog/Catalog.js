import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import img from '../../Image/card1.png'; 
import './Catalog.css'; 

function Catalog() {
  const products = [
    { id: 1, image: img, title: "Горшок", price: "5900 Р" },
    { id: 2, image: img, title: "Горшок", price: "5900 Р" },
    
  ];

  return (
    <Container className="catalog-container my-5">
      <Row>
        <Col xs={12} className="text-center mb-4">
          <h2>Каталог товаров</h2>
        </Col>
      </Row>
      <Row className="justify-content-center">
        {products.map(product => (
          <Col xs={12} sm={6} md={4} lg={3} key={product.id} className="mb-4 d-flex align-items-stretch">
            <Card className="product-card">
              <Card.Img variant="top" src={product.image} />
              <Card.Body className="d-flex flex-column">
                <Card.Title>{product.title}</Card.Title>
                <Card.Text className="mt-auto">
                  {product.price}
                </Card.Text>
                <Button variant="success" className="mt-auto">Купить</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      <Row>
        <Col className="text-center">
          <Button variant="outline" className="mt-3">Больше -></Button>
        </Col>
      </Row>
    </Container>
  );
}

export default Catalog;



