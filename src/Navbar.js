import React from 'react';
import './Navbar.css';
import { BrowserRouter as Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className="navbar-wrapper">
      <div className="navbar-logo">
        <h1 className="global-header">GlitchHunt</h1>
        {/* Logo image to be entered here */}
      </div>
      <div className="navbar-navigation">
        <p>
          <Link to="/Home">Home</Link>
        </p>
        <p>
          <Link to="/Blog">Blog</Link>
        </p>
        <p>
          <Link to="/Boredom">Boredom</Link>
        </p>
        <p>
          <Link to="/About">About</Link>
        </p>
      </div>
    </div>
  );
}

export default Navbar;
