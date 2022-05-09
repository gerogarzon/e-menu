import React from "react";
import { Container, Navbar, Image } from "react-bootstrap";
import Logo from "../../../resources/logo2.png";

const AdminHeader = () => {
  return (
    <>
      <Navbar expand="lg" variant="light" bg="light">
        <Container fluid>
          <Navbar.Brand href="#">
            {" "}
            <Image className="logo" src={Logo} />
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
};

export default AdminHeader;
