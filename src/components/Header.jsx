import React, { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import './Header.css';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  // This function toggles the menu and also closes it when a link is clicked
  const handleNavClick = () => {
    setIsOpen(false);
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="header">
      <div className="container header-container">
        {/* Logo scrolls back to top/home */}
        <a href="#home" className="logo">Nallajalla Supreeth</a>
        
        <nav className={`main-nav ${isOpen ? 'active' : ''}`}>
          {/* Changed 'to' to 'href' and pointed them to the IDs */}
          <a href="#home" onClick={handleNavClick}>Home</a>
          <a href="#about" onClick={handleNavClick}>About</a>
          <a href="#skills" onClick={handleNavClick}>Skills</a>
          <a href="#portfolio" onClick={handleNavClick}>Portfolio</a>
          <a href="#achievements" onClick={handleNavClick}>Achievements</a>
          <a href="#contact" onClick={handleNavClick}>Contact</a>
        </nav>

        <button className="menu-toggle" onClick={toggleMenu}>
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>
    </header>
  );
};

export default Header;