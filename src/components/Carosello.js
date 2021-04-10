import React from 'react'

import Carousel from "react-bootstrap/Carousel";
function Carosello() {
    return (
      <div>
        <Carousel fade>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="images/img-8.jpg"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>Lorem</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="images/mare.jpg"
              alt="Second slide"
            />

            <Carousel.Caption>
              <h3>Lorem</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="images/img-9.jpg"
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3>Lorem</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    );
}

export default Carosello
