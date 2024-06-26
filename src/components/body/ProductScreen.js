import React, { useContext, useEffect } from "react";
import { Col, Container, Row, Card, Button } from "react-bootstrap";
import CartContext from "../../store/CartContext/CartContext";
import CartContextApi from "../../store/CartContext/CartContextApi";

const ProductScreen = (props) => {
  const cartCtx = useContext(CartContext);
  const cartApi = useContext(CartContextApi);
  

  useEffect(() => {
    cartApi.fetchData();
  }, []);

  const onClickHandler = (item) => {
    const itemList = {
      id: item.id,
      title: item.title,
      imageUrl: item.imageUrl,
      price: item.price,
      amount: 1,
    };
    cartApi.addProduct(itemList);
    cartCtx.addToCart(itemList);
  };

  return (
    <Container className="mt-3">
      <Row className="g-4">
        {props.data.map((item) => (
          <Col md={3}>
            <Card className="shadow-lg" id={item.id}>
              <Card.Img variant="top" src={item.imageUrl} />
              <Card.Body style={{ backgroundColor: "#EEE9DD" }}>
                <Container>
                  <Card.Title>${item.price}</Card.Title>
                  <Button
                    variant="primary"
                    type="submit"
                    onClick={() => {
                      onClickHandler(item);
                    }}
                  >
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
