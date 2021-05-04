import React from "react";
import "./CardsBigger.css";
import CardColumns from "react-bootstrap/CardColumns";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { LinkContainer } from "react-router-bootstrap";


class CardsBigger extends React.Component {
  render() {
    return (
      <section id="news">
        <div className="cardsb pb-5">
          <br></br>
          <br></br>

          <CardColumns className="text-center">
            <Card>
              <Card.Img variant="top" src="images/maldive.jpg" />
              <Card.Body>
                <Card.Title>Thailand Travel Tips</Card.Title>
                <Card.Text>
                  <p>
                    {" "}
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </Card.Text>
                <Button variant="outline-warning" className="btn-custom ">
                  Read more
                </Button>
              </Card.Body>
            </Card>
            <Card>
              <Card.Img variant="top" src="images/miami.jpg" />
              <Card.Body>
                <Card.Title>Cuba Travel Tips</Card.Title>
                <Card.Text>
                  <p>
                    {" "}
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </Card.Text>
                <Button variant="outline-warning" className="btn-custom ">
                  Read more
                </Button>
              </Card.Body>
            </Card>

            <Card>
              <Card.Img variant="top" src="images/portorico.jpg" />
              <Card.Body>
                <Card.Title>Greece Travel Tips</Card.Title>
                <Card.Text>
                  <p>
                    {" "}
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </Card.Text>
                <Button variant="outline-warning" className="btn-custom ">
                  Read more
                </Button>
              </Card.Body>
            </Card>

            <Card>
              <Card.Img variant="top" src="images/paris.jpg" />
              <Card.Body>
                <Card.Title>Paris Travel Tips</Card.Title>
                <Card.Text>
                  <p>
                    {" "}
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </Card.Text>
                <Button variant="outline-warning" className="btn-custom ">
                  Read more
                </Button>
              </Card.Body>
            </Card>
            <Card>
              <Card.Img variant="top" src="images/capoverde.jpg" />
              <Card.Body>
                <Card.Title>Maldive Travel Tips</Card.Title>
                <Card.Text>
                  <p>
                    {" "}
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </Card.Text>
                <Button variant="outline-warning" className="btn-custom ">
                  Read more
                </Button>
              </Card.Body>
            </Card>

            <Card>
              <Card.Img variant="top" src="images/praga.jpg" />
              <Card.Body>
                <Card.Title>Praga Travel Tips</Card.Title>
                <Card.Text>
                  <p>
                    {" "}
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </Card.Text>
                <Button variant="outline-warning" className="btn-custom ">
                  Read more
                </Button>
              </Card.Body>
            </Card>
          </CardColumns>

         
        </div>
      </section>
    ); 
  }
}

export default CardsBigger;
