import React, { useState } from 'react';
import './Navbar.css';
import logo from '../img/FEC_logo.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { label: "TEAMS", path: "/teams" },
    { label: "EVENTS", path: "/events" },
    { label: "COURSES", path: "/courses" },
    { label: "BLOGS", path: "/blogs" },
    { label: "RESOURCES", path: "/resources" },
    { label: "CONTACT US", path: "/contact" },
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
        {/* Desktop Nav Links */}
        <ul className="nav-links"> {/* Removed menuOpen class here for desktop */}
          {navLinks.map((link, index) => (
            <li key={index}>
              <Link to={link.path}>{link.label}</Link>
            </li>
          ))}
        </ul>
        {/* Hamburger */}
        <div className={`hamburger ${menuOpen ? 'is-active' : ''}`} onClick={() => setMenuOpen(!menuOpen)}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
      </nav>
      {/* Mobile Fullscreen Menu */}
      <div className={`mobile-menu-overlay ${menuOpen ? 'open' : ''}`}>
        <ul className="mobile-nav-links">
          {navLinks.map((link, index) => (
            <li key={index} onClick={() => setMenuOpen(false)}>
              <Link to={link.path}>{link.label}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;