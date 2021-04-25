import React from "react";
import "./JustLine.css";

function JustLine(props) {
  return (
    <div className="line border border-warning">
      <h1 className=" text-center text-white text-uppercase pb-5 pt-5">
        {props.name} {props.year}
      </h1>
    </div>
  );
}

export default JustLine;
