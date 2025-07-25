import React from 'react';
import './HamburgerButton.css';

const HamburgerButton = ({ isOpen, onClick }) => {
  return (
    <button
      className={`hamburger-button ${isOpen ? 'open' : ''}`}
      onClick={onClick}
      aria-label={isOpen ? 'Close menu' : 'Open menu'}
      aria-expanded={isOpen}
    >
      <div className="hamburger-box">
        <div className="hamburger-inner" />
      </div>
    </button>
  );
};

export default HamburgerButton;