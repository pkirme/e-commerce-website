import React, { useCallback, useContext, useState } from "react";
import { createContext } from "react";
import axios from "axios";
import AuthContext from "../authContext/AuthContext";

const CartContextApi = createContext();

export const CartContextApiProvider = (props) => {
  const [cart, setCart] = useState([]);
  const [cartNo, setCartNo] = useState();

  const authCtx = useContext(AuthContext);
  const email = authCtx.email.replace(/[@.]/g, "");

  const url = `https://crudcrud.com/api/dbdcadef15c64500b5a892ff1215bd8f`;
  console.log(url);

  const fetchDataHandler = useCallback(async () => {
    try {
      const response = await axios.get(`${url}/${email}`);
      const data = response.data;

      console.log(data);
      setCart(data);
      setCartNo(data.length);
    } catch (error) {}
  }, []);

  const addProductHandler = async (item) => {
    try {
      //   // Fetch the current cart data from the API
      //   const response = await axios.get(`${url}/${email}`);
      //   const cartData = response.data || [];

      //   console.log(cartData);
      //   // Check if the product already exists in the cart
      //   const existingProductIndex = cartData.findIndex(
      //     (product) => product.id === item.id
      //   );

      //   console.log(existingProductIndex);

      //   if (existingProductIndex !== -1) {
      //     // Product exists, update the product with a PUT request
      //     const ID = cartData[existingProductIndex]._id;
      //     console.log(ID);
      //     const updatedProduct = {
      //       ...cartData[existingProductIndex],
      //       amount: cartData[existingProductIndex].amount + item.amount,
      //     };
      //     await axios.put(`${url}/${email}/${ID}`, updatedProduct);
      //   } else {
      // Product does not exist, add the product with a POST request
      await axios.post(`${url}/${email}`, item);
      //   }

      // Fetch the updated cart data to update the state
      const updatedResponse = await axios.get(`${url}/${email}`);
      setCart(updatedResponse.data);
      setCartNo(updatedResponse.data.length);
    } catch (error) {
      console.error("Error handling the product:", error);
    }
  };

  const cartApiValue = {
    number: cartNo,
    fetchData: fetchDataHandler,
    addProduct: addProductHandler,
  };
  return (
    <CartContextApi.Provider value={cartApiValue}>
      {props.children}
    </CartContextApi.Provider>
  );
};

export default CartContextApi;
