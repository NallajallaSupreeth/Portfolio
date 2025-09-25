import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'; // Import icons
import { projects } from '../projectData';
import './ProjectDetail.css';

const ProjectDetail = () => {
  const { id } = useParams();
  const project = projects.find(p => p.id === parseInt(id));

  if (!project) {
    return <div>Project not found!</div>;
  }

  return (
    <div className="project-detail section">
      <div className="container">
        <Link to="/portfolio" className="back-link">&larr; Back to Portfolio</Link>
        
        <div className="project-header">
          <h1>{project.title}</h1>
          <div className="project-page-links">
            {project.githubLink && project.githubLink !== '#' && (
              <a href={project.githubLink} target="_blank" rel="noopener noreferrer" title="View on GitHub">
                <FaGithub /> GitHub
              </a>
            )}
            {project.liveLink && project.liveLink !== '#' && (
              <a href={project.liveLink} target="_blank" rel="noopener noreferrer" title="View Live Site">
                <FaExternalLinkAlt /> Live Demo
              </a>
            )}
          </div>
        </div>

        <img src={project.image} alt={project.title} className="project-detail-image" />
        <h3>Description</h3>
        <p>{project.description}</p>
        <h3>Tools Used</h3>
        <div className="tools-list">
          {project.tools.map(tool => (
            <span key={tool} className="tool-tag">{tool}</span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;