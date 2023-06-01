// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { Accordion, Container, Row, Col, Card } from "react-bootstrap";
import logo1 from "../burbankdelilogo.png";

function Home() {
  return (
    <Container>
      <Row>
        <Col>
          <Card className="my-4">
            <Card.Body>
              <Card.Title>Welcome to Burbank Deli & Market!</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                <img
                  src={logo1}
                  alt="Burbank Deli Market"
                  width="300"
                  height="300"
                />
              </Card.Subtitle>
              <Card.Text>
                <div>
                  <Accordion
                    defaultActiveKey="0"
                    className="operating-hours-accordion"
                  >
                    <Accordion.Item eventKey="0">
                      <Accordion.Header>
                        Click here to view operating hours
                      </Accordion.Header>
                      <Accordion.Body>
                        <ul className="operating-hours-list">
                          <li>Monday: 8 AM - 9 PM</li>
                          <li>Tuesday: 8 AM - 9 PM</li>
                          <li>Wednesday: 8 AM - 9 PM</li>
                          <li>Thursday: 8 AM - 9 PM</li>
                          <li>Friday: 8 AM - 10 PM</li>
                          <li>Saturday: 8 AM - 10 PM</li>
                          <li>Sunday: 8 AM - 9 PM </li>
                        </ul>
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                </div>
              </Card.Text>
              <Card.Text>
                {/* Add content for the current page */}
                We are a family owned and operated business that has been
                serving the Burbank community for over 30 years.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Home;
