import React from "react";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import "./Summer.css";

import { LinkContainer } from "react-router-bootstrap";
import { useSpring, animated } from "react-spring";

function SummerDestinations() {
  const props = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { delay: 0, duration: 1000 },
  });

  return (
    <section id="destinations">
      <animated.div style={props} className="cards"></animated.div>
      <div className="container my-4 mb-4 text-center">
        <div className="row">
          <div className="col-md-6">
            <p className="py-5 text-justify">
              From destination weddings to corporate retreats to family
              reunions, turn your special occasion into a memorable getaway with
              the experts at Liberty Group Travel. They’ll plan a custom group
              vacation package complete with elevated services, exclusive rates,
              and unique amenities for a celebration you and your guests will
              never forget. Lorem ipsum dolor sit amet, consectetur adipiscing
              elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem
              ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum
              dolor sit amet, consectetur adipiscing elit.
            </p>
            <button className="btn btn-custom ">Plan a group tour</button>
          </div>
          <div className="col-md-6 my-3">
        
            <Image className="responsive" src="images/ss.jpeg" roundedCircle />
          </div>
        </div>
      </div>
    </section>
  );
}

export default SummerDestinations;
