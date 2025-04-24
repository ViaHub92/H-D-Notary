import React, { useState, useEffect } from 'react';
import logo from '../assets/logo.png';
import { scrollToSection } from '../utils/scrollUtils';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`header ${scrolled ? 'header-scrolled' : ''}`}>
      <div className="logo-container">
        <img src={logo} alt="H&D Notary Logo" className="logo" />
      </div>
      <nav className="nav-container">
        <ul className="nav-links">
          <li><a href="#about" onClick={scrollToSection}>About Us</a></li>
          <li><a href="#services" onClick={scrollToSection}>Services</a></li>
          <li><a href="#contact" onClick={scrollToSection}>Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;