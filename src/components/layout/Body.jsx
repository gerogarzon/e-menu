import React, { useState, useEffect } from "react";
import { Card, Container, Row, Col, Image } from "react-bootstrap";
import Comida from "../../resources/comidita.jpg"
import ItemCount from "./ItemCount.jsx";
import "./styles.css";

const Body = () => {
  const [items, setItems] = useState([]);
 const url = process.env.REACT_APP_URL


  useEffect(() => {
    fetch(`${url}/menus`)
      .then((response) => response.json())
      .then((data ) => setItems(data.menusDB));
  }, []);

  return (
    <>
      <Container fluid >

        {/* <Container fluid className="ancho50"> */}
        <h2 className="text-center mt-2"> Nuestro menú </h2>
        <br></br>
          <Row className="rowPersonalized">

          {items?.map((item) => {
            return (
              <Col md="3" xs>

                <Card key={item._id}
                  border="#edeef2"
                  style={{ width: "auto" }}
                  className="card-items text-dark "
                >
                  <Card.Title className="text-dark mt-2">
                    {item.title}
                  </Card.Title>
                  <Image fluid src={Comida} />
                  <Card.Text className="text-dark">
                    {item.description}
                  </Card.Text>
                  <Card.Text className="text-dark">${item.price}</Card.Text>
                  <ItemCount/>
                </Card>
              </Col>
            );
          })}
          </Row>
         <br></br>
      </Container>
    </>
  );
};

export default Body;
