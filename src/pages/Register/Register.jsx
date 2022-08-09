import React from "react";
import { useForm } from "react-hook-form";
import Footer from "../../components/layout/Footer";
import Header from "../../components/layout/Header";
import axios from "axios";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import Swal from "sweetalert2";
import "./register.css";
const URL = process.env.REACT_APP_URL;

export const Register = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = async (addUserData, event) => {
    try {
      const addUser = await axios.post(`${URL}/user`, addUserData);
      Swal.fire({
        position: "center",
        icon: "success",
        title: `${addUser.data.usuarioNuevo.fullname} te has registrado`,
        showConfirmButton: false,
        timer: 2500,
      });
      event.target.reset();
      window.location.assign(`http://localhost:3000/login`);
    } catch (error) {}
  };
  return (
    <>
      <Header />
      <Container className="register-main-container">
        <Container className="register-container">
          <Form className="register-form" onSubmit={handleSubmit(onSubmit)}>
            <Form.Group className=" register-form-items">
              <Form.Label className="register-form-label">Nombre Completo</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ingrese un nombre de usuario"
                maxLength={40}
                {...register("fullname", { required: true, maxLength: 80 })}
              />
            </Form.Group>
            <Form.Group className=" register-form-items" controlId="Email">
              <Form.Label className="register-form-label">Email</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ingrese un email valido"
                {...register("email", {
                  required: {
                    value: true,
                    message: "Debes ingresar un email valido",
                  },
                  pattern: /^\S+@\S+$/i,
                })}
              />
            </Form.Group>
            <Form.Group className="register-form-items" controlId="Password">
              <Form.Label className="register-form-label">Contraseña</Form.Label>
              <Form.Control
                type="password"
                placeholder="Registre su contraseña"
                {...register("password", {
                  required: true,
                  pattern: /^[A-Za-z]+$/i,
                })}
              />
            </Form.Group>
            <Button
              variant="primary"
              className=" register-form-items form-btn"
              type="submit"
            >
              Registrarme
            </Button>
          </Form>
        </Container>
      </Container>
      <Footer />
    </>
  );
};
