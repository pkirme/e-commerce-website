import React, { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { Container, Navbar, Button, Nav } from "react-bootstrap";
import CartModal from "../cart/CartModal";
import CartContext from "../../store/CartContext/CartContext";
import CartIcon from "../cart/CartIcon";
import "./HeaderNavbar.css";

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
            <li>
              <NavLink className="nav" to="/Home">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink className="nav" to="/Store">
                Store
              </NavLink>
            </li>
            <li>
              <NavLink className="nav" to="/About">
                About
              </NavLink>
            </li>
            <li>
              <NavLink className="nav" to="/Contact">
                Contact Us
              </NavLink>
            </li>
            <li>
              <NavLink className="nav" to="/Login">
                Login
              </NavLink>
            </li>
          </Nav>
        </Navbar.Collapse>
        <Navbar.Collapse className="justify-content-end">
          <Button type="submit" onClick={handleShow}>
            <span>Cart</span>
            <span>{numberOfCartItems}</span>
          </Button>
          <CartModal show={show} handleClose={handleClose} />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default HeaderNavbar;
