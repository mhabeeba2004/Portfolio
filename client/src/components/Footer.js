import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-links">
            <a href="#home" className="footer-link">Home</a>
            <a href="#about" className="footer-link">About</a>
            <a href="#contact" className="footer-link">Contact</a>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="footer-social">
            <a href="https://www.behance.net/ummehabhabeeba" target="_blank" className="social-link">LinkedIn</a>
            <a href="https://dribbble.com/mhabeeba2004" target="_blank" className="social-link">Dribbble</a>
            <a href="https://www.instagram.com/mhabeeba2004" target="_blank" className="social-link">Instagram</a>
          </div>
          <p>&copy; 2024 Umme Habiba. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
