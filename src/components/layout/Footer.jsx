import React from 'react'
import "./styles.css";
import { Container, Row, Col} from "react-bootstrap";

const Footer = () => {
  return (
    <>
    <Container fluid className="footerPersonalized">
  <Row>
    <Col>1 of 3</Col>
    <Col>2 of 3</Col>
    <Col>3 of 3</Col>
  </Row>
</Container>
    </>
  )
}

export default Footer