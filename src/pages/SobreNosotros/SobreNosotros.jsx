import React from "react";
import { Card } from "react-bootstrap";
import Header from "../../components/layout/header";
import Footer from "../../components/layout/Footer";
import "./sobreNosotros.css";
import gero from "../../resources/gero.jpg";

const SobreNosotros = () => {
  return (
    <>
      <Header />
      <div className="sobrenos-container">
        <Card  className="sobreNosotros-items"style={{ width: "18rem" }}>
          <Card.Img className="card-imagen" variant="top" src={gero} alt="creator image" />
          <Card.Body>
            <Card.Title>Geronimo Garzon</Card.Title>
            <Card.Text>
            Hola! Mi nombre es geronimo, MERN Full Stack Developer e Ingeniero Industrial. Me apasiona la tecnologia e intento estar siempre a la altura de la vanguardia mundial. Puedes contactarme con los links de abajo. Saludos!
            </Card.Text>
          </Card.Body>        
          <Card.Body>
            <Card.Link className="cardLink" href="https://www.linkedin.com/in/geronimo-garzon/" target="_blank">Linkedin</Card.Link>
            <Card.Link className="cardLink"  href="https://github.com/gerogarzon" target="_blank">Github</Card.Link>
          </Card.Body>
        </Card>

        {/* <Card className="sobreNosotros-items" style={{ width: "18rem" }}>
          <Card.Img className="card-imagen" variant="top" src={gero} alt="creator image"/>
          <Card.Body>
            <Card.Title>Ivan Roldan</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>         
          <Card.Body>
            <Card.Link className="cardLink" href="#" target="_blank">Card Link</Card.Link>
            <Card.Link className="cardLink" href="#" target="_blank">Another Link</Card.Link>
          </Card.Body>
        </Card> */}
      </div>
     

      <Footer />
    </>
  );
};

export default SobreNosotros;
