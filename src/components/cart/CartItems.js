import React from "react";
import { Button, Card } from "react-bootstrap";

const CartItems = () => {
  const cartElements = [
    {
      title: "Colors",
      price: 100,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
      quantity: 2,
    },
    {
      title: "Black and white Colors",
      price: 50,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
      quantity: 3,
    },
    {
      title: "Yellow and Black Colors",
      price: 70,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
      quantity: 1,
    },
  ];
  return (
    <>
      {cartElements.map((item) => (
        <Card key={item.id} className="mb-3" style={{ maxWidth: "100px" }}>
          <div className="d-flex align-items-center ">
            <Card.Img variant="top" src={item.imageUrl} alt={item.title} />
            <div className="flex-grow-1">
              <Card.Title>{item.title}</Card.Title>
            </div>
            <div className="flex-grow-1">
              <Card.Text>Price: ${item.price}</Card.Text>
            </div>
            <div className="flex-grow-1">
              <Button variant="danger" className="me-2">
                Remove
              </Button>
            </div>
            <div className="flex-grow-1">
              <Button variant="success">Add</Button>
            </div>
          </div>
        </Card>
      ))}
    </>
  );
};

export default CartItems;
