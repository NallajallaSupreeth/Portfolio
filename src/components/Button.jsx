// src/components/Button.jsx
import React from 'react';

const Button = ({ children, onClick, type = 'button', variant = 'primary' }) => {
  const className = `btn btn-${variant}`; // e.g., "btn btn-primary"

  return (
    <button type={type} className={className} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
