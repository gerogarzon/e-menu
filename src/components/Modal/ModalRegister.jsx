import React, { useState } from 'react'
import { Button, Col, Container, Modal, Row, Form } from 'react-bootstrap';
import './ModalRegister.css'


const ModalRegister = () => {
const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Button variant="secondary" className="ms-2 mb-2" onClick={handleShow}>
        Registrarse
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header className="login-container" closeButton>
          <Modal.Title className="text-center text-white">Registrarse</Modal.Title>
        </Modal.Header>
        <Container fluid>
        <Row>
          <Col className="" md={12}>
            <Container className="welcome-text">
              <Form id="registerForm">
                <Form.Group
                  className="mb-3 text-white"
                  controlId="fullname"
                >
                  <Form.Label>Nombre Completo</Form.Label>
                  <Form.Control type="string" placeholder="Enter your name" maxLength={40} />
                  <Form.Text className="text-muted">
                    Introduce tu nombre completo.
                  </Form.Text>
                </Form.Group>
                <Form.Group
                  className="mb-3 text-white"
                  controlId="Email"
                >
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" />
                  <Form.Text className="text-muted">
                    Email con el que te deseas registrar.
                  </Form.Text>
                </Form.Group>

                <Form.Group
                  className="mb-5 text-white"
                  controlId="Password"
                >
                  <Form.Label>Contraseña</Form.Label>
                  <Form.Control type="password" placeholder="Password" />
                  <Form.Text className="text-muted">
                    Nunca compartas tus contraseñas.
                  </Form.Text>
                </Form.Group>
              </Form>
            </Container>
          </Col>
        </Row>
      </Container>
        <Modal.Footer className='Modal-Button '>
          <Button variant="danger" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" type="submit" onClick={handleClose}>
            Registrarse
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default ModalRegister