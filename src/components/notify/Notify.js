import React, { useState, useEffect } from "react";

/*
import Notify from "../notify/Notify";

const [show, setShow] = useState({
    status: false,
    type: "success",
    body: "",
});

const addNotify = () => {
    setShow((prevState) => {
      return {
        ...prevState,
        status: true,
        time: 5000,
        body: "Текст уведомления!",
      };
    });
}

<Notify show={show} setShow={setShow} />
*/

const Notify = ({ show, setShow }) => {
  const { title = "Уведомление", body, time = 5000, type = "success" } = show;

  const COLORS_TYPES = {
    success: "#87ffac",
    error: "#ffc7d1",
  };

  useEffect(() => {
    let timerId = setTimeout(() => {
      setShow((prevState) => {
        return {
          ...prevState,
          status: false,
        };
      });
    }, time);

    return () => {
      clearTimeout(timerId);
    };
  }, [show.status]);

  return (
    <div
      className={`notify ${show.status ? "activeShow" : "inactiveShow"}`}
      style={{ background: COLORS_TYPES[type] }}
    >
      <div className="notify__title">
        <p>{title}</p>
      </div>
      <div className="notify__body">
        <p>{body}</p>
      </div>
    </div>
  );
};

export default Notify;
