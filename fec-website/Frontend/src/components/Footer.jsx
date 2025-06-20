import React from 'react';
// In a real React project, you would import the CSS file like this:
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-columns">
          {/* Learn Column */}
          <div className="footer-column">
            <h3 className="footer-heading">LEARN</h3>
            {/* <ul className="footer-links">
              <li><a className="footer-link">ABOUT</a></li>
              <li><a className="footer-link">FAQS</a></li>
              <li><a className="footer-link">CONTACT US</a></li>
            </ul> */}
          </div>

          {/* Community Column */}
          <div className="footer-column">
            <h3 className="footer-heading">COMMUNITY</h3>
            <ul className="footer-links">
              <li className="flex items-center"><a href="https://in.linkedin.com/company/finance-and-economics-club-iitg" className="footer-link">LINKEDIN</a></li>
              <li className="flex items-center"><a href="https://www.instagram.com/fec_iitg?igsh=MWJham13OTlmbGo3Yg==" className="footer-link">INSTAGRAM</a></li>
              <li className="flex items-center"><a href="https://feciitg.medium.com/" className="footer-link">MEDIUM</a></li>
              <li className="flex items-center"><a href="https://x.com/fec_iitg" className="footer-link">TWITTER</a></li>
            </ul>
          </div>


          <div className="footer-club-info">
            <h3 className="footer-heading">FINANCE AND ECONOMICS CLUB, IIT GUWAHATI</h3>
            <p className="club-description">
              FINANCE AND ECONOMICS CLUB, IIT GUWAHATI IS A CLUB PART OF TECHBOARD IIT GUWAHATI. OUR CLUB WAS FOUNDED IN 2014 AND SINCE THEN HAS PROGRESSED VERY MUCH. IN THE RECENT 2 YEARS THE ACTIVITIES INSIDE THE CLUB HAD INCREASED EXPONENTIALLY.
            </p>
          </div>
        </div>

        <div className="footer-copyright">
          <p>COPY RIGHT - FINANCE AND ECONOMICS CLUB, IIT GUWAHATI</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
