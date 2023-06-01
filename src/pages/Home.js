import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
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
                {/* Add content for the current page */}
                We are a family-owned and operated business that has been
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
