import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import "./Cards.css";
import Button from "react-bootstrap/Button";
import { LinkContainer } from "react-router-bootstrap";


class Cards extends React.Component {
  render() {
    return (
      <div className="cards">
        <h1 className="text-center text-dark py-5 pb-5">
          Check out these EPIC Destinations!
        </h1>

        <Container>
          <Row>
            <Col lg={4}>
              <Card className="text-center" style={{ width: "18rem" }}>
                <Card.Img variant="top" src="images/img-9.jpg" />
                <Card.Body>
                  <Card.Title>Adventure</Card.Title>
                  <Card.Text>
                    <p>
                      Explore the hidden waterfall deep inside the Amazon
                      Jungle'
                    </p>
                  </Card.Text>
                  <LinkContainer to="/services">
                    <Button variant="primary ">Book now</Button>
                  </LinkContainer>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={4}>
              <Card className="text-center" style={{ width: "18rem" }}>
                <Card.Img variant="top" src="images/img-8.jpg" />
                <Card.Body>
                  <Card.Title>Luxury</Card.Title>
                  <Card.Text>
                    <p>
                      Travel through the Islands of Bali in a Private Cruise'
                    </p>
                  </Card.Text>
                  <LinkContainer to="/services">
                    <Button variant="primary ">Book now</Button>
                  </LinkContainer>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={4}>
              <Card className="text-center" style={{ width: "18rem" }}>
                <Card.Img variant="top" src="images/img-4.jpg" />
                <Card.Body>
                  <Card.Title>Mistery</Card.Title>
                  <Card.Text>
                    Set Sail in the Atlantic Ocean visiting Uncharted Waters'
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

export default Cards;
