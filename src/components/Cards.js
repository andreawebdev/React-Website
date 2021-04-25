import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import "./Cards.css";
import Button from "react-bootstrap/Button";
import { LinkContainer } from "react-router-bootstrap";
import { useSpring, animated } from "react-spring";






function Cards (properties) {
  
     const props = useSpring({
       opacity: 1,
       from: { opacity: 0,},
       config:{delay:0, duration:1000},
     });
    
    return (
      <section id="destinations">
        <animated.div style={props} className="cards">
          <h1 className="text-center text-dark py-5 ">{properties.name}</h1>
          <br></br>

          <Container>
            <Row>
              <Col lg={4} md={6}>
                <Card className="text-center my-1" style={{ width: "18rem" }}>
                  <Card.Img variant="top rounded " src="images/roma.jpg" />
                  <Card.Body>
                    <Card.Title>Rome</Card.Title>
                    <Card.Text>
                      <p>18.00 £ person</p>
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
                <Card className="text-center my-1" style={{ width: "18rem" }}>
                  <Card.Img variant="top" src="images/london.jpg" />
                  <Card.Body>
                    <Card.Title>London</Card.Title>
                    <Card.Text>
                      <p>45 £ person</p>
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
                <Card className="text-center my-1" style={{ width: "18rem" }}>
                  <Card.Img variant="top" src="images/paris.jpg" />
                  <Card.Body>
                    <Card.Title>Paris</Card.Title>
                    <Card.Text>34.00 £ person</Card.Text>
                    <LinkContainer to="/services">
                      <Button variant="outline-warning" className="btn-custom ">
                        Book now
                      </Button>
                    </LinkContainer>
                  </Card.Body>
                </Card>
              </Col>
              <Col lg={4} md={6}>
                <Card className="text-center my-1" style={{ width: "18rem" }}>
                  <Card.Img variant="top" src="images/barcellona.jpg" />
                  <Card.Body>
                    <Card.Title>Barcellona</Card.Title>
                    <Card.Text>14.00 £ person</Card.Text>
                    <LinkContainer to="/services">
                      <Button variant="outline-warning" className="btn-custom ">
                        Book now
                      </Button>
                    </LinkContainer>
                  </Card.Body>
                </Card>
              </Col>
              <Col lg={4} md={6}>
                <Card className="text-center my-1" style={{ width: "18rem" }}>
                  <Card.Img variant="top" src="images/dublin.jpg" />
                  <Card.Body>
                    <Card.Title>Dublin</Card.Title>
                    <Card.Text>19.00 £ person</Card.Text>
                    <LinkContainer to="/services">
                      <Button variant="outline-warning" className="btn-custom ">
                        Book now
                      </Button>
                    </LinkContainer>
                  </Card.Body>
                </Card>
              </Col>
              <Col lg={4} md={6}>
                <Card className="text-center my-1" style={{ width: "18rem" }}>
                  <Card.Img variant="top" src="images/praga.jpg" />
                  <Card.Body>
                    <Card.Title>Praga</Card.Title>
                    <Card.Text>25.00 £ person</Card.Text>
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
      </section>
    );
  
}

export default Cards;
