import React from "react";
import "../App.css";
import "./MiddleFolder.css";

function MiddleFolder() {
  const date =new Date()
  const hours=date.getHours()
  console.log(hours)
  let time
   
  const  mystyle={

   fontSize:80
  }
  
  if (hours<12){
    time="morning"
    mystyle.color="white"
  } else if (hours >=12 && hours<18){
    time="afternoon"
        mystyle.color="yellow"
  }else  (
    time="evening"
  )
  
  return (
    <div className="hero-container">
      <video src="/videos/naturefree.mp4" autoPlay loop muted />
      
      <h1 style={mystyle}>Good {time}! It's time to book your holiday!</h1>
      
    </div>
  );
}

export default MiddleFolder;
