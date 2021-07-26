import React from "react";
import Form from "../form/Form";

const Content = (props) => {
  return (
    <section className="content container">
      <h1 className="content__title">Сократите свою ссылку за пару секунд</h1>
      <p className="content__desc">
        помощью нашего сервиса Вы сможете превратить длинную и нечитабельную
        ссылку в короткую и удобную. <br />
        Сокращайте ссылки и делитесь ими с друзьями!
        <br />
        Наши URL ссылки - безопасны, удобны и бесплатны!
      </p>

      <Form setHistories={props.setHistories} />
    </section>
  );
};

export default Content;
