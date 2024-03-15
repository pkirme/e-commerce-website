import React from "react";
import { Modal, Button } from "react-bootstrap";
import CartItems from "./CartItems";

const CartModal = (props) => {
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
        <Button variant="primary" onClick={props.handleClose}>
          Order
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CartModal;
