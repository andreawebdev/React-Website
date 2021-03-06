import React from "react";
import "../../App.css";
import Cards from "../Cards";
import CardsBigger from "../CardsBigger";
import Footer from "../Footer";
import Team from "../Team";
import Carosello from "../Carosello";
import Aboutus from "../Aboutus";
import JustLine from "../JustLine";
import Header from "../Header";
import  SummerDestinations from "../SummerDestinations";

function Home() {
  return (
    <>
      <Header></Header>
      <Cards name="Top six European destinations" />
      <Carosello></Carosello>
      <Aboutus></Aboutus>
      <Team></Team>
      <JustLine name="Getaways with the Entire Group" year="2021" />
      <SummerDestinations></SummerDestinations>
      <JustLine name="Latest news" year="" />
      <CardsBigger />
      <Footer />
    </>
  );
}

export default Home;
