import React from 'react'
import { useForm } from 'react-hook-form';
import Footer from '../../components/layout/Footer'
import Header from '../../components/layout/header'
import axios from "axios";
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import Swal from 'sweetalert2';
const URL = process.env.REACT_APP_URL;

export const Register = () => {
  const {register, handleSubmit} = useForm();
  const onSubmit = async(addUserData, event) => {
    try {
      const addUser = await axios.post(`${URL}/user`, addUserData);
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: `${addUser.data.usuarioNuevo.fullname} te has registrado`,
        showConfirmButton: false,
        timer: 2500
      }
      )
      event.target.reset()
      window.location.assign(`http://localhost:3000/login`)
    } catch (error) {
      
    }
    }
  return (
    <>
    <Header/>
    <Container fluid className='container-md'>
        <Row>
          <Col className="" md={12}>
            <Container className="welcome-text">
              <Form id="registerForm" onSubmit={handleSubmit(onSubmit)}>
                <Form.Group
                  className="mb-3 text-white"
                >
                  <Form.Label>Nombre Completo</Form.Label>
                  <Form.Control type="text" placeholder="Enter your name" maxLength={40} {...register("fullname", {required: true, maxLength: 80})} />
                  <Form.Text className="text-muted">
                    Introduce tu nombre completo.
                  </Form.Text>
                </Form.Group>
                <Form.Group
                  className="mb-3 text-white"
                  controlId="Email"
                >
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="text" placeholder="Email" {...register("email", {required: {value:true,message:'Debes ingresar un email valido'}, pattern: /^\S+@\S+$/i})} />
                  <Form.Text className="text-muted">
                    Email con el que te deseas registrar.
                  </Form.Text>
                </Form.Group>
                <Form.Group
                  className="mb-5 text-white"
                  controlId="Password"
                >
                  <Form.Label>Contraseña</Form.Label>
                  <Form.Control type="password" placeholder="Password" {...register("password", {required: true,pattern: /^[A-Za-z]+$/i })} />
                  <Form.Text className="text-muted">
                    Nunca compartas tus contraseñas.
                  </Form.Text>
                </Form.Group>
                <Button
                  variant="primary"
                  className="mb-2"
                  type="submit"
                >
                  Ingresar
                </Button>
              </Form>
            </Container>
          </Col>
        </Row>
      </Container>
    <Footer/>
    </>
  )
}
