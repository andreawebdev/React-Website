import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
// import "./Cards.css";
import Button from "react-bootstrap/Button";
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
      <animated.div style={props} className="cards">
        <br></br>
        <br></br>

        <Container>
          <Row>
            <Col lg={4} md={6}>
              <Card className="text-center my-4 " style={{ width: "18rem" }}>
                <Card.Img variant="top rounded " src="images/miami.jpg" />
                <Card.Body>
                  <Card.Title>Miami</Card.Title>
                  <Card.Text>
                    <p>38.00 £ person</p>
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
                <Card.Img variant="top" src="images/cubabis.jpg" />
                <Card.Body>
                  <Card.Title>Cuba</Card.Title>
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
              <Card className="text-center my-4" style={{ width: "18rem" }}>
                <Card.Img variant="top" src="images/portorico.jpg" />
                <Card.Body>
                  <Card.Title>Portorico</Card.Title>
                  <Card.Text>45.00 £ person</Card.Text>
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
                <Card.Img variant="top" src="images/thai.jpg" />
                <Card.Body>
                  <Card.Title>Thailandia</Card.Title>
                  <Card.Text>60.00 £ person</Card.Text>
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
                <Card.Img variant="top" src="images/capoverde.jpg" />
                <Card.Body>
                  <Card.Title>Capoverde</Card.Title>
                  <Card.Text>75.00 £ person</Card.Text>
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
                <Card.Img variant="top" src="images/tanzania.jpg" />
                <Card.Body>
                  <Card.Title>Tanzania</Card.Title>
                  <Card.Text>80.00 £ person</Card.Text>
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

export default SummerDestinations;
