import Footer from "../../components/layout/Footer";
import Header from "../../components/layout/header";
import { Button, Container, Form, Row, Col, Alert } from "react-bootstrap";
import React, { useState } from "react";
import { URL } from "../../constants/config";
import axios from "axios";
import ModalRegister from "../../components/Modal/ModalRegister";
import "./login.css";
import "antd/dist/antd.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Swal from "sweetalert2";

const Login = () => {
  const [loginError, showLoginError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const onLogin = async (loginData) => {
    try {
      console.log(loginData);
      const login = await axios.post(`${URL}/login`, loginData);
      localStorage.setItem("userToken", JSON.stringify(login.data.token));
      localStorage.setItem("currentUser", JSON.stringify(login.data.user));

      const Toast = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener("mouseenter", Swal.stopTimer);
          toast.addEventListener("mouseleave", Swal.resumeTimer);
        },
      });

      Toast.fire({
        icon: "success",
        title: "Loggin exitoso",
      });
    } catch (error) {
      setErrorMsg(error.response.data.msg);
      showLoginError(true);
      setTimeout(() => showLoginError(false), 2000);
    }
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Algo ha salido mal!",
      footer: '<a href="">Error al intentar loggearte</a>',
    });
  };

  // function onFinishFailed() {};

  return (
    <>
      <Header />
      <Container fluid>
        <Row>
          <Col className=" welcome-text d-flex" md={8}>
            <Container className="justify-content-center d-flex align-items-center container-sm">
              <h1 className="p-0 m-0 welcome-text  text-center text-align-center">
                ¡Bienvenido!
                <br />
                <br />
                ¡Bom apetit!
              </h1>
            </Container>
          </Col>
          <Col className="" md={4}>
            <Container className="login-container ">
              <Form id="loginForm" onFinish={onLogin} autoComplete="off">
                <h1 className="mb-3 text-center text-white">
                  Ingrese su cuenta
                </h1>
                <Form.Group className="mb-3 text-white" controlId="Email">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" />
                  <Form.Text className="text-muted">
                    Nunca compartas tu usuario.
                  </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3 text-white" controlId="Password">
                  <Form.Label>Contraseña</Form.Label>
                  <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3 text-white" controlId="checked">
                  <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button
                  variant="primary"
                  className="mb-2"
                  type="submit"
                  onFinish
                >
                  Ingresar
                </Button>
                <ModalRegister />
              </Form>
            </Container>
          </Col>
          <Alert
            message={errorMsg}
            type="error"
            key="alert"
            variant="alert"
            className={loginError ? "show" : "hidden"}
          />
        </Row>
      </Container>
      <Footer />
    </>
  );
};
export default Login;
