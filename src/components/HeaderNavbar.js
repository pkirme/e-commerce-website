import React, { useState } from "react";
import { Container, Navbar, Button, Nav } from "react-bootstrap";
import CartModal from "./cart/CartModal";

const HeaderNavbar = () => {
  //Cart Modal State
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Navbar bg="dark" expand="sm" variant="dark">
      <Container>
        <Navbar.Brand>E-Commerce</Navbar.Brand>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#store">Store</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Navbar.Collapse className="justify-content-end">
          <Button type="submit" onClick={handleShow}>
            Cart 0
          </Button>
          <CartModal show={show} handleClose={handleClose} />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default HeaderNavbar;
