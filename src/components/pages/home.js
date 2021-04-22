import React from "react";
import "../../App.css";
import MiddleFolder from "../MiddleFolder";
import Cards from "../Cards";
// import CardsBigger from "../CardsBigger";
import Footer from "../Footer";
import Carosello from "../Carosello";
import Team from "../Team";
import Aboutus from "../Aboutus";
import JustLine from "../JustLine";

function Home() {
  return (
    <>
      <MiddleFolder />
      <Aboutus></Aboutus>
      <JustLine name="our summer" />
      <Cards />
      <Carosello></Carosello>
      {/* <CardsBigger /> */}
      <JustLine name="our winter" />
      <Team></Team>
      <Footer />
    </>
  );
}

export default Home;
