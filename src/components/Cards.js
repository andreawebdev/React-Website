import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import "./Cards.css";
import Button from "react-bootstrap/Button";
import { LinkContainer } from "react-router-bootstrap";
import { useSpring, animated } from "react-spring";






function Cards () {
  
     const props = useSpring({
       opacity: 1,
       from: { opacity: 0,},
       config:{delay:2000, duration:8000},
     });
    
    return (
      <animated.div style={props} className="cards">
        <h1 className="text-center text-dark py-5 pb-5">
          Check out our wonderful destinations!
        </h1>

        <Container>
          <Row>
            <Col lg={4} md={6}>
              <Card className="text-center  " style={{ width: "18rem" }}>
                <Card.Img variant="top rounded " src="images/img-9.jpg" />
                <Card.Body>
                  <Card.Title>Adventure</Card.Title>
                  <Card.Text>
                    <p>
                      "Neque porro quisquam est qui dolorem ipsum quia dolor sit
                      amet, consectetur, adipisci velit..."
                    </p>
                  </Card.Text>
                  <LinkContainer to="/services">
                    <Button variant="outline-warning" className="btn-custom ">
                      Book now
                    </Button>
                  </LinkContainer>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={4} md={6}>
              <Card className="text-center my-4" style={{ width: "18rem" }}>
                <Card.Img variant="top" src="images/img-8.jpg" />
                <Card.Body>
                  <Card.Title>Luxury</Card.Title>
                  <Card.Text>
                    <p>
                      "Neque porro quisquam est qui dolorem ipsum quia dolor sit
                      amet, consectetur, adipisci velit..."
                    </p>
                  </Card.Text>
                  <LinkContainer to="/services">
                    <Button variant="outline-warning" className="btn-custom ">
                      Book now
                    </Button>
                  </LinkContainer>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={4} md={6}>
              <Card className="text-center my-4" style={{ width: "18rem" }}>
                <Card.Img variant="top" src="images/img-4.jpg" />
                <Card.Body>
                  <Card.Title>Mistery</Card.Title>
                  <Card.Text>
                    "Neque porro quisquam est qui dolorem ipsum quia dolor sit
                    amet, consectetur, adipisci velit..."
                  </Card.Text>
                  <LinkContainer to="/services">
                    <Button variant="outline-warning" className="btn-custom ">
                      Book now
                    </Button>
                  </LinkContainer>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={4} md={6}>
              <Card className="text-center my-4" style={{ width: "18rem" }}>
                <Card.Img variant="top" src="images/img-4.jpg" />
                <Card.Body>
                  <Card.Title>Mistery</Card.Title>
                  <Card.Text>
                    "Neque porro quisquam est qui dolorem ipsum quia dolor sit
                    amet, consectetur, adipisci velit..."
                  </Card.Text>
                  <LinkContainer to="/services">
                    <Button variant="outline-warning" className="btn-custom ">
                      Book now
                    </Button>
                  </LinkContainer>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={4} md={6}>
              <Card className="text-center my-4" style={{ width: "18rem" }}>
                <Card.Img variant="top" src="images/img-9.jpg" />
                <Card.Body>
                  <Card.Title>Mistery</Card.Title>
                  <Card.Text>
                    "Neque porro quisquam est qui dolorem ipsum quia dolor sit
                    amet, consectetur, adipisci velit..."
                  </Card.Text>
                  <LinkContainer to="/services">
                    <Button variant="outline-warning" className="btn-custom ">
                      Book now
                    </Button>
                  </LinkContainer>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={4} md={6}>
              <Card className="text-center my-4" style={{ width: "18rem" }}>
                <Card.Img variant="top" src="images/img-8.jpg" />
                <Card.Body>
                  <Card.Title>Mistery</Card.Title>
                  <Card.Text>
                    "Neque porro quisquam est qui dolorem ipsum quia dolor sit
                    amet, consectetur, adipisci velit..."
                  </Card.Text>
                  <LinkContainer to="/services">
                    <Button variant="outline-warning" className="btn-custom ">
                      Book now
                    </Button>
                  </LinkContainer>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </animated.div>
    );
  
}

export default Cards;
