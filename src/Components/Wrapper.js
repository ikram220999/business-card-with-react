import React from "react";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import MainContent from "./MainContent/MainContent";

export default function Wrapper() {
  return (
    <div className="container">
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
}
