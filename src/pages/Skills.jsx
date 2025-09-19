import React from 'react';
import './Skills.css'; // We will create this file next

// Example skills data - you can replace this with your own
const skillCategories = [
  {
    name: 'Frontend',
    skills: ['React', 'JavaScript (ES6+)', 'HTML5', 'CSS3', 'Vite']
  },
  {
    name: 'Backend',
    skills: ['Node.js', 'Express', 'MongoDB', 'REST APIs']
  },
  {
    name: 'Tools & Methods',
    skills: ['Git & GitHub', 'Agile', 'UI/UX Design', 'Figma']
  }
];

const Skills = () => {
  return (
    <div className="skills section">
      <div className="container">
        <h2 className="section-title">My Skills</h2>
        <div className="skills-grid">
          {skillCategories.map(category => (
            <div key={category.name} className="skill-category">
              <h3>{category.name}</h3>
              <ul>
                {category.skills.map(skill => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;