import React, { useState, useEffect, useContext} from "react";
import { Card, Container, Row, Col, Image } from "react-bootstrap";
import Banner from "../../resources/Banner.jpg";
import Categories from "./Categories";
import "./styles.css";
import CartContext from "../../context/CartContext";
import Cart from"../../cart/cartBody/cartBody";

const Body = () => {
  const [items, setItems] = useState([]);
  const [origin, setOrigin] = useState([]);

  const { addItemToCart} = useContext(CartContext);

  useEffect(() => {
    fetch("http://localhost:3100/api/menus")
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

  return (
    <>
   
     
      <Image fluid src={Banner} className="banner-img" />
      
      <Container fluid className="menus-container">
      
        <Cart/>
        <Container>
          <br />
          <h2 className="text-center body-menu"> Nuestras secciones: </h2>
          <Categories filterByCategory={filterByCategory} />
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
                    <button className="cardButton" onClick={() => addItemToCart(item)} >Agregar</button>
                    
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
