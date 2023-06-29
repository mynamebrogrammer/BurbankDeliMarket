import React from 'react';
import comingSoon from '../../src/assets/comingsoon.jpg';

function MenuPage() {
  return (
    <div>
      <h2>Menu</h2>
      <p>We are currently in the process of building a mouth-watering menu...Coming soon!</p>
      <img src={comingSoon} alt="Coming Soon" />
      
      {/* Add more Sandwich components or other menu items */}
    </div>
  );
}

export default MenuPage;
