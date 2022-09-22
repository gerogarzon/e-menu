import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faGithub, faInstagram, faFacebook, faTwitter}  from "@fortawesome/free-brands-svg-icons";

import "./styles.css";
const Footer = () => {
  return (
    <>
      <div className="footer-basic">
        <footer>
          <div className="social">
            <a href="https://github.com/gerogarzon/e-menu" target="_blank" rel="noreferrer"> 
            <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href="/Error404" target="_blank" rel="noreferrer"> 
            <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a href="/Error404" target="_blank" rel="noreferrer"> 
            <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a href="/Error404" target="_blank" rel="noreferrer"> 
            <FontAwesomeIcon icon={faGithub} />
            </a>
          </div >
          <ul className="list-inline py-2">
            <li className="list-inline-item">
              <a href="/">Inicio</a>
            </li>
            <li className="list-inline-item">
              <a href="/sobreNosotros">Sobre nosotros</a>
            </li>
            <li className="list-inline-item">
              <a href="/Error404">Privacy Policy</a> 
            </li>
          </ul>
      <div className="copyright-container text-center w-auto py-2">
        <p className="copyright">
          e-menu © 2022 | Developed by Geronimo Garzon & Ivan Roldan C20I- Rolling Code
        </p>
      </div>
        </footer>
      </div>
    </>
  );
};

export default Footer;
