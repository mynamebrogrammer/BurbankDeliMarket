import React from 'react';
import sandwich from '../assets/sandwich.png';
import sandwich2 from '../assets/sandwich2.png';
import '../menu.css';

function MenuPage() {
  return (
    <div>
      <h2>Menu</h2>
      <p>We also cater and take custom orders!</p>
      <p>Call us at (818)846-6231 </p>
      <div className="menu-container">
        <div className="menu-item">
          <img src={sandwich} alt="Sandwich" />
          <h3>Delicious Sandwiches</h3>
        </div>
        
        {/* Add more menu items here */}
        <div className="menu-item">
          <img src={sandwich2} alt="Sandwich" />
          <h3>More Delicious Sandwiches</h3>
          </div>
      </div>
      
      {/* Add more Sandwich components or other menu items */}
    </div>
  );
}

export default MenuPage;
