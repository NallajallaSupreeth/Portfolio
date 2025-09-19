// src/pages/Home.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import heroImage from '../assets/images/hero-image.png';
import './Home.css';

const Home = () => {
  return (
    <div className="hero section">
      <div className="container hero-container">
        <div className="hero-text">
          <h1>Creative Developer & Designer</h1>
          <p>
            I'm Nallajalla Supreeth, a passionate developer specializing in building beautiful, 
            user-friendly websites and applications. Welcome to my creative corner.
          </p>
          <Link to="/portfolio" className="btn btn-primary">View My Work</Link>
        </div>
        <div className="hero-image">
          <img src={heroImage} alt="Developer at desk" />
        </div>
      </div>
    </div>
  );
};

export default Home;