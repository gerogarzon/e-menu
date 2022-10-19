import React, { useState, useEffect, useContext } from "react";
import { Card, Container, Row, Col, Image, Button } from "react-bootstrap";
import Banner from "../../resources/Banner.jpg";
import Categories from "./Categories";
import "./styles.css";
import CartContext from "../../context/CartContext";
const URL = process.env.REACT_APP_URL;

const Body = () => {
  
  const [items, setItems] = useState([]);
  const [origin, setOrigin] = useState([]);
  const { addItemToCart } = useContext(CartContext);
  const isLogin = JSON.parse(localStorage.getItem("currentUser"));

  useEffect(() => {
    fetch(`${URL}/api/menus`)
      .then((response) => response.json())
      .then((data) => {
        setItems(data.menusDB);
        setOrigin(data.menusDB);
      });
  }, []);

  const filterByCategory = (category) => {
    const filteredItems = origin.filter((elemento) => {
      if (elemento.category === category) return true;
    });
    setItems(filteredItems);
  };

  const notFilter = () => {
    setItems(origin);
  };

  return (
    <>
      <Image fluid src={Banner} className="banner-img" />
      <Container fluid className="menus-container">
        <Container>
          <br />
          <h2 className="text-center body-menu" id="productos">
            {" "}
            Nuestras secciones:{" "}
          </h2>
          <Categories
            notFilter={notFilter}
            filterByCategory={filterByCategory}
          />
          <br />
          <h2 className="text-center body-menu"> Nuestro menú: </h2>
          <br></br>
          <Row className="rowPersonalized">
            {items?.map((item) => {
              return (
                <Col key={item._id} lg="3" md="6" xs="12">
                  <Card
                    key={item._id}
                    border="#edeef2"
                    style={{ width: "auto" }}
                    className="card-items text-dark"
                  >
                    <Image
                      fluid
                      src={item.picture}
                      className="item-image"
                      alt={item.title}
                    />
                    <p className="category-item">{item.category}</p>
                    <Card.Title className="item-name">{item.title}</Card.Title>
                    <p className="text-dark item-text">{item.description}</p>
                    <p className="text-dark">${item.price}</p>
                    {isLogin == null ? (
                      <Button className="cardButton" href="/login">
                        Agregar
                      </Button>
                    ) : (
                      <Button
                        className="cardButton"
                        onClick={() => addItemToCart(item)}
                      >
                        Agregar
                      </Button>
                    )}
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
