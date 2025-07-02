import React from 'react';
import './LandingPage.css';
import Footer from './Footer';
import Navbar from './Navbar';
import CountUp from 'react-countup';
import coin4 from '../img/coin4.png';
import Rotat2png from '../img/Rotat2png.png';
import VideoPlayer from '../img/VideoPlayer.png';
import Teams from './Teams';
import ProfilePic from '../img/ProfilePic.svg';


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
            <div className="i1"><img src={coin4} alt="" /></div>
            <div className="i2"><img src={coin4} alt="" /></div>
            <div className="i3"><img src={Rotat2png} alt="" /></div>
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
                src={VideoPlayer} // Using a generic dark rectangle for the image
                alt="Join our network"
                className="join-network-image"
                onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/400x300/0F343A/FFFFFF?text=Network+Image'; }}
              />
            </div>
            <div className="join-network-text-container">
              <h2 className="join-network-title">
                Join our expanding network with
              </h2>
              <h4 style={{ color: '#7AFFA1' }}>
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
          <h3 className="teams-title">
            Have a look at the teams working here
          </h3>
          <Teams />
        </section>

        {/* Testimonials Section */}
        <section className="testimonials-section">
          <div className="india">
            <div className="title-aks"><p>What students have to<br /> say about us?</p></div>
          </div>
          <div className="wrapper">
            <div className="item col1 hey">
              <p>Live data plays a big role in my design
                process. Thanks to Kernel I can now use it without any hassle and shorten my process which makes it a key tool for me.</p>
              <div className="aks-grid-item4 aks-grid-item">
                <div className="pic-aks">
                  <img alt="profile-pic"   src={ProfilePic}/>
                </div>
                <div className="info-aks">
                  <p className="commentor-aks">Shashwat Pandey</p>
                  <p className="post-aks"> Secy</p>
                </div>
              </div>
            </div>
            <div className="item col1 hey">
              <p>Live data plays a big role in my design
                process. Thanks to Kernel I can now use it without any hassle and shorten my process which makes it a key tool for me.</p>
              <div className="aks-grid-item4 aks-grid-item">
                <div className="pic-aks">
                  <img alt="profile-pic"   src={ProfilePic}/>
                </div>
                <div className="info-aks">
                  <p className="commentor-aks">Shashwat Pandey</p>
                  <p className="post-aks"> Secy</p>
                </div>
              </div>
            </div>
            <div className="item col1 key">
              <p>Live data plays a big role in my design
                process. Thanks to Kernel I can now use it without any hassle and shorten my process which makes it a key tool for me.</p>
              <div className="aks-grid-item4 aks-grid-item">
                <div className="pic-aks">
                  <img alt="profile-pic"   src={ProfilePic}/>
                </div>
                <div className="info-aks">
                  <p className="commentor-aks">Shashwat Pandey</p>
                  <p className="post-aks"> Secy</p>
                </div>
              </div>
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
