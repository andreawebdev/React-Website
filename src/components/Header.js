import React, { Component } from 'react'
import "./Header.css";

export default class Header extends Component {
    render() {
      
        const date = new Date();
        const hours = date.getHours();
        console.log(hours);
        let time;

        const mystyle = {
          fontSize: 60,
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
          <header>
            <div
              className="point"
              style={{
                backgroundImage: `url("images/fish1.jpg")`,
              }}
            >
              <div className="container h-100">
                <div className="row h-100 align-items-center">
                  <div className="col-12 ">
                    <h1 className="text-left" style={mystyle}>
                      Good {time}!
                    </h1>
                    <h1 className="text-left" style={mystyle}>
                      Check out our wonderful
                    </h1>
                    <h1 className="text-left" style={mystyle}>
                      destinations!
                    </h1>
                    <p className="text-left text-white" style={mystyle2}>
                      We handpicked hundreds of the most spectacular summer
                      destinations all over the globe.
                    </p>
                    <p className="text-left text-white" style={mystyle2}>
                      Relax your body and soul in the most remote corners of the
                      world.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </header>
        );
    }
}
