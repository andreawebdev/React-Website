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
    <header
      className="middle "
      style={{
        backgroundImage: `src("images/fish.jpg")`,
      }}
    >
      {/* <img src="images/fish.jpg" /> */}
      <div className="container h-100">
        <div className="row h-100 align-items-center">
          <div className="col-12 text-center">
            <h1 style={mystyle}>Good {time}! Book now your dream holiday!</h1>
            <p className="lead">A great starter layout for a landing page</p>
          </div>
        </div>
      </div>
    </header>
  );
}

export default MiddleFolder;
  