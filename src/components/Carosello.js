import React from "react";

import Carousel from "react-bootstrap/Carousel";
function Carosello() {
  return (
    <div>
      <Carousel fade>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="images/tenerife.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3 className="text-center text-white ">TENERIFE, SPAIN</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="images/venice.jpg"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>VENICE, ITALY</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="images/cuba.jpg"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>CUBA</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Carosello;
