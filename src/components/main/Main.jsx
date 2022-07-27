import React from "react";
import Header from "../layout/Header";
import Body from "../layout/Body";
import Footer from "../layout/Footer"
import Cart from "../../cart/cartBody/cartBody";

const Main = () => {
  return (
    <>
      <Header />
      <Cart/>
      <Body/>
      <Footer/>
    </>
  );
};
export default Main;
