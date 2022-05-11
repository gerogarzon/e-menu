import Footer from "../../components/layout/Footer";
import Header from "../../components/layout/Header";
import { Button, Container, Form, Row, Col, Alert } from "react-bootstrap";
import React, { useState } from "react";
import axios from "axios";
import {ModalRegister} from "../../components/Modal/ModalButton";
import "./login.css";
import "antd/dist/antd.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Swal from "sweetalert2";
import { useForm } from "react-hook-form";
const URL = process.env.REACT_APP_URL;



export const Login = () => {
  const [loginError, showLoginError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const {register, handleSubmit } = useForm();
  const onSubmit = async(loginData, event) => {
    try {
      const login = await axios.post(`${URL}/login`, loginData);
      localStorage.setItem("userToken", JSON.stringify(login.data.token));
      localStorage.setItem("currentUser", JSON.stringify(login.data.user));


      Swal.fire({
        position: 'center',
        icon: 'success',
        title: `Bienvenido ${login.data.user.fullname}`,
        showConfirmButton: false,
        timer: 1500
      }
      )
      event.target.reset()
      window.location.assign(`http://localhost:3000/admin`)

    } catch (error) {
      setErrorMsg(error.response.data.msg);
      showLoginError(true);
      setTimeout(() => showLoginError(false), 2000);
      Swal.fire({
        position: 'center',
        icon: 'error',
        title: `${error}`,
        showConfirmButton: false,
        timer: 1500
      })
    }


  }
  return (
    <>
      <Header />
      <Container fluid>
        <Row>
          <Col className=" welcome-text d-flex" md={8}>
            <Container className="justify-content-center d-flex align-items-center container-sm">
              <h1 className="p-0 m-0 mb-2 welcome-text  text-center text-align-center">
                ¡Bienvenido!
                <br />
                <br />
                ¡Bom apetit!
              </h1>
            </Container>
          </Col>
          <Col className="Col-Loginform" md={4}>
            <Container className="login-container ">
              <Form id="loginForm" onSubmit={handleSubmit(onSubmit)}>
                <h1 className="mb-3 text-center text-white">
                  Ingrese su cuenta
                </h1>
                <Form.Group className="mb-3 text-white" controlId="Email">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="text" placeholder="Email" {...register("email", {required: {value:true,message:'Debes ingresar un email valido'}, pattern: /^\S+@\S+$/i})} />
                  <Form.Text className="text-muted">
                    `Nunca compartas tu usuario.`
                  </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3 text-white" controlId="Password">
                  <Form.Label>Contraseña</Form.Label>
                  <Form.Control type="password" placeholder="Password" {...register("password", {required: true,pattern: /^[A-Za-z]+$/i })} />
                </Form.Group>
                <Form.Group className="mb-3 text-white" controlId="checked">
                  <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button
                  variant="primary"
                  className="mb-2"
                  type="submit"
                >
                  Ingresar
                </Button>
                <ModalRegister />
              </Form>
            </Container>
          </Col>
        
        </Row>
      </Container>
      <Footer />
    </>
  );
};
