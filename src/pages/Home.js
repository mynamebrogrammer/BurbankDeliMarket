import React, { useState } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

function Home() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleModeToggle = () => {
    setIsDarkMode(!isDarkMode);
  };

  const cardStyle = {
    backgroundColor: isDarkMode ? '#2a2e37' : 'white',
    color: isDarkMode ? 'white' : 'black',
  };

  const buttonStyle = {
    backgroundColor: isDarkMode ? 'white' : '#2a2e37',
    color: isDarkMode ? '#2a2e37' : 'white',
  };

  return (
    <Container>
      <Row>
        <Col>
          <Card className="my-4" style={cardStyle}>
            <Card.Body>
              <Card.Title>Welcome to Burbank Deli & Market!</Card.Title>
              <Card.Text>
                {/* Add content for the current page */}
                We are a family owned and operated business that has been serving the Burbank community for over 30 years.
              </Card.Text>
              <button className="toggle-button" style={buttonStyle} onClick={handleModeToggle}>
                {isDarkMode ? 'Light Mode' : 'Dark Mode'}
              </button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Home;
