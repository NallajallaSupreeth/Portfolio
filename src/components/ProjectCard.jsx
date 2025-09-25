import React from 'react';
import { Link } from 'react-router-dom';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'; // Import icons
import './ProjectCard.css';

const ProjectCard = ({ project }) => {
  return (
    <div className="project-card">
      <img src={project.image} alt={project.title} />
      <div className="project-info">
        <h3>{project.title}</h3>
        <p>{project.category}</p>
        <div className="project-links">
          {project.githubLink && project.githubLink !== '#' && (
            <a href={project.githubLink} target="_blank" rel="noopener noreferrer" title="View on GitHub">
              <FaGithub />
            </a>
          )}
          {project.liveLink && project.liveLink !== '#' && (
            <a href={project.liveLink} target="_blank" rel="noopener noreferrer" title="View Live Site">
              <FaExternalLinkAlt />
            </a>
          )}
        </div>
        <Link to={`/project/${project.id}`} className="btn btn-primary">
          View Details
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;