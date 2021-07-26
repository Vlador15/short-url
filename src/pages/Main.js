import React, { useState, useEffect } from "react";
import Content from "../components/content/Content";
import { Header } from "../components/header/Header";
import Footer from "../components/contacts/Footer";
import History from "../components/history/History";

const Main = () => {
  const [histories, setHistories] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/links", {
      method: "get",
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => response.json())
      .then((response) => {
        setHistories(response.reverse());
      });
  }, []);

  return (
    <div className="page">
      <Header activeUrl="/" />
      <Content setHistories={setHistories} />
      <History histories={histories} />
      <Footer />
    </div>
  );
};

export default Main;
