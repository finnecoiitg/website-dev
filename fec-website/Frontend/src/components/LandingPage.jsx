import React from 'react';
import './LandingPage.css';
import Footer from './Footer';
import Navbar from './Navbar';
import CountUp from 'react-countup';
import coin4 from '../img/coin4.png';
import Rotat2png from '../img/Rotat2png.png';


const LandingPage = () => {
  return (
    <div className="landing-page-container">
      <Navbar />
      <div className="content-wrapper">

        {/* Hero Section */}
        <section className="hero-section">
          <div className="hero-content">
            <h1 className="hero-title">Finance & <br /> Economics</h1>
            <div className='hero'>
              <div className="hero-description">
                <span className="btn1"><button><span>Join Us</span> <span>→</span> </button></span>
                <span className="btn2"><button><span>Explore</span> <span>→</span> </button></span>
              </div>
              <div className="message">
                <p>
                  FEC functions as a platform for students to come together and learn the intriguing and fun world of finance.
                </p>
              </div>
            </div>
          </div>
          <div className="coin_images">
            <div className="i1"><img src = {coin4} alt="" /></div>
            <div className="i2"><img src = {coin4} alt="" /></div>
            <div className="i3"><img src = {Rotat2png} alt="" /></div>
          </div>
        </section>

        <div className='moto' >
          <p>OUR MOTTO:</p>
          <span>Be an asset Not a liability</span>
        </div>

        {/* Statistics Section */}
        <section className="stats-section">
          <div className="stats-grid">
            <div className="stat-item">
              <span className="stat-number">+<CountUp start={0} end={50} duration={2} delay={0} />B</span>
              <span className="stat-label">Working Hours</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">+<CountUp start={0} end={50} duration={2} delay={0} />M</span>
              <span className="stat-label">Projects Completed</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">+<CountUp start={0} end={10} duration={2} delay={0} />M</span>
              <span className="stat-label">Happy Clients</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">+<CountUp start={0} end={500} duration={2} delay={0} /></span>
              <span className="stat-label">Global Partners</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">+$<CountUp start={0} end={1} duration={2} delay={0} />B</span>
              <span className="stat-label">Revenue Generated</span>
            </div>
          </div>
        </section>

        {/* Join Network Section */}
        <section className="join-network-section">
          <div className="join-network-content">
            <div className="join-network-image-container">
              <img
                src="Rectangle 685.png" // Using a generic dark rectangle for the image
                alt="Join our network"
                className="join-network-image"
                onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/400x300/0F343A/FFFFFF?text=Network+Image'; }}
              />
            </div>
            <div className="join-network-text-container">
              <h2 className="join-network-title">
                Join our expanding network with
              </h2>
              <h4 style={{color: '#7AFFA1'}}>
                Exciting events, courses, workshops and more.
              </h4>
              <button className="join-us-button">
                Learn More <span>→</span>
              </button>
            </div>
          </div>
        </section>

        {/* Teams Section */}
        <section className="teams-section">
          <h2 className="teams-title">
            Have a look at the teams working here
          </h2>
          <div className="teams-grid">
            {/* FEC Capital Card */}
            <div className="team-card">
              <h3 className="team-card-title">FEC Capital</h3>
              <img
                src="FEC Capital.jpg"
                alt="FEC Capital"
                className="team-card-image"
                onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/300x200/A0D8B3/1E4B4C?text=FEC+Capital'; }}
              />
              <p className="team-card-description">
                Our mission is to create meaningful opportunities for personal and professional growth. Through collaboration, innovation, and hard work, we strive to create sustainable solutions to the challenges facing our community.
              </p>
              <button className="explore-button">
                EXPLORE <span>→</span>
              </button>
            </div>

            {/* FEC Quant Card */}
            <div className="team-card">
              <h3 className="team-card-title">FEC Quant</h3>
              <img
                src="FEC Quant.jpg"
                alt="FEC Quant"
                className="team-card-image"
                onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/300x200/A0D8B3/1E4B4C?text=FEC+Quant'; }}
              />
              <p className="team-card-description">
                Our mission is to create meaningful opportunities for personal and professional growth. Through collaboration, innovation, and hard work, we strive to create sustainable solutions to the challenges facing our community.
              </p>
              <button className="explore-button">
                EXPLORE <span>→</span>
              </button>
            </div>

            {/* Placeholder for a third card if needed based on Figma, or hide if not */}
            <div className="team-card">
              <h3 className="team-card-title">FEC Research</h3>
              <img
                src="https://placehold.co/300x200/A0D8B3/1E4B4C?text=FEC+Research"
                alt="FEC Research"
                className="team-card-image"
              />
              <p className="team-card-description">
                Our mission is to create meaningful opportunities for personal and professional growth. Through collaboration, innovation, and hard work, we strive to create sustainable solutions to the challenges facing our community.
              </p>
              <button className="explore-button">
                EXPLORE <span>→</span>
              </button>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="testimonials-section">
          <h2 className="testimonials-title">
            What students have to say about us?
          </h2>
          <div className="testimonials-grid">
            {/* Testimonial 1 */}
            <div className="testimonial-card">
              <p className="testimonial-text">
                "Joining Finance & Economics has been a game-changer for my career. The insights and opportunities are unparalleled."
              </p>
              <p className="testimonial-author">- Jane Doe, University Student</p>
            </div>
            {/* Testimonial 2 */}
            <div className="testimonial-card">
              <p className="testimonial-text">
                "The community and resources provided by FEC are top-notch. I've learned so much and connected with incredible people."
              </p>
              <p className="testimonial-author">- John Smith, Recent Graduate</p>
            </div>
          </div>
        </section>

        {/* Discover Potential Section */}
        <section className="discover-potential-section">
          <div className="discover-potential-content">
            <div className="discover-potential-text-container">
              <h2 className="discover-potential-title">
                Discover your potential with us
              </h2>
            </div>
            <div className="discover-potential-image-container">
              <img
                src="Landing page.jpg" // Using the landing page image as a general illustration
                alt="Discover Potential"
                className="discover-potential-image"
                onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/400x300/1E4B4C/FFFFFF?text=Potential+Image'; }}
              />
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="contact-form-section">
          <div className="contact-form-container">
            <div className="contact-form-text-container">
              <h2 className="contact-form-title">
                Have a question or an idea to share with us? Drop us a line
              </h2>
            </div>
            <div className="contact-form-fields-container">
              <form className="contact-form">
                <div>
                  <label htmlFor="name" className="form-label">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="form-input"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="form-input"
                    placeholder="Your Email"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="form-label">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows="4"
                    className="form-textarea"
                    placeholder="Your Message"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="submit-button"
                >
                  SUBMIT <span>→</span>
                </button>
              </form>
            </div>
          </div>
        </section>

        {/* The new Footer Component */}
        <Footer />
      </div>
    </div>
  );
};

export default LandingPage;
