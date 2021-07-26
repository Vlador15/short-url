import React, { useState } from "react";
import Notify from "../notify/Notify";

const Form = (props) => {
  const [show, setShow] = useState({
    status: false,
    type: "success",
    body: "",
  });

  const [value, setValue] = useState("");
  const [error, setError] = useState("");

  const getLink = () => {
    if (value.trim() === "") return;
    if (error) return;
    // запрос на сервер для получения сокращенной ссылки и возвращение данных

    fetch("http://localhost:5000/api/link", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        originalUrl: value,
      }),
    })
      .then((response) => response.json())
      .then((response) => {
        console.log(response);

        props.setHistories((prevState) => [
          {
            originalUrl: response.link.originalUrl,
            modifiedUrl: response.link.modifiedUrl,
            views: 0,
          },
          ...prevState,
        ]);
      });

    // - - - - - - -

    setValue("");
    setError("");
    setShow((prevState) => {
      return {
        ...prevState,
        status: true,
        body: "Вы успешно сократили ссылку!",
      };
    });
  };

  // проверка на валидность url
  const checkValue = (e) => {
    if (e.keyCode === 8) return; // backspace

    let valueData = value.trim();
    if (!valueData.includes("http")) valueData = "http://" + valueData;

    let reg = /\.(ru|com|su|ua|рф|рус|org|xyz)/;
    if (!reg.test(valueData)) {
      setError("URL должен содержать любой из доменов: ru/com/su и тд");
    } else setError("");

    setValue(valueData);
    if (e.keyCode === 13) getLink(); // enter
  };

  const onKeyUp = (e) => {
    checkValue(e); // проверка введенного URL + передает коды кнопок
  };

  return (
    <div className="content__form form">
      <div className="form__row">
        <input
          type="text"
          className="form__input"
          placeholder="Введите URL"
          value={value ? value : ""}
          onChange={(e) => setValue(e.target.value)}
          onKeyUp={onKeyUp}
        />
        <button className="form__btn" onClick={getLink}>
          Сократить
        </button>
      </div>
      <div className="form__row">
        {error && <p className="form__error">{error}</p>}
      </div>

      <Notify show={show} setShow={setShow} />
    </div>
  );
};

export default Form;
