import React, { useState, useEffect } from "react";
import { List, Divider, Button } from "antd";
import { DeleteOutlined } from "@ant-design/icons";
import "../../admin/AdminStyles.css";
import Swal from "sweetalert2";
import axios from 'axios';
import {Row, Col} from "react-bootstrap";
import ProductsAddEditButton from "./ProductsAddEditButton";
const URL = process.env.REACT_APP_URL;


const ProductsList = () => {

  const [items, setItems] = useState([]);


  const getProduct = async () => {
    await fetch(`${URL}/api/menus`)
      .then((response) => response.json())
      .then((data) => setItems(data.menusDB));
  };

  const deleteProduct = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#6c757dFB",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        await axios.delete(`${URL}/api/menu/${_id}`);
        getProduct();
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
  };

  useEffect(() => {
    getProduct();
  }, [items]);

  return (
    <>
      <Divider orientation="left">
        <h5>Products List:</h5>
      </Divider>
      <Row>
        <Col className="productListTitles">
          <b>Picture</b>
        </Col>
        <Col className="productListTitles">
          <b>Title</b>
        </Col>

        <Col className="productListTitles">
          <b>Description</b>
        </Col>
        <Col className="productListTitles">
          <b>Category</b>
        </Col>
        <Col className="productListTitles">
          <b>Price</b>
        </Col>
        <Col className="productListTitles">
          <b>Actions</b>
        </Col>
      </Row>
      <Divider orientation="left"></Divider>
      {items?.map((item, key) => {
        return (
          <>
            <Row key={key}>
              <Col>
                <List.Item className="ProductListItem">
                  <img
                    style={{ height: "50px" }}
                    src={item.picture}
                    alt={item.title}
                  ></img>
                </List.Item>
              </Col>
              <Col>
                <List.Item className="ProductListItem">{item.title}</List.Item>
              </Col>

              <Col>
                <List.Item className="ProductListItem">
                  {item.description}
                </List.Item>
              </Col>

              <Col>
                <List.Item className="ProductListItem">
                  {item.category}
                </List.Item>
              </Col>

              <Col>
                <List.Item className="ProductListItem">
                  $ {item.price}
                </List.Item>
              </Col>
              <Col>
                <Row clasName="actions-Flexcontainer">
                  <Col className="actions-Flexitems">
                    <Button
                      style={{ maxWidth: "53px", minHeight: "38px" }}
                      className="actions-FlexItems-btn"
                      type="danger"
                      onClick={() => deleteProduct(item._id)}
                    >
                      <DeleteOutlined />
                    </Button>
                  </Col>
                  <Col className="actions-Flexitems">
                    <ProductsAddEditButton props={item} />
                  </Col>
                </Row>
              </Col>

              <Divider orientation="right"></Divider>
            </Row>
          </>
        );
      })}
    </>
  );
};

export default ProductsList;
