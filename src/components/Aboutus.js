import React from "react";
import "./Aboutus.css";

function Aboutus() {
  return (
    <div>
      <h1 className="text-align my-4" id="about">About us</h1>
      <div className="container my-5 ">
        <div className="row">
          <div className="col-12 col-md-6 col-lg-6 mb-4">
            <img className="about_us" src="images/aboutus.jpg" />
          </div>
          <div className="col-12 col-md-6 col-lg-6 text-justify ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            ligula quam, condimentum id ipsum id, lobortis rutrum nibh. Nunc ut
            luctus dui, eu ornare lorem. Nulla lacinia sagittis augue vel
            tempus. Fusce malesuada erat nisi, eget gravida dolor porta sed.
            Duis a lacus porttitor, blandit purus id, euismod nunc. Morbi nec
            nisi et diam facilisis varius. 
            luctus dui, eu ornare lorem. Nulla lacinia sagittis augue vel
            tempus. Fusce malesuada erat nisi, eget gravida dolor porta sed.
            Duis a lacus porttitor, blandit purus id, euismod nunc. Morbi nec
            nisi et diam facilisis varius. 
          </div>
        </div>
      </div>
    </div>
  );
}

export default Aboutus;
