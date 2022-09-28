import React, { useContext } from "react";
import { Nav } from "react-bootstrap";
import CartContext from "../../context/CartContext";

const Logout = () => {
  const { cleanCart } = useContext(CartContext);
  return (
    <>
      <Nav.Link
        className="navbarColor nav_login"
        href="/login"
        onClick={() => cleanCart()}
      >
        Logout
      </Nav.Link>
    </>
  );
};

export default Logout;
