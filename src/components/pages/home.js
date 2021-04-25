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
import  SummerDestinations from "../SummerDestinations";

function Home() {
  return (
    <>
      <Header></Header>

      <Cards name="Top six European destinations" />

      <Aboutus></Aboutus>
      <Team></Team>
      <Carosello></Carosello>
      <ApiCall></ApiCall>

      {/* <JustLine name="our summer" year="2022" /> */}
      <JustLine name="Worldwide destinations" year="2021" />
      <SummerDestinations></SummerDestinations>
      {/* <JustLine name="our Autumn" year="2023" /> */}
      <JustLine name="Latest news" year="" />

      <CardsBigger />
      <Footer />
    </>
  );
}

export default Home;
