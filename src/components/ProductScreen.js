import React from "react";
import { Col, Container, Row, Card, Button } from "react-bootstrap";

const ProductScreen = (props) => {
  return (
    <Container className="mt-3">
      <Row className="g-4">
        {props.data.map((item) => (
          <Col md={3}>
            <Card className="shadow-lg">
              <Card.Img variant="top" src={item.imageUrl} />
              <Card.Body style={{ backgroundColor: "#EEE9DD" }}>
                <Container>
                  <Card.Title>${item.price}</Card.Title>
                  <Button variant="primary" type="submit">
                    Add To Cart
                  </Button>
                </Container>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ProductScreen;
