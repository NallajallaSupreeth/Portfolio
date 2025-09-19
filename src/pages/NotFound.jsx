import React from 'react';
import { Link } from 'react-router-dom';
import notFoundImage from '../assets/images/notfound-image.png';
import './NotFound.css';

const NotFound = () => {
  return (
    <div className="not-found section">
      <div className="container not-found-container">
        <div className="not-found-image">
          <img src={notFoundImage} alt="Page not found" />
        </div>
        <div className="not-found-content">
          <h1>Oops! Page Not Found</h1>
          <p>
            It seems like you've stumbled upon a page that doesn't exist.
            Let's get you back on track.
          </p>
          <Link to="/" className="btn btn-primary">Go to Homepage</Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;