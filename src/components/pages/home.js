import React from "react";
import "../../App.css";

import Cards from "../Cards";
import CardsBigger from "../CardsBigger";
import Footer from "../Footer";
import Carosello from "../Carosello";
import Team from "../Team";
import Aboutus from "../Aboutus";
import JustLine from "../JustLine";
import Header from "../Header";
import  ApiCall from "../ApiCall";

function Home() {
  return (
    <>
      <Header></Header>

      <Cards />

      <Aboutus></Aboutus>
      <Team></Team>
      <Carosello></Carosello>
      <ApiCall></ApiCall>

      <JustLine name="our summer" year="2022" />
      <CardsBigger />
      <JustLine name="our Autumn" year="2023" />
      <Cards />

      <Footer />
    </>
  );
}

export default Home;
