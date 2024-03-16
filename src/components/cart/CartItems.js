import React, { useContext } from "react";
import { Button, Table } from "react-bootstrap";
import CartContext from "../../store/CartContext/CartContext";

const CartItems = () => {
  const cartCtex = useContext(CartContext);
  return (
    <Table style={{ textAlign: "center" }}>
      <thead>
        <tr>
          <th>Item</th>
          <th>Price</th>
          <th>Quantity</th>
          <th></th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {cartCtex.itemList.map((item) => (
          <tr key={item.id}>
            <td>
              <img
                src={item.imageUrl}
                alt={item.title}
                style={{ maxWidth: "100px" }}
              ></img>
            </td>
            <td>${item.price}</td>
            <td>
              <input
                value={item.amount}
                style={{
                  maxWidth: "30px",
                  textAlign: "center",
                  borderColor: "#4CC6E4",
                }}
                readOnly
              ></input>
            </td>
            <td>
              <Button variant="danger" onClick="">
                Remove
              </Button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default CartItems;
