import React, { useState, useEffect } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import axiosInstance from "../../util/axiosInstance";
import "../../admin/AdminStyles.css";
import { EditOutlined } from "@ant-design/icons";

const ProductsAddEditButton = (_id) => {
  // modal from react boostrap

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [form, setForm] = useState(null);
  // Form from react hookform
  
  const {
    register,
    reset,
    handleSubmit,
  } = useForm();
  

  useEffect(() => {
    setForm("");
  }, []);
  useEffect(() => {
    reset(form);
  });
  
  // const abrir = ()=>{
  //   handleShow();
  //   console.log(_id);
  // }

  
  const onSubmit = async (data) => {    
    try {
    const response =   await axiosInstance.put(`/menu/${_id}`, data);
      Swal.fire({
        title: "Edit Product",
        text: "You just edited a product",
        position: "center",
        icon: "success",
        showConfirmButton: true,
        timer: 1200,
      });
      setShow(false);
    } catch (error) {
      // console.log("edit button put",error);
    }
  };
  const [categories, setCategories] = useState([]);
  
  const getCategories = async () => {
   const response =  await fetch("http://localhost:3100/api/categories")
      .then((response) => response.json())
      .then((data) => setCategories(data.categoriesDB));
    //  console.log("edit button get categories", setCategories)
  };  
  
  useEffect(() => {
    getCategories();  
  }, []);


  return (
    <div className="EditButton">
      <Button
        className="AddButtonStyle"
        variant="secondary"
        onClick={handleShow}
      >
        <EditOutlined/>
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Product</Modal.Title>
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
              {categories?.map((category) =>{ return (
                <>  
              <option key={category._id}>{category.name}</option>                          
              </>  
                )              
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

export default ProductsAddEditButton;
