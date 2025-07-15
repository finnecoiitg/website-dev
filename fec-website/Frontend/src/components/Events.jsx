import React from "react";
import HeaderImg1 from '../img/events/header1.png';
import HeaderImg2 from '../img/events/header2.png';
import HeaderImg3 from '../img/events/header3.png';
import OngoingImg from '../img/events/ongoing.png';
import Yes3 from '../img/Yes3.png';
import img1 from '../img/events/image79.png';
import img2 from '../img/events/image80.png';
import img3 from '../img/events/image 354.png';
import DiscImg from '../img/events/image 6.png'
import Navbar from "./Navbar";
import UpcomingEvents from './UpcomingEvents'
import EventTimeline from './EventTimeline'
import ContactForm from './ContactForm'; 
import Footer from "./Footer";

import "./Events.css";


export default function Events() {
  return (
    <div className="container">
        <Navbar />
        <div className="events-header">
            <h1> Events</h1>
            <img className='fec-logo1' src={HeaderImg1} alt="Events Header" />
            <img className="fec-logo2" src={HeaderImg2} alt="Events Header" />
            <img className="fec-logo3" src={HeaderImg3} alt="Events Header" />
        </div>
        <div className="ongoing-events">
            <div className="hero-banner">
              <div className="hero-text">
                <h1>Gear up for MNAnalyse<br />- a case study analysis competition</h1>
                <button className="hero-button">REGISTER <span>→</span></button>
              </div>
              <div className="hero-image">
                <img src={img3} alt="MNAnalyse" />
              </div>
            </div>
        </div>
        <div className="upcoming-events">
            <div className="up-p">Find your inspiration at our engaging events</div>
            <div className="events-list">
                <UpcomingEvents />
            </div>
        </div>
        <div className="events-timeline">
            <div className="time-text">EVENTS TIMELINE 2024-2025</div>
            <EventTimeline />
        </div>
        <div className="explore-events">
            <div className="expEve-horiz">
              <div className="expEve-vert">
                <div className="eveText">
                  <p className="expEve-para1">Already a part of IITG family and want to explore finance</p>
                  <p className="expEve-para2">Explore more of our courses</p>
                  <button type="Submit" className="exploreBtn">Explore Courses <span>→</span></button>
                </div>
                <div className="greybox">
                  <img className="expEve-img" src={img1} alt="Yes" />
                </div>
              </div>
              <div className="expEve-vert">
                <div className="greybox"><img className="expEve-img" src={img2} alt="Yes" /></div>
                <div className="eveText">
                  <p className="expEve-para1">Effortlessly tackle time-consuming computing tasks</p>
                  <p className="expEve-para2">Get ahead with our resources</p>
                  <button type="Submit" className="exploreBtn">Explore Courses <span>→</span></button>
                </div>
              </div>
            </div>
        </div>
        <div className="discover-events">
            <div className="disc-hor">
              <div className="disc-vert">
                <div className="disc-para1">Want to collaborate with us or explore finance</div>
                <div className="disc-para2">Discover your potential with us</div>
                <button type="Submit" className="discoverBtn">JOIN US <span>→</span></button>
              </div>
              <div className="disc-line"></div>
              <img className="disc-img" src={DiscImg} alt="Yes" />
            </div>
        </div>
        <section className="contact-form-section">
          <div className="imageNearBy">
            <img src={Yes3} alt="Yes" />
          </div>
          <ContactForm />
        </section>
        <Footer />
    </div>
  );
}