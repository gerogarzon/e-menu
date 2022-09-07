import React from "react";
import { Navbar, Container, Nav, Image } from "react-bootstrap";
import Logo from "../../resources/logo2.png";
import "./styles.css";
import Logout from "../../pages/Logout/Logout";

const Header = () => {
  /* Traemos del local storage el current user */
  let current = JSON.parse(localStorage.getItem("currentUser"));
  let isAdmin = JSON.parse(localStorage.getItem("isAdmin"));
  console.log("header", current);
  console.log("header2", isAdmin);
  

  return (
    <>
      <Navbar className="personalizedNavbar m-0 p-0" expand="lg">
        <Container fluid>
          <Navbar.Brand href="/" className="m-0 emenuLogo">
            <Image className="logo m-0" src={Logo}  />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse dark id="navbarScroll">
            <Nav
              className="me-auto "
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              {isAdmin === "ADMIN_ROLE" ? (
                <>
                 
                  <Nav.Link className="navbarColor" href="/">
                    Inicio
                  </Nav.Link>
                 

                  <Nav.Link className="navbarColor" href="/sobreNosotros">
                    Sobre Nosotros
                  </Nav.Link>

                  <Nav.Link className="navbarColor" href="/admin">
                    Admin
                  </Nav.Link>
                </>
              ) : (
                <>
                  <Nav.Link className="navbarColor" href="/">
                    Inicio
                  </Nav.Link>
                  
                  <Nav.Link className="navbarColor" href="/sobreNosotros">
                    Sobre Nosotros
                  </Nav.Link>
                </>
              )}
            </Nav>
            <Nav>
              {current === null ? (
                <Nav.Link className="navbarColor nav_login me-1" href="/login">
                  Login
                </Nav.Link>
              ) : (
                <Logout />
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
