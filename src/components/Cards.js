import React from "react";
import "./Cards.css";
import Card from "react-bootstrap/Card";
import CardColumns from "react-bootstrap/CardColumns";
import Button from "react-bootstrap/Button";
import { LinkContainer } from "react-router-bootstrap";
import { useSpring, animated } from "react-spring";


function Cards (properties) {
  
     const props = useSpring({
       opacity: 1,
       from: { opacity: 0,},
       config:{delay:0, duration:2000},
     });
    
     
    return (
      <section id="destinations">
        <animated.h1 style={props} className="text-center text-dark py-5 ">
          {properties.name}
        </animated.h1>
        <CardColumns className="text-center">
          <Card>
            <Card.Img variant="top" src="images/roma.jpg" rounded />
            <Card.Body>
              <Card.Title>Roma</Card.Title>
              <Card.Text>
                <p>18.00 £ person</p>
              </Card.Text>
              <Button variant="outline-warning" className="btn-custom ">
                Book now
              </Button>
            </Card.Body>
          </Card>
          <Card>
            <Card.Img variant="top" src="images/london.jpg" rounded />
            <Card.Body>
              <Card.Title>London</Card.Title>
              <Card.Text>
                <p>45 £ person</p>
              </Card.Text>
              <Button variant="outline-warning" className="btn-custom ">
                Book now
              </Button>
            </Card.Body>
          </Card>

          <Card>
            <Card.Img variant="top" src="images/barcellona.jpg" rounded />
            <Card.Body>
              <Card.Title>Barcellona</Card.Title>
              <Card.Text>
                <p>75 £ person</p>
              </Card.Text>
              <Button variant="outline-warning" className="btn-custom ">
                Book now
              </Button>
            </Card.Body>
          </Card>

          <Card>
            <Card.Img variant="top" src="images/paris.jpg" rounded />
            <Card.Body>
              <Card.Title>Paris</Card.Title>
              <Card.Text>
                <p>95 £ person</p>
              </Card.Text>
              <Button variant="outline-warning" className="btn-custom ">
                Book now
              </Button>
            </Card.Body>
          </Card>
          <Card>
            <Card.Img variant="top" src="images/dublin.jpg" rounded />
            <Card.Body>
              <Card.Title>Dublin</Card.Title>
              <Card.Text>
                <p>105 £ person</p>
              </Card.Text>
              <Button variant="outline-warning" className="btn-custom " rounded>
                Book now
              </Button>
            </Card.Body>
          </Card>

          <Card>
            <Card.Img variant="top" src="images/praga.jpg" rounded />
            <Card.Body>
              <Card.Title>Praga</Card.Title>
              <Card.Text>
                <p>55 £ person</p>
              </Card.Text>
              <Button variant="outline-warning" className="btn-custom ">
                Book now
              </Button>
            </Card.Body>
          </Card>
        </CardColumns>
      </section>
    );
  
}

export default Cards;
