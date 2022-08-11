import React from "react";
import Header from "../../components/layout/Header";
import Footer from "../../components/layout/Footer";
import { Container } from "react-bootstrap";
import "./Error404.css";

const Error404 = () => {
  return (
    <>
      <Container className="mainContainer404" fluid>
        <Header />
        <div className="error-container">
          
          <img className="error-item" src="https://st4.depositphotos.com/15951226/20148/v/380/depositphotos_201487234-stock-illustration-flat-line-icon-concept-of.jpg?forcejpeg=true"></img>
        </div>
        <Footer className="error-footer"/>
      </Container>
    </>
  );
};

export default Error404;