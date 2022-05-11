import React, { useState } from "react";
import { Modal, Button, Col, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import axiosInstance from "../../util/axiosInstance";
import "../../admin/AdminStyles.css";

const ProductsAdd = () => {
  // modal from react boostrap

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // Form from react hookform

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await axiosInstance.post("/menu/", data);
      Swal.fire({
        position: "center",
        icon: "success",
        showConfirmButton: true,
        timer: 2000,
      });
      setShow(false);
      window.location.reload();
    } catch (error) {
      console.log(error);
    }

  
  };
  console.log(errors);

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
          <Modal.Title>Add Menú</Modal.Title>
        </Modal.Header>
        <Modal.Body>


          {/* adding form from reactbootstrap */}


          <Form onSubmit={handleSubmit(onSubmit)}>

            <Form.Group className="mb-3">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                name="title"
                placeholder="Enter Name"
                {...register("title", { required: true, maxLength: 30 })}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Description</Form.Label>
              <Form.Control
                type="text"
                name="description"
                placeholder="Enter Description"
                {...register("description", { required: true,maxLength: 100 })}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label htmlFor="disabledSelect">Category</Form.Label>
              <Form.Select
               type="text"
               name="category"
               placeholder="Enter Description"
               {...register("category", { required: true, })}
                id="disabledSelect" >
                <option>Comidas Calientes</option>
                <option>Comidas Frias</option>
                <option>Postres</option>
                <option>Bebidas</option>
              </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Price</Form.Label>
              <Form.Control
                type="number"
                name="price"
                placeholder="Enter Price"
                {...register("price", {
                  required: true,
                  max: 100000,
                  min: 0,
                  valueAsNumber: true,
                })}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Picture</Form.Label>
              <Form.Control
                type="text"
                name="picture"
                placeholder="Add URL picture"
                {...register("picture", { required: true })}
              />
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

export default ProductsAdd;
