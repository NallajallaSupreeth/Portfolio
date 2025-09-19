import React from 'react';
import './Achievements.css'; // We will create this file next

// Example achievements - replace with your own
const achievements = [
  {
    title: 'Certified React Developer',
    issuer: 'Coursera',
    year: '2024',
    link: '#' // Optional link to certificate
  },
  {
    title: 'Winner, Local Hackathon',
    issuer: 'TechFest',
    year: '2023',
    link: '#'
  },
  {
    title: 'Published Technical Article',
    issuer: 'Dev.to',
    year: '2023',
    link: '#'
  }
];

const Achievements = () => {
  return (
    <div className="achievements section">
      <div className="container">
        <h2 className="section-title">Achievements & Certificates</h2>
        <div className="achievements-list">
          {achievements.map((item, index) => (
            <div key={index} className="achievement-item">
              <h3>{item.title}</h3>
              <p className="issuer">{item.issuer} ({item.year})</p>
              {item.link && item.link !== '#' && (
                <a href={item.link} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
                  View Certificate
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Achievements;