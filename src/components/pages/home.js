import React from "react";
import "../../App.css";
import MiddleFolder from "../MiddleFolder";
import Cards from "../Cards";
import CardsBigger from "../CardsBigger";
import Footer from "../Footer";

function Home() {
  return (
    <>
      <MiddleFolder />
      <Cards/>
      <CardsBigger/>
      <Footer />
    </>
  );
}

export default Home;
