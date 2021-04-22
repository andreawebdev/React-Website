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
    marginTop: 0,
    from: { opacity: 0, marginTop: 150 },
    config: { delay: 1000, duration: 4000 },
  });
  
  return (
    <div>
      <animated.h1 style={props} className="text-align my-4" id="about">About us</animated.h1>
      <div className="container my-5 ">
        <div className="row">
          <div className="col-12 col-md-6 col-lg-6 mb-4">
            <img className="about_us" src="images/aboutus.jpg" />
          </div>
          <animated.div style={props} className="col-12 col-md-6 col-lg-6 text-justify ">
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
          </animated.div>
        </div>
      </div>
    </div>
  );
}

export default Aboutus;
