import React from 'react';
import './Skills.css';

// Updated skills data based on your list
const skillCategories = [
  {
    name: 'Programming Languages',
    skills: ['Python', 'Java', 'C']
  },
  {
    name: 'Web Development',
    skills: ['HTML5', 'CSS', 'JavaScript', 'React.js', 'Flask']
  },
  {
    name: 'Data Science & AI',
    skills: ['Machine Learning (ML)', 'Deep Learning (DL)', 'Natural Language Processing (NLP)']
  },
  {
    name: 'Database Systems',
    skills: ['SQL','Mongodb']
  },
  {
    name: 'Project & Delivery Management',
    skills: ['Agile', 'Scrum']
  },
  {
    name: 'Tools & Platforms',
    skills: ['Git', 'GitHub', 'Google Colab', 'Eclipse']
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