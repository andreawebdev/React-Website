import React from "react";
import "./Aboutus.css";
import { useSpring, animated } from "react-spring";


// function Cards() {
//   const props = useSpring({
//     opacity: 1,
//     from: { opacity: 0 },
//   });
//   return <animated.div style={props}>I will fade in</animated.div>;
// }

// export default Cards;


function Aboutus() {
  const props = useSpring({
    opacity: 1,
    // marginTop: 0,
    // from: { opacity: 0, marginTop: 150 },
    from: { opacity: 0,  },
    // config: { delay: 1000, duration: 4000 },
    config: { duration: 2000 },
  });
  
  return (
    <section id="about">
      <div>
        <animated.h1 style={props} className="text-align py-3">
          About us
        </animated.h1>
        <div className="container py-3 ">
          <div className="row">
            <div className="col-12 col-md-6 col-lg-6 mb-4">
              <img className="about_us" src="images/maldive.jpg" />
            </div>
            <animated.div
              style={props}
              className="col-12 col-md-6 col-lg-6 text-justify "
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              ligula quam, condimentum id ipsum id, lobortis rutrum nibh. Nunc
              ut luctus dui, eu ornare lorem. Nulla lacinia sagittis augue vel
              tempus. Fusce malesuada erat nisi, eget gravida dolor porta sed.
              Duis a lacus porttitor, blandit purus id, euismod nunc. Morbi nec
              nisi et diam facilisis varius. luctus dui, eu ornare lorem. Nulla
              lacinia sagittis augue vel tempus. Fusce malesuada erat nisi, eget
              gravida dolor porta sed. Duis a lacus porttitor, blandit purus id,
              euismod nunc. Morbi nec nisi et diam facilisis varius.
              {/* <img className="about_us1 my-4" src="images/tropea.jpg" /> */}
            </animated.div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Aboutus;
