import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Card from "react-bootstrap/Card";
import AgeVerificationForm from "../ageVerification/AgeVerificationForm";
import "../../../src/WineDiscoveryGuide.css";

function WineDiscoveryGuide() {
  const [isVerified, setIsVerified] = useState(false);

  const handleAgeSubmit = (age) => {
    if (age >= 21) {
      setIsVerified(true);
    } else {
      alert('Sorry, you must be 21 years or older to view this content.');
    }
  };

  const handleAgeVerificationSubmit = (age) => {
    if (age >= 21) {
      setIsVerified(true);
    } else {
      alert('Sorry, you must be 21 years or older to view this content.');
    }
  };

  if (!isVerified) {
    return <AgeVerificationForm onSubmit={handleAgeSubmit} />;
  }

  return (
    <div className="wine-discovery-guide">
      <h3>Explore Our Wine Selection</h3>
      <p>
        Discover a world of wines and indulge in a delightful journey of flavors
        and aromas. We offer an extensive selection of wines from renowned
        vineyards and winemakers. Come and see them for yourself
      </p>

      <h4>Categories</h4>

      {/* Age Verification Modal */}
      <Modal show={!isVerified} backdrop="static" keyboard={false}>
        <Modal.Header>
          <Modal.Title>Age Verification</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <AgeVerificationForm onSubmit={handleAgeVerificationSubmit} />
        </Modal.Body>
      </Modal>

      {/* Render content if user is above 21 */}
      {isVerified && (
        <div className="wine-cards">
          <Card className="wine-card">
            <Card.Body>
              <Card.Title>Red Wines</Card.Title>
              <Card.Text>
                Our collection of red wines features a diverse range of flavors,
                from bold and robust to smooth and elegant. Explore different
                grape varietals and regions, and savor the rich notes of
                cherries, blackberries, and spices.
              </Card.Text>
            </Card.Body>
          </Card>

          <Card className="wine-card">
            <Card.Body>
              <Card.Title>White Wines</Card.Title>
              <Card.Text>
                Experience the refreshing and crisp flavors of our white wines.
                From zesty Sauvignon Blanc to buttery Chardonnay, our selection
                offers a wide range of profiles to suit every palate.
              </Card.Text>
            </Card.Body>
          </Card>

          <Card className="wine-card">
            <Card.Body>
              <Card.Title>Rosé Wines</Card.Title>
              <Card.Text>
                Indulge in the delicate hues and vibrant flavors of our rosé
                wines. With their notes of strawberries, watermelon, and floral
                accents, they are perfect for a leisurely afternoon or a
                romantic evening.
              </Card.Text>
            </Card.Body>
          </Card>

          <Card className="wine-card">
            <Card.Body>
              <Card.Title>Sparkling Wines</Card.Title>
              <Card.Text>
                Celebrate special moments with our selection of sparkling wines.
                From classic Champagne to lively Prosecco, experience the
                effervescence and joy that these wines bring to any occasion.
              </Card.Text>
            </Card.Body>
          </Card>

          <Card className="wine-card">
            <Card.Body>
              <Card.Title>Dessert Wines</Card.Title>
              <Card.Text>
                End your meal on a sweet note with our luscious dessert wines.
                With their rich and indulgent flavors of honey, caramel, and
                dried fruits, they are the perfect complement to your favorite
                desserts.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      )}
    </div>
  );
}

export default WineDiscoveryGuide;
