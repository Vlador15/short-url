import React from "react";
import Footer from "../components/contacts/Footer";
import { Header } from "../components/header/Header";

const Contacts = () => {
  return (
    <div className="page">
      <Header activeUrl="/contacts" />
      <Footer />
    </div>
  );
};

export default Contacts;
