import React, { useState, useEffect, useCallback } from 'react';
import logo from '../assets/logo.png';
import { scrollToSection, createThrottledScrollHandler } from '../utils/scrollUtils';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  
  // Define the scroll handler with useCallback to prevent recreation on each render
  const handleScrollUpdate = useCallback((isScrolled) => {
    // If the new state is provided directly from the handler, use it
    if (typeof isScrolled === 'boolean') {
      setScrolled(isScrolled);
    } else {
      // Otherwise, calculate it
      setScrolled(window.scrollY > 100);
    }
  }, []);
  
  useEffect(() => {
    // Create a throttled scroll handler with threshold
    const handleScroll = createThrottledScrollHandler(handleScrollUpdate, 10);
    
    // Initial check
    handleScrollUpdate();
    
    // Add event listener with throttled handler
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScrollUpdate]);

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