import React from "react";
import "../../App.css";

import Cards from "../Cards";
// import CardsBigger from "../CardsBigger";
import Footer from "../Footer";
import Carosello from "../Carosello";
import Team from "../Team";
import Aboutus from "../Aboutus";
import JustLine from "../JustLine";
import Header from "../Header";

function Home() {
  return (
    <>
      <Header></Header>

      {/* <Aboutus></Aboutus> */}
      {/* <JustLine name="our summer" /> */}
      <Cards />
      <Aboutus></Aboutus>
       <JustLine name="our summer" />
      <Carosello></Carosello>
      {/* <CardsBigger /> */}
     
      <JustLine name="our winter" />
      <Team></Team>
      <Footer />
    </>
  );
}

export default Home;
