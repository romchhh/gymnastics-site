import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <p className="footer-text">
            Created by{' '}
            <a 
              href="https://telebots.site/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="footer-link"
            >
              TeleBots
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 