import React, { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import copyImg from "../../img/copy.svg";
import Notify from "../notify/Notify";

const History = (props) => {
  const [show, setShow] = useState({
    status: false,
    type: "success",
    body: "",
  });

  const submitCopy = (e) => {
    console.log("aaa");
    setShow((prevState) => {
      return {
        ...prevState,
        status: true,
        time: 2000,
        body: "Ссылка сохранена в буфер обмена!",
      };
    });
    e.preventDefault();
  };

  return (
    <section className="history container">
      <h1 className="history__title">Последние сокращенные ссылки</h1>

      {props.histories.map((data, index) => {
        return (
          <div className="history__item history-item" key={index}>
            <div className="history-item__row">
              <a
                className="history-item__link"
                href={data.originalUrl}
                target="_blank"
              >
                {data.originalUrl}
              </a>
              <a
                className="history-item__link"
                href={data.modifiedUrl}
                target="_blank"
              >
                {data.modifiedUrl}
              </a>
            </div>
            <div className="history-item__row">
              <p className="history-item__count">({data.views}) просмотр(ов)</p>
              <CopyToClipboard text={data.modifiedUrl}>
                <img
                  src={copyImg}
                  alt="copy"
                  className="history-item__img"
                  onClick={submitCopy}
                />
              </CopyToClipboard>
            </div>
          </div>
        );
      })}
      <Notify show={show} setShow={setShow} />
    </section>
  );
};

export default History;
