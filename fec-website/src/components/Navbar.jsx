import React, { useState } from 'react';
import './Navbar.css';
import logo from '../img/FEC_logo.png';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    "TEAMS", "EVENTS", "COURSES", "BLOGS", "RESOURCES",
    "CONTACT US", "ALUMNI CORNER"
  ];

  return (
    <div className="nav">
      <nav className="navbar">
        <div className="logo-section">
          <img src={logo} alt="Finance Club Logo" className="logo-image" />
          <div className="club-text">
            <div className="bold">Finance Club </div>
            <div className="sub">IIT Guwahati</div>
          </div>
        </div>

        <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
          {navLinks.map((link, index) => (
            <li key={index}>{link}</li>
          ))}
        </ul>

      </nav>
        <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          <div className={`bar ${menuOpen ? 'rotate1' : ''}`}></div>
          <div className={`bar ${menuOpen ? 'fade' : ''}`}></div>
          <div className={`bar ${menuOpen ? 'rotate2' : ''}`}></div>
        </div>
    </div>
  );
};

export default Navbar;
