import React from 'react';
import './Navbar.css';

function Navbar() {
  return (
    <div className="navbar-wrapper">
      <div className="navbar-logo">
        <h1 className="global-header">GlitchHunt</h1>
        {/* Logo image to be entered here */}
      </div>
      <div className="navbar-navigation">
        <p>Home</p>
        <p>Blog</p>
        <p>Weather</p>
        <p>About</p>
      </div>
    </div>
  );
}

export default Navbar;
