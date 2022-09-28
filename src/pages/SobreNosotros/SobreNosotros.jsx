import React from "react";
import { Card } from "react-bootstrap";
import Header from "../../components/layout/header";
import Footer from "../../components/layout/Footer";
import "./sobreNosotros.css";
import gero from "../../resources/gero.jpg";
import ivan from "../../resources/ivan.jpeg";

const SobreNosotros = () => {
  return (
    <>
      <Header />
      <div className="sobrenos-container">
        <Card className="sobreNosotros-items" style={{ width: "18rem" }}>
          <Card.Img
            className="card-imagen"
            variant="top"
            src={gero}
            alt="creator image"
          />
          <Card.Body>
            <Card.Title>Geronimo Garzon</Card.Title>
            <Card.Text>
              Hola! Mi nombre es geronimo, MERN Full Stack Developer e Ingeniero
              Industrial. Me apasiona la tecnologia e intento estar siempre a la
              altura de la vanguardia mundial. Puedes contactarme con los links
              de abajo. Saludos!
            </Card.Text>
          </Card.Body>
          <Card.Body>
            <Card.Link
              className="cardLink"
              href="https://www.linkedin.com/in/geronimo-garzon/"
              target="_blank"
            >
              Linkedin
            </Card.Link>
            <Card.Link
              className="cardLink"
              href="https://github.com/gerogarzon"
              target="_blank"
            >
              Github
            </Card.Link>
          </Card.Body>
        </Card>

        <Card className="sobreNosotros-items" style={{ width: "18rem" }}>
          <Card.Img
            className="card-imagen"
            variant="top"
            src={ivan}
            alt="creator image"
          />
          <Card.Body>
            <Card.Title>Ivan Roldan</Card.Title>
            <Card.Text>
              Tengo más de 10 años de experiencia profesional. Tengo experiencia
              en finanzas y gestión de programas. En los últimos años me he
              especializado en generación de leads y manejo masivo de datos para
              generar ventas y nuevas oportunidades de negocio.Tengo pasión por
              la tecnología y esto me llevó a hacer un Bootcamp para convertirme
              en desarrollador Full Stack. Estoy buscando mi próxima oportunidad
              de trabajo.
            </Card.Text>
          </Card.Body>
          <Card.Body>
            <Card.Link
              className="cardLink"
              href="https://www.linkedin.com/in/iv%C3%A1n-el%C3%ADas-rold%C3%A1n-130b72174/"
              target="_blank"
            >
              Linkedin
            </Card.Link>
            <Card.Link
              className="cardLink"
              href="https://github.com/IERoldan"
              target="_blank"
            >
              Github
            </Card.Link>
          </Card.Body>
        </Card>
      </div>

      <Footer />
    </>
  );
};

export default SobreNosotros;
