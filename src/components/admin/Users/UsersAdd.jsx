import React, { useState, useEffect} from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import axiosInstance from "../../util/axiosInstance";
import "../../admin/AdminStyles.css";

const UsersAdd = () => {
  // modal from react boostrap

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [form,setForm]= useState(null);

  // Form from react hookform

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    setForm("");
  }, [])
  useEffect(() => {
    reset(form);
  });

  const onSubmit = async (data) => {
    try {
      const response = await axiosInstance.post("/user/", data);
      Swal.fire({
        title: "User submitted",
        text: "You just submitted an user",
        position: "center",
        icon: "success",
        showConfirmButton: true,
        timer: 1200,
      });
      setShow(false);
    } catch (error) {
      console.log(error);
    }

   
  };
  

  return (
    <div className="AddButton">
      <Button
        className="AddButtonStyle"
        variant="secondary"
        onClick={handleShow}
      >
        +Add
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add User</Modal.Title>
        </Modal.Header>
        <Modal.Body>


          {/* adding form from reactbootstrap */}


          <Form onSubmit={handleSubmit(onSubmit)}
           onChange={(event) => setShow(event.target.value)}>

            <Form.Group className="mb-3">
              <Form.Label>Full Name</Form.Label>
              <Form.Control
                type="text"
                name="fullname"
                placeholder="Enter fullname"
                {...register("fullname", { required: true, maxLength: 30 })}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                placeholder="Enter Email"
                {...register("email", { required: true,maxLength: 50 })}
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
               type="text"
               name="role"
               placeholder="Enter Role"
               {...register("role", { required: true })}
                id="disabledSelect" >
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

export default UsersAdd;
