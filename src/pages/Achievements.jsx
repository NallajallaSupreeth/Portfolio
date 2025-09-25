import React from 'react';
import './Achievements.css';

// 1. Import your certificate PDFs
import linguaskillPdf from '../assets/documents/linguaskill-report.pdf';
import salesforceCertPdf from '../assets/documents/salesforce-ai-associate.pdf';

// 2. Updated data array with your two certificates
const achievements = [
  {
    title: 'Linguaskill English Certification (CEFR B1)',
    issuer: 'Cambridge English',
    year: '2024',
    description: 'Achieved an overall score of 156, with a C1 proficiency in Reading.',
    link: linguaskillPdf
  },
  {
    title: 'Salesforce Certified AI Associate',
    issuer: 'Salesforce Trailhead',
    year: '2024',
    description: 'Successfully completed all certification requirements for AI proficiency.',
    link: salesforceCertPdf
  }
];

const Achievements = () => {
  return (
    <div className="achievements section">
      <div className="container">
        <h2 className="section-title">Achievements & Certificates</h2>
        <div className="achievements-list">
          {achievements.map((item, index) => (
            // 3. The entire item is now a clickable link
            <a 
              key={index} 
              href={item.link} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="achievement-item"
            >
              <h3>{item.title}</h3>
              <p className="issuer">{item.issuer} ({item.year})</p>
              <p>{item.description}</p>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Achievements;