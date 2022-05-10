import React, { useState } from "react";
import { Modal, Button, Col, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";



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
    const first = await fetch("http://localhost:3100/api/menu/", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });
    
    const newProductFromDB = await first.json();
   
  };
  console.log(errors);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        +Add
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Add Menú</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          

         
            {/* adding form from reactbootstrap */}
            <Form onSubmit={handleSubmit(onSubmit)}>

              <Form.Group className="mb-3" >
                <Form.Label>Title</Form.Label>
                <Form.Control type="text" placeholder="Enter Name"  {...register("title", { required: true, maxLength: 81 })} />                
              </Form.Group>

              <Form.Group className="mb-3" >
                <Form.Label>Description</Form.Label>
                <Form.Control type="text" placeholder="Enter Description" {...register("description", { required: true })}/>                
              </Form.Group>

              <Form.Group className="mb-3" >
                <Form.Label>Category</Form.Label>
                <Form.Control type="text" placeholder="Select Category" {...register("category", { required: true })}/>     
              </Form.Group>

              <Form.Group className="mb-3" >
                <Form.Label>Price</Form.Label>
                <Form.Control type="number" placeholder="Enter Price" {...register("price", {
                        required: true,
                        max: 100000,
                        min: 0,
                        valueAsNumber: true,
                      })}/>                
              </Form.Group>

              <Form.Group className="mb-3" >
                <Form.Label>Picture</Form.Label>
                <Form.Control type="text" placeholder="Add URL picture" {...register("pictutre")}/>                
              </Form.Group>
              

              

              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>



           
          
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ProductsAdd;
