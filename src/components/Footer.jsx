import React from 'react';
// 1. Import the FaEnvelope icon
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram, FaEnvelope } from 'react-icons/fa'; 
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="social-icons">
          <a href="https://github.com/NallajallaSupreeth" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
          <a href="https://www.linkedin.com/in/supreethnallajalla/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
          <a href="https://x.com/Supreeth_1626" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
          <a href="https://www.instagram.com/supreeth_1626/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
          {/* 2. Add the mailto link */}
          <a href="mailto:supreethnallajalla@gmail.com"><FaEnvelope /></a>
        </div>
        <p>&copy; 2025 Nallajalla Supreeth. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;