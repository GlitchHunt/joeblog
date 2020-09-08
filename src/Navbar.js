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
        <p>Home</p>
        <Link to="/Blog">Blog</Link>
        <p>Boredom</p>
        <p>About</p>
      </div>
    </div>
  );
}

export default Navbar;
