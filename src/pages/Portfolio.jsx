// src/pages/Portfolio.jsx
import React from 'react';
import { projects } from '../projectData'; // Import mock data
import ProjectCard from '../components/ProjectCard';
import './Portfolio.css';

const Portfolio = () => {
  return (
    <div className="portfolio section">
      <div className="container">
        <h2>My Work</h2>
        <p>Here are some of the projects I'm proud to have worked on.</p>
        <div className="project-grid">
          {projects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;