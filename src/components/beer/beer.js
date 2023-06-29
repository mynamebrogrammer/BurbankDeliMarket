import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import AgeVerificationForm from '../ageVerification/AgeVerificationForm';
import  '../../../src/beerGuide.css';

function BeerGuide() {
  const [isVerified, setIsVerified] = useState(false);

  const handleAgeSubmit = (age) => {
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
    <div className="beerPage">
      <h3>Explore Our Beer Selection</h3>
      <p>
        Discover a world of beers and indulge in a delightful journey of flavors and aromas. We offer an extensive selection of beers from renowned breweries and beer makers. Come and see them for yourself.
      </p>

      <h4>Categories</h4>

      <div className="beer-cards">
        <Card className="beer-card">
          <Card.Body>
            <Card.Title>IPA</Card.Title>
            <Card.Text>
              Our collection of IPAs features a diverse range of flavors, from bold and robust to smooth and elegant. Explore different hops and regions, and savor the rich notes of citrus, pine, and spices.
            </Card.Text>
          </Card.Body>
        </Card>

        <Card className="beer-card">
          <Card.Body>
            <Card.Title>Pale Ale</Card.Title>
            <Card.Text>
              Experience the refreshing and crisp flavors of our pale ales. From zesty American Pale Ale to buttery English Pale Ale, our selection offers a wide range of profiles to suit every palate.
            </Card.Text>
          </Card.Body>
        </Card>

        <Card className="beer-card">
          <Card.Body>
            <Card.Title>Stout</Card.Title>
            <Card.Text>
              Indulge in the delicate hues and vibrant flavors of our stouts. With their notes of coffee, chocolate, and floral accents, they are perfect for a leisurely afternoon or a romantic evening.
            </Card.Text>
          </Card.Body>
        </Card>

        <Card className="beer-card">
          <Card.Body>
            <Card.Title>Porter</Card.Title>
            <Card.Text>
              Celebrate special moments with our selection of porters. From classic American Porter to lively English Porter, experience the effervescence and joy that these beers bring to any occasion.
            </Card.Text>
          </Card.Body>
        </Card>

        <Card className="beer-card">
          <Card.Body>
            <Card.Title>Wheat</Card.Title>
            <Card.Text>
              End your meal on a sweet note with our luscious wheat beers. With their rich and indulgent flavors of honey, caramel, and dried fruits, they are the perfect complement to your favorite desserts.
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}

export default BeerGuide;
