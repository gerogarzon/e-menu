import React from "react";
import { List, Divider, Button } from "antd";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { useState, useEffect } from "react";
import "../../admin/AdminStyles.css";
import { Row, Col } from "react-bootstrap";

const UsersList = () => {
    
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3100/api/users")
      .then((response) => response.json())
      .then((data) => setUsers(data.usersDB));
  }, []);

console.log(users)


  return (
    <>
      <Divider orientation="left">
        <h5>Users List:</h5>
      </Divider>
      <Row>
        <Col className="productListTitles">
          <b>Full Name</b>
        </Col>
        <Col className="productListTitles">
          <b>Email</b>
        </Col>
        <Col className="productListTitles">
          <b>Status</b>
        </Col>
        <Col className="productListTitles">
          <b>Role</b>
        </Col>
        <Col className="productListTitles">
          <b>Actions</b>
        </Col>
      </Row>
      <Divider orientation="left"></Divider>
      {users?.map((userItem) => {
        return (
          <>
            <Row >
              <Col >
                <List.Item className="ProductListItem" >{userItem.fullname}</List.Item>
              </Col>

              <Col >
                <List.Item className="ProductListItem" >
                  {userItem.email}
                </List.Item>
              </Col>

              <Col >
                <List.Item className="ProductListItem" >
                  {userItem.status}
                </List.Item>
              </Col>

              <Col >
                <List.Item className="ProductListItem" >
                  $ {userItem.role}
                </List.Item>
              </Col>

              <Col >
                <Button className="m-2" type="danger" >
                  <DeleteOutlined />
                </Button>
                <Button type="secondary" >
                  <EditOutlined />
                </Button>
              </Col>

              <Divider orientation="left" ></Divider>
            </Row>
          </>
        );
      })}
    </>
  );
};

export default UsersList;
