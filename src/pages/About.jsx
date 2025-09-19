import React from 'react';
import './About.css';

// Import your actual profile photo
import profileImage from '../assets/images/supreeth-profile.jpg'; 

// Make sure your PDF file is named "Supreeth_Resume.pdf" and is inside src/assets/documents/
import resumePdf from '../assets/documents/Supreeth_Resume.pdf'; 

const About = () => {
  return (
    <div className="about section">
      <div className="container about-container">
        <div className="about-image">
          <img 
            src={profileImage} 
            alt="Nalajalla Supreeth" 
            className="profile-photo" 
          />
        </div>
        <div className="about-content">
          <h2>About Me</h2>
          <p>
            Hello! I'm N.Supreeth, a developer with a knack for creating clean,
            efficient, and visually appealing web experiences. My journey into tech
            started with a fascination for how things work, and it has evolved into
            a career where I get to build them myself.
          </p>
          <p>
            My skills include React, Node.js, CSS, and UI/UX design principles. I'm a
            lifelong learner, always excited to pick up new technologies.
          </p>
          <a href={resumePdf} download="Nallajalla_Supreeth_Resume.pdf" className="btn btn-primary">
            Download My CV
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;