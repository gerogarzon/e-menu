import React, { useState } from "react";
import { Modal, Button, Col, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import Swal from 'sweetalert2';
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
    handleSubmit,reset, 
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await axiosInstance.post("/menu/", data)
    Swal.fire({
      position: "center",
      icon: "success",
      title: response.data.message,
      showConfirmButton: false,
      timer: 1500,
    });
    reset(response);
    window.reload();
    } catch (error) {
      console.log(error)
    }
   
    // const first = await fetch("http://localhost:3100/api/menu/", {
    //   method: "POST",
    //   body: JSON.stringify(data),
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    // });
    
    // const newProductFromDB = await first.json();
   
  };
  console.log(errors);

  return (
    <>
    <div className="AddButton">
      <Button className="AddButtonStyle" variant="secondary" onClick={handleShow}>
        +Add
   
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
      >
        <Modal.Header closeButton>
          <Modal.Title>Add Menú</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          

         
            {/* adding form from reactbootstrap */}
            <Form onSubmit={handleSubmit(onSubmit)}>

              <Form.Group className="mb-3" >
                <Form.Label>Title</Form.Label>
                <Form.Control type="text" name="title" placeholder="Enter Name"  {...register('title', { required: true, maxLength: 100 })} />                
              </Form.Group>

              <Form.Group className="mb-3" >
                <Form.Label>Description</Form.Label>
                <Form.Control type="text" name="description" placeholder="Enter Description" {...register('description',{ required: true })}/>                
              </Form.Group>

              <Form.Group className="mb-3" >
                <Form.Label>Category</Form.Label>
                <Form.Control type="text" name="category" placeholder="Select Category" {...register('category', { required: true })}/>     
              </Form.Group>

              <Form.Group className="mb-3" >
                <Form.Label>Price</Form.Label>
                <Form.Control type="number" name="price" placeholder="Enter Price" {...register( 'price',{
                        required: true,
                        max: 100000,
                        min: 0,
                        valueAsNumber: true,
                      })}/>                
              </Form.Group>

              <Form.Group className="mb-3" >
                <Form.Label>Picture</Form.Label>
                <Form.Control type="text" name="picture" placeholder="Add URL picture" {...register('picture',{required:true})}/>                
              </Form.Group>
              

              

              <Button variant="secondary" type="submit">
                Submit
              </Button>
            </Form>



           
          
        </Modal.Body>
      </Modal>
      </div>
    </>
  );
};

export default ProductsAdd;