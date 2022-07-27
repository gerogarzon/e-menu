import React, { useState, useEffect } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import axiosInstance from "../../util/axiosInstance";
import "../../admin/AdminStyles.css";

const ProductsAdd = () => {
  // modal from react boostrap

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [form, setForm] = useState(null);
  // Form from react hookform

  const { register, reset, handleSubmit } = useForm();

  useEffect(() => {
    setForm("");
  }, []);
  useEffect(() => {
    reset(form);
  });

  const onSubmit = async (data) => {
    try {
      await axiosInstance.post("/menu/", data);
      Swal.fire({
        title: "Product submitted",
        text: "You just submitted a product",
        position: "center",
        icon: "success",
        showConfirmButton: true,
        timer: 1200,
      });
      setShow(false);
    } catch (error) {
      console.log("post error:", error);
    }
  };
  const [categories, setCategories] = useState([]);

  const getCategories = async () => {
    await fetch("http://localhost:3100/api/categories")
      .then((response) => response.json())
      .then((data) => setCategories(data.categoriesDB));
    //  console.log("add button get categories",setCategories)
  };

  useEffect(() => {
    getCategories();
  }, []);

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

          <Form
            onSubmit={handleSubmit(onSubmit)}
            onChange={(event) => setShow(event.target.value)}
          >
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
                {...register("description", { required: true, maxLength: 100 })}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label htmlFor="disabledSelect">Category</Form.Label>
              <Form.Select
                type="text"
                name="category"
                placeholder="Select Category"
                {...register("category", { required: true })}
                id="disabledSelect"
              >
                {categories?.map((category, key) => {
                  return (
                    <div key={key}>
                      <option >{category.name}</option>
                    </div>
                  );
                })}
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
