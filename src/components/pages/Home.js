import React from "react";
import HeaderNavbar from "../HeaderNavbar";
import CartContextProvider from "../../store/CartContext/CartContextProvider";
import HomeContent from "../HomeContent";

function Home() {
  return (
    <>
      <CartContextProvider>
        <HeaderNavbar />
        <HomeContent />
      </CartContextProvider>
    </>
  );
}

export default Home;
