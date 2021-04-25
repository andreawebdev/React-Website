import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { LinkContainer } from "react-router-bootstrap";
import "./CardsBigger.css";

class CardsBigger extends React.Component {
  render() {
    return (
      <section id="news">
        <div className="cardsb pb-5">
          <br></br>
          <br></br>

          <Container>
            <Row>
              <Col lg={4} md={6}>
                <Card className="text-center" style={{ width: "18rem" }}>
                  <Card.Img variant="top" src="images/maldive.jpg" />
                  <Card.Body>
                    <Card.Title>Thailand Travel Tips</Card.Title>
                    <Card.Text>
                      <p>
                        "Neque porro quisquam est qui dolorem ipsum quia dolor
                        sit amet, consectetur, adipisci velit..."
                      </p>
                    </Card.Text>
                    <LinkContainer to="/services">
                      <Button variant="outline-warning" className="btn-custom ">
                        Read more
                      </Button>
                    </LinkContainer>
                  </Card.Body>
                </Card>
              </Col>
              <Col lg={4} md={6}>
                <Card className="text-center my-2" style={{ width: "18rem" }}>
                  <Card.Img variant="top" src="images/miami.jpg" />
                  <Card.Body>
                    <Card.Title>Tenerife Travel Tips</Card.Title>
                    <Card.Text>
                      <p>
                        "Neque porro quisquam est qui dolorem ipsum quia dolor
                        sit amet, consectetur, adipisci velit..."
                      </p>
                    </Card.Text>
                    <LinkContainer to="/services">
                      <Button variant="outline-warning" className="btn-custom ">
                        Read more
                      </Button>
                    </LinkContainer>
                  </Card.Body>
                </Card>
              </Col>
              <Col lg={4} md={6}>
                <Card className="text-center my-2" style={{ width: "18rem" }}>
                  <Card.Img variant="top" src="images/portorico.jpg" />
                  <Card.Body>
                    <Card.Title> Experiencing The Maldives</Card.Title>
                    <Card.Text>
                      "Neque porro quisquam est qui dolorem ipsum quia dolor sit
                      amet, consectetur, adipisci velit..."
                    </Card.Text>
                    <LinkContainer to="/services">
                      <Button variant="outline-warning" className="btn-custom ">
                        Read more
                      </Button>
                    </LinkContainer>
                  </Card.Body>
                </Card>
              </Col>
              <Col lg={4} md={6}>
                <Card className="text-center my-2" style={{ width: "18rem" }}>
                  <Card.Img variant="top" src="images/paris.jpg" />
                  <Card.Body>
                    <Card.Title>Thailand Travel Tips</Card.Title>
                    <Card.Text>
                      "Neque porro quisquam est qui dolorem ipsum quia dolor sit
                      amet, consectetur, adipisci velit..."
                    </Card.Text>
                    <LinkContainer to="/services">
                      <Button variant="outline-warning" className="btn-custom ">
                        Read more
                      </Button>
                    </LinkContainer>
                  </Card.Body>
                </Card>
              </Col>
              <Col lg={4} md={6}>
                <Card className="text-center my-2" style={{ width: "18rem" }}>
                  <Card.Img variant="top" src="images/roma.jpg" />
                  <Card.Body>
                    <Card.Title> Rome Colosseum</Card.Title>
                    <Card.Text>
                      "Neque porro quisquam est qui dolorem ipsum quia dolor sit
                      amet, consectetur, adipisci velit..."
                    </Card.Text>
                    <LinkContainer to="/services">
                      <Button variant="outline-warning" className="btn-custom ">
                        Read More
                      </Button>
                    </LinkContainer>
                  </Card.Body>
                </Card>
              </Col>
              <Col lg={4} md={6}>
                <Card className="text-center my-2" style={{ width: "18rem" }}>
                  <Card.Img variant="top" src="images/portorico.jpg" />
                  <Card.Body>
                    <Card.Title> Experiencing Cuba</Card.Title>
                    <Card.Text>
                      "Neque porro quisquam est qui dolorem ipsum quia dolor sit
                      amet, consectetur, adipisci velit..."
                    </Card.Text>
                    <LinkContainer to="/services">
                      <Button variant="outline-warning" className="btn-custom ">
                        Read more
                      </Button>
                    </LinkContainer>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
      </section>
    ); 
  }
}

export default CardsBigger;
