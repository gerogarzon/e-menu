import React, { useState, useEffect } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import axios from "axios";
import "../../admin/AdminStyles.css";
const URL = process.env.REACT_APP_URL;

const ProductsAddEditButton = (props) => {
  // modal states
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // Form from react hookform
  const [form, setForm] = useState(null);
  const { register, reset, handleSubmit } = useForm();
  useEffect(() => {
    setForm("");
  }, []);
  useEffect(() => {
    reset(form);
  });

  // Postea en la DB la info cargada en el formulario
  const onSubmit = async (data) => {
    await axios.put(`${URL}/api/menu/${props.props._id}`, data);
    Swal.fire({
      title: "Product edited",
      text: "You just edit a product",
      position: "center",
      icon: "success",
      showConfirmButton: true,
      timer: 2000,
    });
    setShow(false);
  };

  // Me traigo las categorias para renderizarlas en el select
  const [category, setCategory] = useState([]);
  const getSelectCategories = async () => {
    await fetch(`${URL}/api/categories`)
      .then((response) => response.json())
      .then((data) => setCategory(data.categoriesDB));
  };
  useEffect(() => {
    getSelectCategories();
  }, []);

  return (
    <div>
      <Button
        className="AddButtonStyle"
        variant="secondary"
        onClick={handleShow}
      >
        Edit
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Menú</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form
            onSubmit={handleSubmit(onSubmit)}
            onChange={(event) => setShow(event.target.value)}
          >
            <Form.Group className="mb-3">
              <Form.Label>Title</Form.Label>
              <Form.Control
                defaultValue={props.props.title}
                type="text"
                name="title"
                placeholder="Enter Name"
                {...register("title", { required: true, maxLength: 30 })}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Description</Form.Label>
              <Form.Control
                defaultValue={props.props.description}
                type="text"
                name="description"
                placeholder="Enter Description"
                {...register("description", { required: true, maxLength: 100 })}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label htmlFor="disabledSelect">Category</Form.Label>
              <Form.Select
                defaultValue={props.props.category}
                type="text"
                name="category"
                placeholder="Select Category"
                {...register("category", { required: true })}
                id="disabledSelect"
              >
                {category?.map((category, key) => {
                  return <option key={key}>{category.name}</option>;
                })}
              </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Price</Form.Label>
              <Form.Control
                defaultValue={props.props.price}
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
                defaultValue={props.props.picture}
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

export default ProductsAddEditButton;
