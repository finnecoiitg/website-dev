import React from "react";
import "./IntroductoryOptions.css";
import Navbar from "./Navbar";
import imag from "../img/image.png";

import { Link } from "react-router-dom";

const IntroductoryOptions = () => {
  return (
    <div className="intro-wrapper">
      <Navbar />

      <section className="intro-options">
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

        {/* Heading and Coins Side by Side */}
        <div className="intro-section">
          <div className="intro-top-row">
            <h2 className="introductory">Introductory.</h2>
          </div>

          <div className="intro-bottom-row">
            {/* Coins on the left */}
            <div className="coins-wrapper">
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

            {/* Options text on the right */}
            <div className="options-wrapper">
              <h2 className="options">Options.</h2>
              <p>
                Discover the power of Options in our certified course. Unveil
                the fundamentals of Option Derivatives, including pricing,
                Greeks, hedging, and strategies.
              </p>
              <button className="access-button">
                ACCESS MATERIAL <span className="arrow">→</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      <div className="about-course">
        <h2>About the course</h2>
        <div className="course-points">
          <div className="point">
            <span className="dot"></span>
            <p>
              Gain insight into fundamental analysis and its critical role in
              making informed investment decisions.
            </p>
          </div>
          <div className="point">
            <span className="dot"></span>
            <p>
              Acquaint students with essential financial statements and ratios
              utilized in fundamental analysis.
            </p>
          </div>
          <div className="point">
            <span className="dot"></span>
            <p>
              Develop the ability to assess a company’s financial performance
              and master industry analysis and competitive dynamics.
            </p>
          </div>
        </div>
      </div>

      <section className="option-derivative">
        <div className="option-wrapper">
          <div className="option-image" />
          <div className="option-text">
            <h2>What is an option derivative?</h2>
            <p>
              An option derivative is a financial instrument whose value is
              derived from an underlying asset, typically stocks, bonds,
              commodities, or indices. Specifically, an option is a type of
              derivative that grants the holder the right, but not the
              obligation, to buy or sell the underlying asset at a predetermined
              price known as the strike price within a specified timeframe.
            </p>
          </div>
        </div>
      </section>

      <section className="course-material-section">
        {/* === Blobs in Background === */}
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

        <div className="blob-group group-top-right2">
          <div className="ellipse ellipse-blur"></div>
          <div className="ellipse ellipse-gradient"></div>
          <div className="ellipse ellipse-texture"></div>
        </div>

        {/* === Content === */}

        <div className="course-content-wrapper">
          <h2 className="course-title">Course Material</h2>

          <div className="course-flex-container">
            <div className="course-days">
              {["Day 1", "Day 2", "Day 3", "Day 4", "Day 5"].map(
                (day, index) => (
                  <div className="day-box" key={index}>
                    {day} <span className="arrow-down">↓</span>
                  </div>
                )
              )}
            </div>

            <div className="course-divider"></div>

            <div className="course-activities">
              {["Graded assignment", "Practice 1", "Practice 2"].map(
                (label, index) => (
                  <div className="activity-card" key={index}>
                    <p>{label}</p>
                    <div className="circle-arrow">→</div>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
        <section className="mentors-section">
          <h2 className="mentors-heading">Meet your mentors</h2>
          <div className="mentors-grid">
            {Array(6)
              .fill(0)
              .map((_, index) => (
                <div className="mentor-card" key={index}>
                  <img
                    src={imag}
                    alt="Mentor"
                    className="mentor-image"
                  />
                  <div className="mentor-details">
                    <h3>Europe Street beat</h3>
                    <p>Designation</p>
                    <Link className="linkedin-button" to="#">LinkedIn ↗</Link>
                  </div>
                </div>
              ))}
          </div>
        </section>
      </section>
    </div>
  );
};

export default IntroductoryOptions;
