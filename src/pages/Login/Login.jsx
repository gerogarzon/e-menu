import Footer from "../../components/layout/Footer";
import Header from "../../components/layout/header";
import { Button, Form } from "react-bootstrap";
import React, { useState } from "react";
import axios from "axios";
import "./login.css";
import "antd/dist/antd.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Swal from "sweetalert2";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
const URL = process.env.REACT_APP_URL;

export const Login = () => {
  const [loginError, showLoginError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const { register, handleSubmit } = useForm();


  const onSubmit = async (loginData, event, error) => {
    try {
      const login = await axios.post(`${URL}/api/login`, loginData);
      localStorage.setItem("userToken", JSON.stringify(login.data.token));
      localStorage.setItem("currentUser", JSON.stringify(login.data.user));
      localStorage.setItem("isAdmin", JSON.stringify(login.data.user.role));
      const current = JSON.parse(localStorage.getItem("currentUser"));
      localStorage.setItem("userRole", JSON.stringify(current.role));

      await Swal.fire({
        position: "center",
        icon: "success",
        title: `Bienvenido ${login.data.user.fullname}`,
        showConfirmButton: false,
        timer: 1000,
      });
      
      if (current.role === "ADMIN_ROLE") {
        window.location.assign(`https://e-menu-rc.netlify.app/admin`);
      } else {
        window.location.assign(`https://e-menu-rc.netlify.app/`);
      }
    } catch (error) {
      setErrorMsg(error.response.data.msg);
      showLoginError(true);
      setTimeout(() => showLoginError(false), 2000);
      await Swal.fire({
        position: "center",
        icon: "error",
        title: JSON.stringify(`${error.response.data.msg}`),
        showConfirmButton: false,
        timer: 1500,
      });
      event.target.reset()
    }
  };
  return (
    <>
      <Header />
      <div className="login-manin-container">
        <div className="main-left-item d-none d-lg-block">
          <h1 className="main-left-item-content">
            ¡Bienvenido!
            <br />
            <br />
            ¡Bom apetit!
          </h1>
        </div>
        <div className="main-right-item mx-2">
          <Form className="login-form" onSubmit={handleSubmit(onSubmit)}>
            <h1 className="login-form-items w-auto ">Ingrese su cuenta</h1>
            <Form.Group className="login-form-items" controlId="Email">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="text"
                placeholder="Email"
                {...register("email", {
                  required: {
                    value: true,
                    message: "Debes ingresar un email valido",
                  },
                  pattern: /^\S+@\S+$/i,
                })}
              />
            </Form.Group>
            <Form.Group className="login-form-items" controlId="Password">
              <Form.Label>Contraseña</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                {...register("password", {
                  required: true,
                })}
              />
            </Form.Group>
            <div className="login-form-items">
              <Button
                variant="secondary"
                className="login-btn-left"
                type="submit"
              >
                Ingresar
              </Button>
              <Button variant="light" className="login-btn-right">
                <Link className="login-btn-link" to="/register" variant="">
                  Registrate
                </Link>
              </Button>
            </div>
          </Form>
        </div>
      </div>
      <Footer />
    </>
  );
};
