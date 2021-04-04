import React from "react";
import "../../App.css";
import MiddleFolder from "../MiddleFolder";
import Cards from "../Cards";
import CardsBigger from "../CardsBigger";

function Home() {
  return (
    <>
      <MiddleFolder />
      <Cards></Cards>

      <CardsBigger></CardsBigger>
    </>
  );
}

export default Home;
