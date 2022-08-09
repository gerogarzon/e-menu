import React from "react";
import { Nav } from "react-bootstrap";


const Logout = () => {

  // const currentUser =  JSON.parse(localStorage.getItem("currentUser"));

  
  const checkOut = (event) => {
    localStorage.removeItem("currentUser");
    localStorage.removeItem("isAdmin");
  };

  return (
    <>
      <Nav.Link
        className="navbarColor nav_login"
        href="/login"
        onClick={()=>checkOut()}
      >
        Logout
      </Nav.Link>
    </>
  );
};

export default Logout;
