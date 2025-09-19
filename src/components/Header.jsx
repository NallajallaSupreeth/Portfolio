import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';
import './Header.css';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="header">
      <div className="container header-container">
        <NavLink to="/" className="logo">Nallajalla Supreeth</NavLink>
        <nav className={`main-nav ${isOpen ? 'active' : ''}`}>
          <NavLink to="/" onClick={toggleMenu}>Home</NavLink>
          <NavLink to="/about" onClick={toggleMenu}>About</NavLink>
          <NavLink to="/skills" onClick={toggleMenu}>Skills</NavLink> {/* Add this */}
          <NavLink to="/portfolio" onClick={toggleMenu}>Portfolio</NavLink>
          <NavLink to="/achievements" onClick={toggleMenu}>Achievements</NavLink> {/* Add this */}
          <NavLink to="/contact" onClick={toggleMenu}>Contact</NavLink>
        </nav>
        <button className="menu-toggle" onClick={toggleMenu}>
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>
    </header>
  );
};

export default Header;