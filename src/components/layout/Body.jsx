import React from "react";
import { Card, Container } from "react-bootstrap";
import Logo from '../../resources/logo.png'
const Body = () => {
  return (
    <>
    <Container fluid>
      <Card border="dark" style={{ width: 'auto', height: '50px' }} className="bg-whithe text-dark ">
        <Card.Img  style={{ width: 'auto', height: '500px' }} src={Logo} alt="Card image" />
        <Card.ImgOverlay >
          <Card.Title className="text-white">Card title</Card.Title>
          <Card.Text className="text-white">
              aaaaaaaaaaadadsacsdc
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </Card.Text>
          <Card.Text className="text-white" >Last updated 3 mins ago</Card.Text>
        </Card.ImgOverlay>
      </Card>
      </Container>
    </>
  );
};

export default Body;
