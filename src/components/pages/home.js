import React from "react";
import "../../App.css";
import MiddleFolder from "../MiddleFolder";
import Cards from "../Cards";
// import CardsBigger from "../CardsBigger";
import Footer from "../Footer";
import Carosello from "../Carosello";
import Team from "../Team";

function Home() {
  return (
    <>
      <MiddleFolder />
      <Cards />
      <Carosello></Carosello>
      {/* <CardsBigger /> */}
      <Team></Team>
      <Footer />
    </>
  );
}

export default Home;
