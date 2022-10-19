import React, { useState, useEffect } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import axios from "axios";
import "../../admin/AdminStyles.css";
const URL = process.env.REACT_APP_URL;

const UsersAddEditButton = (props) => {
 
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [form, setForm] = useState(null);
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    setForm("");
  }, []);
  useEffect(() => {
    reset(form);
  });

  const onSubmit = async (data) => {
      await axios.put(`${URL}/api/user/${props.props._id}`, data);
      Swal.fire({
        title: "User edited",
        text: "You just edit an user",
        position: "center",
        icon: "success",
        showConfirmButton: true,
        timer: 1200,
      });
      setShow(false);   
  };

  return (
    <div className="AddButton">
      <Button
        style={{ margin: "0", minHeight: "40px", maxWidth: "50px" }}
        className="AddButtonStyle"
        variant="secondary"
        onClick={handleShow}
      >
        Edit
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Edit</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form
            onSubmit={handleSubmit(onSubmit)}
            onChange={(event) => setShow(event.target.value)}
          >
            <Form.Group className="mb-3">
              <Form.Label>Full Name</Form.Label>
              <Form.Control
                defaultValue={props.props.fullname}
                type="text"
                name="fullname"
                placeholder="Enter fullname"
                {...register("fullname", { required: true, maxLength: 30 })}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                defaultValue={props.props.email}
                type="email"
                name="email"
                placeholder="Enter Email"
                {...register("email", { required: true, maxLength: 50 })}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label htmlFor="disabledSelect">Password</Form.Label>
              <Form.Control
                type="password"
                name="password"
                placeholder="Enter password"
                {...register("password", { required: true, maxLength: 30 })}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Role</Form.Label>
              <Form.Select
                defaultValue={props.props.role}
                type="text"
                name="role"
                placeholder="Enter Role"
                {...register("role", { required: true })}
                id="disabledSelect"
              >
                <option>ADMIN_ROLE</option>
                <option>CLIENT_ROLE</option>
              </Form.Select>
            </Form.Group>
            <Button variant="secondary" type="submit">
              Submit
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default UsersAddEditButton;
