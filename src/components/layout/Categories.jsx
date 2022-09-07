import React, { useState, useEffect } from "react";
import { Card, Container, Row, Col, Image } from "react-bootstrap";
import todos from "../../resources/diet.png";
const URL = process.env.REACT_APP_URL;

const Categories = ({ filterByCategory, notFilter }) => {
  const [category, setCategory] = useState([]);

  useEffect(() => {
    fetch(`${URL}/api/categories`)
      .then((response) => response.json())
      .then((data) => setCategory(data.categoriesDB));
  }, []);

  return (
    <>
      <Container className="categoriesMainContainer">
        <br />

        <Row className="rowPersonalized">
          {category?.map((categories) => {
            return (
              <Col key={categories._id} className="categoriesCol">
                <Card
                  onClick={() => filterByCategory(categories.name)}
                  key={categories._id}
                  border="#edeef2"
                  style={{ width: "auto" }}
                  className="card-categories"
                >
                  <Row>
                    <Col md={4}>
                      <Image
                        src={categories.picture}
                        className="img-category"
                      />
                    </Col>
                    <Col md={8}>
                      <Card.Title className="name-category m-2">
                        {categories.name}
                      </Card.Title>
                    </Col>
                  </Row>
                </Card>
                <br />
              </Col>
            );
          })}

          <Col className="categoriesCol">
            <Card
              onClick={() => notFilter()}
              border="#edeef2"
              style={{ width: "auto" }}
              className="card-categories"
            >
              <Row>
                <Col md={4}>
                  <Image src={todos} alt={"todos"} className="img-category" />
                </Col>
                <Col md={8}>
                  <Card.Title className="name-category m-2">Todos</Card.Title>
                </Col>
              </Row>
            </Card>
            <br />
          </Col>
        </Row>
        <br></br>
      </Container>
    </>
  );
};

export default Categories;
