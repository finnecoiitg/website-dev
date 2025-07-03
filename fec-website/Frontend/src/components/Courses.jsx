import React from "react";
import "./Courses.css";
import Navbar from "./Navbar";
import logoImg from "../img/Coin.png";

const cardData = [
  { id: 1, delay: "264px" },
  { id: 2, delay: "132px" },
  { id: 3, delay: "0px" },
];

const courses = [
  {
    title: "Intro to blockchain and web 3.0",
    description:
      "Explore the components and building blocks of blockchain and Web3.0.",
    link: "https://www.youtube.com/",
  },
  {
    title: "Fundamental analysis bootcamp",
    description:
      "Master the art of analyzing a company’s fundamentals through our intensive 12-Day Bootcamp.",
    link: "https://example.com/fundamentals",
  },
  {
    title: "Understanding business with corporate finance",
    description:
      "Gain a comprehensive understanding of finance and strategic planning concepts.",
    link: "https://example.com/finance",
  },
  {
    title: "Introductory options",
    description:
      "Explore the intricacies of options and strategic approaches in quantitative finance.",
    link: "https://example.com/options",
  },
];

const Courses = () => {
  return (
    <div>
      <Navbar />
      <section className="courses-section">
        {/* Blob Groups */}
        <div className="blob-group group-top-left">
          <div className="ellipse ellipse-blur"></div>
          <div className="ellipse ellipse-gradient"></div>
          <div className="ellipse ellipse-texture"></div>
        </div>

        <div className="blob-group group-top-right">
          <div className="ellipse ellipse-blur"></div>
          <div className="ellipse ellipse-gradient"></div>
          <div className="ellipse ellipse-texture"></div>
        </div>

        <div className="blob-group group-bottom-left">
          <div className="ellipse ellipse-blur"></div>
          <div className="ellipse ellipse-gradient"></div>
          <div className="ellipse ellipse-texture"></div>
        </div>
        <div className="coin-position-wrapper">
          <img
            src={require("../img/Rotat2png.png")}
            alt="coin1"
            className="coin rotat2"
          />
          <img
            src={require("../img/coin4.png")}
            alt="coin2"
            className="coin coin4-left"
          />
          <img
            src={require("../img/coin4.png")}
            alt="coin3"
            className="coin coin4-rotated"
          />
        </div>

        {/* Header */}
        <div className="section-header">
          <h2>Courses</h2>
          <p>
            Dive into our comprehensive courses and eguided by expert mentors
            and enriched by engaging study materials.
          </p>
        </div>

        {/* Course list */}
        <div className="page-wrapper">
          <div className="course-container">
            {courses.map((course, index) => (
              <div key={index} className="course-row">
                <div className="course-title">{course.title}</div>
                <div className="course-description">{course.description}</div>
                <a
                  className="course-link"
                  href={course.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>ACCESS MATERIAL</span>
                  <span className="arrow">↗</span>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="benefits-container">
        <div className="benefits-header">
          <h2>
            Fast-growing companies <br />
            need benefits that grow <br />
            as their business does.
          </h2>
          <p>
            Scaling a company is hard. Offering global talent exceptional
            benefits shouldn’t be.
          </p>
        </div>

        <div className="benefits-grid">
          {[1, 2, 3].map((_, index) => (
            <div className="benefit-card" key={index}>
              <div className="line-wrapper">
                <div className="dot"></div>
                <div className="dashed-line"></div>
              </div>
              <div className="card-content">
                <h3>Global coverage, world-class choices</h3>
                <p>
                  Your people can access comprehensive coverage or investment
                  options no matter where they work in the world
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="logo-wrapper">
          <img src={logoImg} alt="Logo" />
        </div>
      </section>
    </div>
  );
};

export default Courses;
