import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./styles.css";
const Footer = () => {
  return (
    <>
      <div className="footer-basic">
        <footer>
          <div className="social">
            <a href="#">
              <i className="fa-brands fa-twitter"></i>
            </a>
            <a href="#">
              <i className="icon ion-social-snapchat"></i>
            </a>
            <a href="#">
              <i className="icon ion-social-twitter"></i>
            </a>
            <a href="#">
              <i className="icon ion-social-facebook"></i>
            </a>
          </div>
          <ul className="list-inline">
            <li className="list-inline-item">
              <a href="#">Inico</a>
            </li>
            <li className="list-inline-item">
              <a href="#">Sobre nosotros</a>
            </li>
            <li className="list-inline-item">
              <a href="#">Privacy Policy</a> 
            </li>
          </ul>
        </footer>
      </div>
      <div className="copyright-container">
        <p className="copyright">
          e-menu © 2022 | Designed With by C20I- Rolling Rode
        </p>
      </div>
    </>
  );
};

export default Footer;
