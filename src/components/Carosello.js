import React from "react";
import Carousel from "react-bootstrap/Carousel";

function Carosello() {
  return (
    <div>
      <Carousel fade>
        <Carousel.Item interval={1000}>
          <img
            className="d-block w-100"
            src="images/tenerife.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3 className="text-center text-white ">TENERIFE, SPAIN</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={1000}>
          <img
            className="d-block w-100"
            src="images/venice.jpg"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3 className="text-center text-white ">VENICE,ITALY</h3>
            <p></p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Carosello;
