import React from "react";
import "../../App.css";
import MiddleFolder from "../MiddleFolder";
import Cards from "../Cards";
// import CardsBigger from "../CardsBigger";
import Footer from "../Footer";
import Carosello from "../Carosello";
import Team from "../Team";
import Aboutus from "../Aboutus";

function Home() {
  return (
    <>
      <MiddleFolder />
      <Aboutus></Aboutus>
      <Cards />
      <Carosello></Carosello>
      {/* <CardsBigger /> */}
      <Team></Team>
      <Footer />
    </>
  );
}

export default Home;
