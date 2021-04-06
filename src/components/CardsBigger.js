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
      <div className="cardsb pb-5">
        <br></br>
        <br></br>

        <Container>
          <Row>
            <Col lg={4}>
              <Card className="text-center" style={{ width: "18rem" }}>
                <Card.Img variant="top" src="images/img-6.jpg" />
                <Card.Body>
                  <Card.Title>Adventure</Card.Title>
                  <Card.Text>
                    <p>
                      "Neque porro quisquam est qui dolorem ipsum quia dolor sit
                      amet, consectetur, adipisci velit..."
                    </p>
                  </Card.Text>
                  <LinkContainer to="/services">
                    <Button variant="primary ">Book now</Button>
                  </LinkContainer>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={4}>
              <Card className="text-center my-4" style={{ width: "18rem" }}>
                <Card.Img variant="top" src="images/img-5.jpg" />
                <Card.Body>
                  <Card.Title>Luxury</Card.Title>
                  <Card.Text>
                    <p>
                      "Neque porro quisquam est qui dolorem ipsum quia dolor sit
                      amet, consectetur, adipisci velit..."
                    </p>
                  </Card.Text>
                  <LinkContainer to="/services">
                    <Button variant="primary ">Book now</Button>
                  </LinkContainer>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={4}>
              <Card className="text-center my-4" style={{ width: "18rem" }}>
                <Card.Img variant="top" src="images/img-6.jpg" />
                <Card.Body>
                  <Card.Title>Mistery</Card.Title>
                  <Card.Text>
                    "Neque porro quisquam est qui dolorem ipsum quia dolor sit
                    amet, consectetur, adipisci velit..."
                  </Card.Text>
                  <LinkContainer to="/services">
                    <Button variant="primary ">Book now</Button>
                  </LinkContainer>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default CardsBigger;
