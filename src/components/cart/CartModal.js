import React, { useContext } from "react";
import { Modal, Button } from "react-bootstrap";
import CartItems from "./CartItems";
import CartContext from "../../store/CartContext/CartContext";

const CartModal = (props) => {
  const cartCtx = useContext(CartContext);
  const orderHandler = () => {
    alert("Thank you for purchase!");
    cartCtx.cartEmpty();
    props.handleClose();
  };
  return (
    <Modal show={props.show} onHide={props.handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Your Cart</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <CartItems />
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={props.handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={orderHandler}>
          Order
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CartModal;
