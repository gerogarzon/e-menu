import React, { useState, useEffect, Component } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import axiosInstance from "../../util/axiosInstance";
import "../../admin/AdminStyles.css";
import { EditOutlined } from "@ant-design/icons";

class ProductsAddEditButton extends Component {

  constructor(props) {
  super(props);
  this.state = {
  title: '',
  description: '',
  category: '',
  price: null,
  picture:''
  }
  }


  // modal from react boostrap

  // const [show, setShow] = useState(false);
  // const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);
  // const [form, setForm] = useState();
  // // Form from react hookform

  // const { register, reset } = useForm();

  // useEffect(() => {
  //   setForm("");
  // }, []);
  // useEffect(() => {
  //   reset(form);
  // });

  componentDidMount = () => {
    this.getProductById();
    }

  // const [state, setState] = useState({ title: '', description: 'null', category:'',price: null,picture:'' });

   getProductById (_id) {
     fetch(`http://localhost:3100/api/menu/${_id}`).then((response) => {
      this.setState({ title: response.data.title,
            description: response.data.description,
            category: response.data.category,
            price: response.data.price,
            picture: response.data.picture})
    })
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
    }
    handleSubmit = (event) => {
      event.preventDefault();
      const { title, description, category, price,picture } = this.state;
      axiosInstance.post("/menu/",  {
      title: title,
      description: description,
      category: category,
      price: price,
      picture:picture,
      })
      .then((response) => {
      console.log(response);
      this.props.history.push('/');
      })
      .catch((error) => {
      console.log(error);
      });
      
      }








  // const handleSubmit = async (event, _id) => {
  //   event.preventDefault();
    
  //   const title = state.title;
  //   const description = state.description;
  //   const category = state.category;
  //   const price = state.price;
  //   const picture = state.picture;
    
  //   await axiosInstance.put(`/menu/${_id}`, {
  //         title: title,
  //         description: description,
  //         category: category,
  //         price: price,
  //         picture: picture,
  //       });

  //   console.log('submitting', state);
  // }

  // const handleChange = (event) => {
  //   const name = event.target.name;
  //   const value = event.target.value;
  //   setState({ ...state, [name]: value });
  // };


  // const [title, setTitle] = useState("");
  // const [description, setDescription] = useState("");
  // const [category, setCategory] = useState("");
  // const [price, setPrice] = useState(0);
  // const [picture, setPicture] = useState("");

  // const updateProduct = async (_id) => {
  //   await axiosInstance.put(`/menu/${_id}`, {
  //     title: title,
  //     description: description,
  //     category: category,
  //     price: price,
  //     picture: picture,
  //   });
  // };

  // const [items, setItems] = useState([]);

  // const getProduct = async (_id) => {
  //    await fetch(`http://localhost:3100/api/menu/${_id}`)
  //     .then((response) => response.json())
  //     .then((data) => setItems(data.menu));
  //     console.log('aca2',items);
  // };

  // useEffect(() => {
  //   getProduct();
  // }, [items]);




  // const [categories, setCategories] = useState([]);
  // const getCategories = async () => {
  //   const response = await fetch("http://localhost:3100/api/categories")
  //     .then((response) => response.json())
  //     .then((data) => setCategories(data.categoriesDB));
  //   //  console.log("add button get categories",setCategories)
  // };

  // useEffect(() => {
  //   getCategories();
  // }, []);


  render(){

  return (
    <div className="EditButton">
      <Button
        className="AddButtonStyle"
        variant="secondary"
        // onClick={handleShow}
      >
        <EditOutlined />
      </Button>

      <Modal >
        <Modal.Header closeButton>
          <Modal.Title>Edit Product</Modal.Title>
        </Modal.Header>
        <Modal.Body>

          {/* adding form from reactbootstrap */}

          <Form onSubmit={this.handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Title</Form.Label>
              <Form.Control
              onChange={this.handleChange}
                type="text"
                name="title"
                placeholder="Enter Name"
                value={this.state.title}
              
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Description</Form.Label>
              <Form.Control   
              onChange={this.handleChange}         
                type="text"
                name="description"
                placeholder="Enter Description"
                value= {this.state.description}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label htmlFor="disabledSelect">Category</Form.Label>
              <Form.Select
              onChange={this.handleChange}
                type="text"
                name="category"
                placeholder="Select Category"
                value={this.state.category}
                id="disabledSelect"
              >
                {/* {categories?.map((category, key) => {
                  return (
                    <>
                      <option key={key}>{category.name}</option>
                    </>
                  );
                })} */}
              </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Price</Form.Label>
              <Form.Control
              onChange={this.handleChange}
                type="number"
                name="price"
                placeholder="Enter Price"
                value={this.state.price}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Picture</Form.Label>
              <Form.Control
              onChange={this.handleChange}
                type="text"
                name="picture"
                placeholder="Add URL picture"
               value={this.state.picture}
              />
            </Form.Group>

            <Button
              variant="secondary"
              type="submit"
            >
              Submit
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );}

}



export default ProductsAddEditButton;
