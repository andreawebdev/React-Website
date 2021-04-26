import React, { Component } from "react";
import Carousel from "react-bootstrap/Carousel";
import "./Header.css";

export default class Header extends Component {
  render() {
    const date = new Date();
    const hours = date.getHours();
  
    let time;

    const mystyle = {
      fontSize: 40,
    };
    const mystyle2 = {
      fontSize: 20,
    };

    if (hours < 12) {
      time = "morning";
      mystyle.color = "rgb(223, 226, 28)";
    } else if (hours >= 12 && hours < 18) {
      time = "afternoon";
      mystyle.color = "rgb(226, 160, 28)";
    } else time = "evening";

    mystyle.color = "rgb(251, 217, 3 )";
    
    
    
            

    return (
      <header
        class="masthead "
        style={{
          backgroundImage: `url("images/tenerife.jpg")`,
        }}
      >
        <div class="container h-100">
          <div class="row h-100 align-items-center">
            <div class="col-12 text-center ">
              <h1 className="text-left " style={mystyle}>
                Good {time}!
              </h1>
              <h1 className="text-left " style={mystyle}>
                Check out our wonderful
              </h1>
              <h1 className="text-left " style={mystyle}>
                destinations!
              </h1>
              <p className="text-left text-white" style={mystyle2}>
                Relax your body and soul in the most remote corners of the
                world.
              </p>
            </div>
          </div>
        </div>

        
      </header>
    );
  }
}
