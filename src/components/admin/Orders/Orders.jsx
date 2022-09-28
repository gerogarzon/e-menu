import React, { useContext } from "react";
import { Layout, List, Divider } from "antd";
import { Row, Col, Button, Image, Container } from "react-bootstrap";
import Adminheader from "../AdminLayout/AdminHeader";
import Aside from "../AdminLayout/Aside";
import CartContext from "../../../context/CartContext";
import { Link } from "react-router-dom";

const { Sider, Content } = Layout;

const Orders = () => {
  const { cartItems } = useContext(CartContext);

  return (
    <>
      <Layout className="adminBackground">
        <Adminheader />

        <Layout>
          <Sider>
            <Aside />
          </Sider>
          <Content>
            <Divider orientation="left">
              <h5>Orders List:</h5>
            </Divider>

            {cartItems.length !== 0 ? (
              <>
                <Row>
                  <Col className="productListTitles">
                    <b>Picture</b>
                  </Col>
                  <Col className="productListTitles">
                    <b>Product</b>
                  </Col>

                  <Col className="productListTitles">
                    <b>Amount</b>
                  </Col>
                  <Col className="productListTitles">
                    <b>Total</b>
                  </Col>
                  <Col className="productListTitles">
                    <b>Actions</b>
                  </Col>
                </Row>
                <Divider orientation="left"></Divider>
                {cartItems.map((cart, key) => {
                  return (
                    <Row>
                      <Col>
                        <List.Item className="ProductListItem">
                          <Container fluid>
                            <Image
                              style={{ height: "80px" }}
                              src={`${cart.picture}`}
                              alt={cart.title}
                            ></Image>
                          </Container>
                        </List.Item>
                      </Col>
                      <Col>
                        <List.Item className="ProductListItem">
                          {cart.title}
                        </List.Item>
                      </Col>
                      <Col>
                        <List.Item className="ProductListItem">
                          {cart.amount}
                        </List.Item>
                      </Col>
                      <Col>
                        <List.Item className="ProductListItem">
                          ${cart.price * cart.amount}
                        </List.Item>
                      </Col>
                      <Col>
                        <Link to="/Error404">
                          <Button className="m-2" variant="secondary">
                            Confirm
                          </Button>
                        </Link>
                        <Link to="/Error404">
                          <Button variant="danger">Cancel</Button>
                        </Link>
                      </Col>
                      <Divider orientation="left"></Divider>
                    </Row>
                  );
                })}
              </>
            ) : (
              <h4 style={{ paddingLeft: "30px" }}>No order registered</h4>
            )}
          </Content>
        </Layout>
      </Layout>
    </>
  );
};

export default Orders;
