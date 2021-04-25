import React from "react";
import "./JustLine.css";

function JustLine(props) {
  return (
    <div className="line">
      <h1 className=" text-center text-white text-uppercase pb-3 pt-3">
         {/* {props.name} {props.year} SPECIAL PROMO OFFERS */}
         {props.name} {props.year}
       
      </h1>
    </div>
  );
}

export default JustLine;
