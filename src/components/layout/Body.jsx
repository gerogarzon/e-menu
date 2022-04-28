import React, {useState, useEffect} from "react";
import { Card, Container, Row, Col } from "react-bootstrap";

import Caliente from "../../resources/caliente.jpg";
// import Fria from "../../resources/frias.jpg"
// import Postres from "../../resources/postres.jpg"
// import Bebidas from "../../resources/bebidas.jpg"
// import logo from "../../resources/logo.png"
import "./styles.css";

const Body = () => {
   
  const [category, setCategories] = useState([]);
  // const url = 'http://localhost:3100/menus'

  useEffect(() => {
    fetch('http://localhost:3100/api/menus')
    
    .then((response) =>  response.json())
    .then((data) => setCategories(data.menusDB))
  },[])

  return (
    <>
    <Container fluid className="ancho100">
      <Container fluid className="ancho50">
        <Row className="rowPersonalized">
          <Col className="paddingBtn">
            {category.map(item => {
              return (
                <Card
              border="dark"
              style={{ width: "100%", height: "200px" }}
              className="bg-whithe text-dark "
            >
              <Card.Img
                style={{ width: "100%", height: "200px" }}
                src={Caliente}
                alt="Card image"
              />
              <Card.ImgOverlay >
                <Card.Title className="text-dark">
                 {item.title}
                </Card.Title>
                <Card.Text className="text-dark">
                {item.description}
                </Card.Text>
                <Card.Text className="text-dark">
                ${item.price}
                </Card.Text>
              </Card.ImgOverlay>
            </Card>
              )
            })}
            
          </Col>
        </Row>
        {/* <Row className="rowPersonalized">
          <Col className="paddingBtn">
            <Card
              border="dark"
              style={{ width: "auto", height: "200px" }}
              className="bg-whithe text-dark "
            >
              <Card.Img
                style={{ width: "auto", height: "200px" }}
                src={Fria}
                alt="Card image"
              />
              <Card.ImgOverlay>
                <Card.Title className="text-white">Comidas Frias</Card.Title>
                <Card.Text className="text-white">
                  Decription dossssssssssssssssssssssssssssssssssssssssss
                </Card.Text>
              </Card.ImgOverlay>
            </Card>
          </Col>
        </Row>
        <Row className="rowPersonalized">
          <Col className="paddingBtn">
            <Card
              border="dark"
              style={{ width: "auto", height: "200px" }}
              className="bg-whithe text-dark "
            >
              <Card.Img
                style={{ width: "auto", height: "200px" }}
                src={Postres}
                alt="Card image"
              />
              <Card.ImgOverlay>
                <Card.Title className="text-white">Postres</Card.Title>
                <Card.Text className="text-white">
                  aaaaaaaaaaadadsacsdc terceraaaaaaaaaaaaaaaaaaa
                </Card.Text>
              </Card.ImgOverlay>
            </Card>
          </Col>
        </Row>
        <Row className="rowPersonalized">
          <Col className="paddingBtn">
            <Card
              border="dark"
              style={{ width: "auto", height: "200px" }}
              className="bg-whithe text-dark "
            >
              <Card.Img
                style={{ width: "auto", height: "200px" }}
                src={Bebidas}
                alt="Card image"
              />
              <Card.ImgOverlay>
                <Card.Title className="text-white">Bebidas</Card.Title>
                <Card.Text className="text-white">
                  aaaaaaaaaaadadsacsdc cuartaaaaaa
                </Card.Text>
              </Card.ImgOverlay>
            </Card>
          </Col>
        </Row> */}
      </Container>
      </Container>
    </>
  );
};

export default Body;
