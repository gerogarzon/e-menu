import React, { useState, useEffect } from "react";
import { Card, Container, Row, Col, Image } from "react-bootstrap";
import Cookie from "../../resources/icons/galletas.png"
const Categories = () => {
  const [category, setCategory] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3100/api/categories")
      .then((response) => response.json())
      .then((data) => setCategory(data.categoriesDB));
  }, []);

  return (
    <>
      <Container >
        <br />

        <Row className="rowPersonalized">
          {category?.map((categories) => {
            return (
              <Col key={categories._id}>
                <Card
                  key={categories._id}
                  border="#edeef2"
                  style={{ width: "auto" }}
                  className="card-categories "
                >
                  <Row>
                    <Col md={4}>
                      <Image  src={Cookie} className="img-category "/>
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
        </Row>
        <br></br>
      </Container>
    </>
  );
};

export default Categories;
