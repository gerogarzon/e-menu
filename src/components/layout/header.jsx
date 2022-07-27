import React, { useContext } from "react";
import { Navbar, Container, Nav, Button, Image } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import Logo from "../../resources/logo2.png";
import "./styles.css";


const Header = () => {
  /* Traemos del context la funcion para agregar un producto */

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
              <Nav.Link className="navbarColor" href="/sobreNosotros">
                Sobre Nosotros
              </Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link className="navbarColor nav_login me-1" href="/login">
                Login
              </Nav.Link>

            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
