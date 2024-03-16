import React, { useState } from "react";
import CartContext from "./CartContext";

const CartContextProvider = (props) => {
  const [cart, setCart] = useState({ itemList: [], totalAmount: 0 });

  const addToCartHandler = (item) => {
    console.log(item);
    setCart((prevItems) => {
      const existingItemIndex = cart.itemList.findIndex(
        (cartItem) => item.id === cartItem.id
      );

      const existingItem = prevItems.itemList[existingItemIndex];

      let updatedList;
      if (existingItem) {
        const updateList = {
          ...existingItem,
          amount: existingItem.amount + item.amount,
        };
        updatedList = [...prevItems.itemList];
        updatedList[existingItemIndex] = updateList;
      } else {
        updatedList = [...prevItems.itemList, item];
      }

      const updatedTotalAmount =
        prevItems.totalAmount + item.price * item.amount;

      return {
        itemList: updatedList,
        totalAmount: updatedTotalAmount,
      };
    });
  };

  const removeItem = (id) => {};
  const cartContext = {
    itemList: cart.itemList,
    addToCart: addToCartHandler,
    removeItem: removeItem,
    totalAmount: cart.totalAmount,
  };
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
