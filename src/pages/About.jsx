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
            Hello! I'm N. Supreeth, a Computer Science and Engineering student specializing in AI Systems for Visual Intelligence at KL University, Vijayawada. My passion lies in exploring the intersection of machine learning and deep learning, and my current research focuses on the Interpretability–Performance Dilemma in Text Classification—analyzing the trade-offs between accuracy, efficiency, and transparency.
          </p>
          <p>
           Beyond research, I enjoy building practical solutions with my skills in Python, Java, C, SQL, and React.js. I'm particularly driven by the potential of AI-powered analytics in distributed systems to improve security, transparency, and efficiency in industrial automation.
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