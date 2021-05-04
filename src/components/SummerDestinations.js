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
             Mauris leo purus, luctus et enim ut, euismod fringilla metus. Nam vestibulum dapibus massa, sit amet malesuada lacus dapibus non. Vivamus vitae erat odio. Maecenas vitae finibus tortor. Sed sed est fringilla, congue dui at, interdum mi. Vestibulum mattis orci felis, sed pellentesque odio rutrum ut. Vestibulum porttitor magna metus, eget convallis quam tempus at. Morbi convallis, sem vel mattis pellentesque, sapien nulla cursus enim, dapibus ornare enim odio sed libero. Nullam blandit ipsum et velit venenatis, ut feugiat mauris dignissim. Nullam iaculis purus dapibus porta commodo. Nullam sit amet enim nec nisi egestas pulvinar id sit amet ipsum. Quisque ullamcorper elit id turpis vehicula, id egestas ligula ornare. Integer vel ultricies mi, nec iaculis mauris. Donec vitae nibh placerat metus facilisis ullamcorper.

Quisque ut laoreet ante. Quisque ut fringilla nunc. Integer ut lorem justo. Quisque sed tortor elit. Duis hendrerit quam in posuere consequat. Donec sit amet dolor nec.
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
