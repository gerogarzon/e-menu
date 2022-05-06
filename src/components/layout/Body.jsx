import React, { useState, useEffect } from "react";
import { Card, Container, Row, Col, Image } from "react-bootstrap";
import ItemCount from "./ItemCount.jsx";
import Banner from "../../resources/Banner.jpg";
import Categories from "./Categories";
import "./styles.css";

const Body = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3100/api/menus")
      .then((response) => response.json())
      .then((data) => setItems(data.menusDB));
  }, []);

  return (
    <>
      <Container fluid className="menus-container">
        <Image fluid src={Banner} className="banner-img" />
        <Container>
          <br />
          <Categories />
          <br />
          <h2 className="text-center body-menu"> Nuestro menú: </h2>
          <br></br>
          <Row className="rowPersonalized">
            {items?.map((item) => {
              return (
                <Col key={item._id} md="3" xs>
                  <Card
                    key={item._id}
                    border="#edeef2"
                    style={{ width: "auto" }}
                    className="card-items text-dark "
                  >
                    <Image fluid src={item.picture} className="item-image" />
                    <p className="category-item">{item.category}</p>
                    <Card.Title className="item-name">{item.title}</Card.Title>
                    <p className="text-dark item-text">{item.description}</p>
                    <p className="text-dark">${item.price}</p>
                    <ItemCount />
                  </Card>
                  <br />
                </Col>
              );
            })}
          </Row>
        </Container>
        <br></br>
      </Container>
    </>
  );
};

export default Body;
