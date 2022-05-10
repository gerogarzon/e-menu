import React from "react";
import { List, Divider, Button } from "antd";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { useState, useEffect } from "react";
import "../../admin/AdminStyles.css";
import { Row, Col } from "react-bootstrap";

const ProductsList = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3100/api/menus")
      .then((response) => response.json())
      .then((data) => setItems(data.menusDB));
  }, []);




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
                <Button className="m-2" type="danger">
                  <DeleteOutlined />
                </Button>
                <Button type="secondary">
                  <EditOutlined />
                </Button>
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
