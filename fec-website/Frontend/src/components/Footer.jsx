import React from 'react';
import './Footer.css';
import { FaLinkedinIn, FaInstagram, FaFacebookF, FaYoutube, FaMediumM } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import FEC_logo from '../img/FEC_logo.png'; // Assuming you have a logo image

const Footer = () => (
  <footer className="footer">
    <div className="footer-content">
      <div className="footer-columns">
        {/* Learn Column */}
        <div className="footer-column">
          <h3 className="footer-heading">LEARN</h3>
          <ul className="footer-links">
            <li><Link to="/about" className="footer-link">ABOUT</Link></li>
            <li><Link to="/faqs" className="footer-link">FAQS</Link></li>
            <li><Link to="/contact" className="footer-link">CONTACT US</Link></li>
          </ul>
        </div>
        {/* Community Column */}
        <div className="footer-column">
          <h3 className="footer-heading">COMMUNITY</h3>
          <Link to="/blog" className="footer-link">BLOG</Link>
          <div className="social">
            <div className="footer-social-media">
              <ul className="footer-links">
                <li>
                  <Link to="https://in.linkedin.com/company/finance-and-economics-club-iitg" className="footer-link" target="_blank" rel="noopener noreferrer">
                    LINKEDIN
                  </Link>
                </li>
                <li>
                  <Link to="https://www.instagram.com/fec_iitg?igsh=MWJham13OTlmbGo3Yg==" className="footer-link" target="_blank" rel="noopener noreferrer">
                    INSTAGRAM
                  </Link>
                </li>
                <li>
                  <Link to="#" className="footer-link">
                    FACEBOOK
                  </Link>
                </li>
                <li>
                  <Link to="#" className="footer-link">
                    YOUTUBE
                  </Link>
                </li>
                <li>
                  <Link to="https://feciitg.medium.com/" className="footer-link" target="_blank" rel="noopener noreferrer">
                    MEDIUM
                  </Link>
                </li>
              </ul>
            </div>
            <div className="footer-social-icons">
              <Link to="https://in.linkedin.com/company/finance-and-economics-club-iitg" className="footer-social-icon" target="_blank" rel="noopener noreferrer">
                <FaLinkedinIn />
              </Link>
              <Link to="https://www.instagram.com/fec_iitg?igsh=MWJham13OTlmbGo3Yg==" className="footer-social-icon" target="_blank" rel="noopener noreferrer">
                <FaInstagram />
              </Link>
              <Link to="#" className="footer-social-icon">
                <FaFacebookF />
              </Link>
              <Link to="#" className="footer-social-icon">
                <FaYoutube />
              </Link>
              <Link to="https://feciitg.medium.com/" className="footer-social-icon" target="_blank" rel="noopener noreferrer">
                <FaMediumM />
              </Link>
            </div>
          </div>
        </div>
        {/* Club Info */}
        <div className="footer-club-info">
          <div className="footer-club-logo">
            <img src={FEC_logo} alt="FEC Logo" className="footer-logo" />
            <h3 className="club-title">FINANCE AND ECONOMICS<br />CLUB, IIT GUWAHATI</h3>
          </div>
          <p className="club-description">
            FINANCE AND ECONOMICS CLUB, IIT GUWAHATI IS A CLUB PART OF TECHBOARD IIT GUWAHATI. OUR CLUB WAS FOUNDED IN 2014 AND SINCE THEN HAS PROGRESSED VERY MUCH. IN THE RECENT 2 YEARS THE ACTIVITIES INSIDE THE CLUB HAD INCREASED EXPONENTIALLY.
          </p>
        </div>
      </div>
      <div className="footer-copyright">
        <p>COPY RIGHT- FINANCE AND ECONOMICS CLUB, IIT GUWAHATI</p>
      </div>
    </div>
  </footer>
);

export default Footer;
