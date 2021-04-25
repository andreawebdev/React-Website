import React from "react";
import "./JustLine.css";

function JustLine(props) {
  return (
    <div className="line">
      <h1 className="pt-5 text-white text-uppercase pr-2">
         {/* {props.name} {props.year} SPECIAL PROMO OFFERS */}
         {props.name} {props.year} 
       
      </h1>
    </div>
  );
}

export default JustLine;
