import React from "react";
import "../App.css";
import "./MiddleFolder.css";

function MiddleFolder() {
  const date =new Date()
  const hours=date.getHours()
  let time

  if (hours<12){
    time="morning"
  }else if (hours >=12 && hours<18){
    time="afternoon"
  }else  (
    time="evening"
  )
  
  return (
    <div className="hero-container">
      <video src="/videos/naturefree.mp4" autoPlay loop muted />
      {/* <p className="my-4">GOOD {time}!</p> */}
      <h1>Good {time}! It's time to book your holiday!</h1>
      {/* <p>What are you waiting for?</p> */}
    </div>
  );
}

export default MiddleFolder;
