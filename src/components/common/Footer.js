import React from 'react';
import '../../Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} Burbank Deli & Market.</p>
      <p className="name">Maksoud Productions. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
