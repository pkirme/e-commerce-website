import React, { useContext, useState } from "react";
import { Container, Navbar, Button, Nav } from "react-bootstrap";
import CartModal from "../components/cart/CartModal";
import CartContext from "../store/CartContext/CartContext";
import CartIcon from "../components/cart/CartIcon";

const HeaderNavbar = () => {
  const cartCtx = useContext(CartContext);

  const numberOfCartItems = cartCtx.itemList.reduce((num, item) => {
    return num + item.amount;
  }, 0);

  //Cart Modal State
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Navbar
      bg="dark"
      expand="sm"
      variant="dark"
      className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top"
    >
      <Container>
        <Navbar.Brand>E-Commerce</Navbar.Brand>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/Home">Home</Nav.Link>
            <Nav.Link href="/Store">Store</Nav.Link>
            <Nav.Link href="/About">About</Nav.Link>
            <Nav.Link href="/Contact">Contact Us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Navbar.Collapse className="justify-content-end">
          <Button type="submit" onClick={handleShow}>
            <span>
              <CartIcon />
            </span>
            <span>{numberOfCartItems}</span>
          </Button>
          <CartModal show={show} handleClose={handleClose} />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default HeaderNavbar;
