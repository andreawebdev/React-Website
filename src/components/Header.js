import React, { Component } from 'react'
import "./Header.css";

export default class Header extends Component {
    render() {
        const date = new Date();
        const hours = date.getHours();
        console.log(hours);
        let time;

        const mystyle = {
          fontSize: 80,
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
                backgroundImage: `url("images/fish.jpg")`,
              }}
            >
              <div className="container h-100">
                <div className="row h-100 align-items-center">
                  <div className="col-12 text-center">
                    <h1 style={mystyle}>
                      Good {time}! Book now your dream holiday!
                    </h1>
                   
                  </div>
                </div>
              </div>
            </div>
          </header>
        );
    }
}
