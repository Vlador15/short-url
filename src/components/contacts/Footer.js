import React from "react";
import imgLink from "../../img/link.svg";

const Footer = (props) => {
  return (
    <footer className="footer">
      <div className="footer-box container">
        <div className="footer__items">
          <div className="footer__item">
            <img src={imgLink} alt="logo" className="footer__img" />
          </div>
        </div>

        <div className="footer__items">
          <div className="footer__item">
            <h4>Наши работы</h4>
            <p>
              <a href="#" target="_blank">
                Сокращение ссылок
              </a>
            </p>
          </div>
        </div>

        <div className="footer__items">
          <div className="footer__item">
            <h4>Контакты</h4>
            <p>
              Группа:{" "}
              <a href="https://vk.com/spectradev" target="_blank">
                https://vk.com/spectradev
              </a>
            </p>
            <p>Copyright © Spectra 2021</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
