import React from "react";
import "./JustLine.css";

function JustLine(props) {
  return (
    <section>
    <div className="line border 4px border-warning">
      <h1 className=" text-center text-white text-uppercase pb-5 pt-5">
        {props.name} {props.year}
      </h1>
    </div>
    </section>
  );
}

export default JustLine;
