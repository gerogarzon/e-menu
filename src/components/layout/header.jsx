import React from "react";
import {
  Navbar,
  Container,
  Nav,
  Button,
  Image,
} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import Logo from "../../resources/logo2.png";
import "./styles.css";

const Header = () => {
  return (
    <>
      <Navbar className="personalizedNavbar m-0 p-0" expand="lg">
        <Container fluid>
          <Navbar.Brand href="/" className="m-0 emenuLogo">
            <Image className="logo m-0" src={Logo} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto "
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link className="navbarColor" href="/">
                Inicio
              </Nav.Link>
              <Nav.Link className="navbarColor" href="#action1">
                Sobre Nosotros
              </Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link className="navbarColor nav_login me-3" href="/login">
                Login
              </Nav.Link>
              <Button variant="outline-success" className="me-2">
                {" "}
                <FontAwesomeIcon icon={faCartShopping} />{" "}
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
