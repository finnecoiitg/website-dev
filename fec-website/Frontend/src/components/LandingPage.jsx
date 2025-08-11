import React, { useEffect } from 'react';
import './LandingPage.css';

import CountUp from 'react-countup';
import coin4 from '../img/coin4.png';
import Rotat2png from '../img/Rotat2png.png';
import { useState } from 'react';
import {API_BASE_URL} from '../apis'; // Importing the API base URL
import VideoPlayer from '../img/VideoPlayer.png';
import ProfilePic from '../img/ProfilePic.svg';
import Yes3 from '../img/Yes3.png';
import Binance from '../img/Binance.svg';
import Frame3652 from '../img/Frame3652.svg';
import Frame3653 from '../img/Frame3653.svg';
import Frame3654 from '../img/Frame3654.svg';
import Frame3655 from '../img/Frame3655.svg';
import Frame3656 from '../img/Frame3656.svg';
import Frame3657 from '../img/Frame3657.svg';
import Frame3658 from '../img/Frame3658.svg';

import Footer from './Footer';
import Navbar from './Navbar';
import Teams from './Teams';
import DiscoverPotential from './DiscoverPotential';
import ContactForm from './ContactForm'; 

const LandingPage = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    //e.preventDefault();
    try {
      const response = await fetch(`${API_BASE_URL}/api/msg/submit`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, message }),
      });
      const data = await response.json();

      // alert('Message sent successfully!');
      // setName('');
      // setEmail('');
      // setMessage('');

    }
    catch (error) {
      console.log("Error submitting form:", error);
    }
  }

  useEffect(() => {
    const scrollers = document.querySelectorAll(".scroller");

    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      addAnimation();
    }

    function addAnimation() {
      scrollers.forEach((scroller) => {
        scroller.setAttribute("data-animated", true);

        const scrollerInner = scroller.querySelector(".scroller__inner");
        const scrollerContent = Array.from(scrollerInner.children);


        scrollerContent.forEach((item) => {
          const duplicatedItem = item.cloneNode(true);
          duplicatedItem.setAttribute("aria-hidden", true);
          scrollerInner.appendChild(duplicatedItem);
        });
      });
    }
  }, []);

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
                <span className="btn1"><button><span>JOIN US</span> <span>→</span> </button></span>
                <span className="btn2"><button><span>EXPLORE</span> <span>→</span> </button></span>
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
                src={VideoPlayer}
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
            <h3 className="title-aks">
              What students have to <br /> say about us?
            </h3>
          </div>
          <div className="testimonials-scroll-wrapper">
            <div className="testimonial-card">
              <p>Live data plays a big role in my design
                process. Thanks to Kernel I can now use it without any hassle and shorten my process which makes it a key tool for me.</p>
              <div className="aks-grid-item4 aks-grid-item">
                <div className="pic-aks">
                  <img alt="profile-pic" src={ProfilePic}/>
                </div>
                <div className="info-aks">
                  <p className="commentor-aks">Shashwat Pandey</p>
                  <p className="post-aks"> Secy</p>
                </div>
              </div>
            </div>
            
            {/* Repeat .testimonial-card for each testimonial */}
            <div className="testimonial-card">
              <p>Live data plays a big role in my design
                process. Thanks to Kernel I can now use it without any hassle and shorten my process which makes it a key tool for me.</p>
              <div className="aks-grid-item4 aks-grid-item">
                <div className="pic-aks">
                  <img alt="profile-pic" src={ProfilePic}/>
                </div>
                <div className="info-aks">
                  <p className="commentor-aks">Shashwat Pandey</p>
                  <p className="post-aks"> Secy</p>
                </div>
              </div>
            </div>
            <div className="testimonial-card">
              <p>Live data plays a big role in my design
                process. Thanks to Kernel I can now use it without any hassle and shorten my process which makes it a key tool for me.</p>
              <div className="aks-grid-item4 aks-grid-item">
                <div className="pic-aks">
                  <img alt="profile-pic" src={ProfilePic}/>
                </div>
                <div className="info-aks">
                  <p className="commentor-aks">Shashwat Pandey</p>
                  <p className="post-aks"> Secy</p>
                </div>
              </div>
            </div>
            <div className="testimonial-card">
              <p>Live data plays a big role in my design
                process. Thanks to Kernel I can now use it without any hassle and shorten my process which makes it a key tool for me.</p>
              <div className="aks-grid-item4 aks-grid-item">
                <div className="pic-aks">
                  <img alt="profile-pic" src={ProfilePic}/>
                </div>
                <div className="info-aks">
                  <p className="commentor-aks">Shashwat Pandey</p>
                  <p className="post-aks"> Secy</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Ecosystem Partners Section */}
        <section className="ecosystem-section">
          <h2 className="ecosystem-title">
            Our expanding network<br />of ecosystems
          </h2>
          {/* First row (always visible) */}
          <div className="ecosystem-logos-row ecosystem-row-main scroller" data-direction="left">
            <div className="scroller__inner">
              <div className="ecosystem-logo-item">
                <img src={Frame3652} alt="Mudrex" />
              </div>
              <div className="ecosystem-logo-item">
                <img src={Frame3653} alt="Worldquant" />
              </div>
              <div className="ecosystem-logo-item">
                <img src={Frame3654} alt="Upsurge" />
              </div>
              <div className="ecosystem-logo-item">
                <img src={Frame3655} alt="Nobias" />
              </div>
              <div className="ecosystem-logo-item">
                <img src={Frame3656} alt="The Product House" />
              </div>
              <div className="ecosystem-logo-item">
                <img src={Frame3657} alt="Finalytics" />
              </div>
              <div className="ecosystem-logo-item binance-mobile-only">
                <img src={Binance} alt="Binance" />
              </div>
            </div>
          </div>
          {/* Second row (repeats some items, only visible on desktop/laptop) */}
          <div className="ecosystem-logos-row ecosystem-row-desktop scroller" data-direction="right">
            <div className="scroller__inner">
              <div className="ecosystem-logo-item">
                <img src={Frame3652} alt="Mudrex" />
              </div>
              <div className="ecosystem-logo-item">
                <img src={Frame3653} alt="Worldquant" />
              </div>
              <div className="ecosystem-logo-item">
                <img src={Frame3654} alt="Upsurge" />
              </div>
              <div className="ecosystem-logo-item">
                <img src={Frame3655} alt="Nobias" />
              </div>
              <div className="ecosystem-logo-item">
                <img src={Frame3656} alt="The Product House" />
              </div>
              <div className="ecosystem-logo-item">
                <img src={Frame3657} alt="Finalytics" />
              </div>
              <div className="ecosystem-logo-item">
                <img src={Frame3658} alt="GrowJunction" />
              </div>
            </div>
          </div>
        </section>

        {/* Discover Potential Section */}
        <section className="discover-potential-section">
          <DiscoverPotential />
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
              <form className="contact-form" onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="name" className="form-label">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="form-input"
                    placeholder="Your Name"
                    onChange={(e) => setName(e.target.value)}
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
                    onChange={(e) => setEmail(e.target.value)}
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
                    onChange={(e) => setMessage(e.target.value)}
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

          <div className="imageNearBy">
            <img src={Yes3} alt="Yes" />
          </div>
          <ContactForm />
        </section>

        {/* The new Footer Component */}
        <Footer />
      </div>
    </div>
  );
};

export default LandingPage;
