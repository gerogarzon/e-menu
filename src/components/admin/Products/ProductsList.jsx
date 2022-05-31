import React from "react";
import { List, Divider, Button } from "antd";
import { DeleteOutlined} from "@ant-design/icons";
import { useState, useEffect } from "react";
import "../../admin/AdminStyles.css";
import Swal from "sweetalert2";
import axiosInstance from "../../util/axiosInstance";
import { Row, Col } from "react-bootstrap";
import ProductsAddEditButton from "./ProductsAddEditButton";

const ProductsList = () => {
  const [items, setItems] = useState([]);

  const getProduct = async () => {
    const response = await fetch("http://localhost:3100/api/menus")
      .then((response) => response.json())
      .then((data) => setItems(data.menusDB));
  };

  const deleteProduct = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const response = await axiosInstance.delete(`/menu/${_id}`);
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
      {items?.map((item) => {
        return (
          <>
            <Row key={item._id}>
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
                <Row>
                  <Col>
                    <Button
                      className="m-2"
                      type="danger"
                      onClick={() => deleteProduct(item._id)}
                    >
                      <DeleteOutlined />
                    </Button>
                  </Col>
                  <Col>
                    <ProductsAddEditButton />
                  </Col>
                </Row>
              </Col>

              <Divider orientation="left"></Divider>
            </Row>
          </>
        );
      })}
    </>
  );
};

export default ProductsList;
