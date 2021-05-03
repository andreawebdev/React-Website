import React from "react";
import Container from "react-bootstrap/Container";
// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";
// import Card from "react-bootstrap/Card";
// import "./Cards.css";
// import Button from "react-bootstrap/Button";
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
          <div className="col-md-7">
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
            <button className="btn btn-custom my-5">Plan a group tour</button>
          </div>
          <div className="col-md-5">
            <img src="images/ss.jpeg"></img>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SummerDestinations;
