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
          mystyle.color = "white";
        } else if (hours >= 12 && hours < 18) {
          time = "afternoon";
          mystyle.color = "yellow";
        } else time = "evening";
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
                      Hundreds of destinations
                    </h1>
                    <h1 className="text-left" style={mystyle}>
                      worldwide!
                    </h1>
                    <p className="text-left text-white" style={mystyle2}>
                      We handpicked hundreds of the most spectacular summer
                      destinations all over the globe. 
                    </p>
                    <p className="text-left text-white" style={mystyle2}>
                       Relax your body and soul
                      in the most remote corners of the world.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </header>
        );
    }
}
