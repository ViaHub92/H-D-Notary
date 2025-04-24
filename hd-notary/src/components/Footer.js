import React from 'react';
import { scrollToSection } from '../utils/scrollUtils';

const Footer = () => {
  return (
    <footer>
      <p>&copy; {new Date().getFullYear()} H-D-Notary. All rights reserved.</p>
      <p>Licensed and bonded notary services.</p>
      <div className="footer-links">
        <a href="#about" onClick={scrollToSection}>About</a> | 
        <a href="#services" onClick={scrollToSection}>Services</a> | 
        <a href="#contact" onClick={scrollToSection}>Contact</a>
      </div>
    </footer>
  );
};

export default Footer;