import React, { useState } from "react";
import { Link } from "react-router-dom";

const SECTIONS = [
  { title: "Сокращение ссылок", href: "/" },
  { title: "Контакты", href: "/contacts" },
];

export const Header = ({ activeUrl = "/" }) => {
  let [active, setActive] = useState(activeUrl);

  return (
    <header className="header">
      <div className="header-top">
        <div className="row container">
          <div className="header__title">
            <h1>СОКРАЩЕНИЕ ССЫЛОК</h1>
          </div>
        </div>
      </div>

      <div className="header-bottom">
        <div className="row container">
          <div className="header__links">
            {SECTIONS.map(({ title, href }, index) => {
              let classes;
              active === href
                ? (classes = "header__link header__link-active")
                : (classes = "header__link");
              return (
                <Link
                  key={index}
                  className={classes}
                  to={href}
                  onClick={() => setActive(href)}
                >
                  {title}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </header>
  );
};
