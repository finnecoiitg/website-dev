import React, { useState, useEffect } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import the carousel styles
import { Carousel } from 'react-responsive-carousel'; // Import the Carousel component
import './Mycarousel.css';
import blockchain1 from './images/blockchain1.svg';
import MnAnalyse1 from './images/Mnanalyse1.svg';
import sphinx1 from './images/sphinx1.svg';

function Mycarousel() {
  const [centerSlidePercentage, setCenterSlidePercentage] = useState(33.3);
  const [showArrows, setShowArrows]=useState(true);
  useEffect(() => {
    const handleResize = () => {
      // Adjust centerSlidePercentage based on screen size
      if (window.innerWidth <= 600) {
        setCenterSlidePercentage(66.6);
        setShowArrows(true);
      } else {
        setCenterSlidePercentage(33.3);
        setShowArrows(true);
      }
    };

    // Initial setup
    handleResize();

    // Add event listener for window resize
    window.addEventListener('resize', handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); // Empty dependency array to run the effect only once on mount


  return (
    <div className='carousel-container'>
      <div className='carousel-title' >EVENTS TIME-LINE 2023-24</div>
      <Carousel className='carousel-aks'
    showThumbs={false} // Set to true to display thumbnail navigation
    showArrows={true}  // Display previous/next arrows
    infiniteLoop={false} // Enable infinite loop for continuous scrolling
    centerMode={true}  // Center the currently displayed item
    centerSlidePercentage={centerSlidePercentage} // Adjust the percentage for centering
    carousel-status={false}>
      {/* <div>
        <img src={MnAnalyse1} alt="Image 1" />
        <p className="legend">Image 1 Description</p>
      </div>
      <div>
        <img src={blockchain1} alt="Image 2" />
        <p className="legend">Image 2 Description</p>
      </div> */}
      <div className="card-aks">
        <img src={sphinx1} alt="img4" className="testimonial-img" />
        <div className="card-text">
            <p className='card-text-title'>MnAnalyse</p>
            <p className='card-text-para'>www.instagram.com  A quick guide to better understanding HIPAA compliance, obligations and rezre</p>
            <p className='card-text-para'>FEBRUARY 14, 2023</p>
            <button className="carousel-button">REGISTER <span className="fa fa-chevron-right fa-xxs" /></button>
        </div>
      </div>
      <div className="card-aks">
        <img src={blockchain1} alt="img4" className="testimonial-img" />
        <div className="card-text">
            <p className='card-text-title'>MnAnalyse</p>
            <p className='card-text-para'>www.instagram.com  A quick guide to better understanding HIPAA compliance, obligations and rezre</p>
            <p className='card-text-para'>FEBRUARY 14, 2023</p>
            <button className="carousel-button">REGISTER <span className="fa fa-chevron-right fa-xxs" /></button>
        </div>
      </div>
      <div className="card-aks">
        <img src={MnAnalyse1} alt="img4" className="testimonial-img" />
        <div className="card-text">
            <p className='card-text-title'>MnAnalyse</p>
            <p className='card-text-para'>www.instagram.com  A quick guide to better understanding HIPAA compliance, obligations and rezre</p>
            <p className='card-text-para'>FEBRUARY 14, 2023</p>
            <button className="carousel-button">REGISTER <span className="fa fa-chevron-right fa-xxs" /></button>
        </div>
      </div>
      <div className="card-aks">
        <img src={sphinx1} alt="img4" className="testimonial-img" />
        <div className="card-text">
            <p className='card-text-title'>MnAnalyse</p>
            <p className='card-text-para'>www.instagram.com  A quick guide to better understanding HIPAA compliance, obligations and rezre</p>
            <p className='card-text-para'>FEBRUARY 14, 2023</p>
            <button className="carousel-button">REGISTER <span className="fa fa-chevron-right fa-xxs" /></button>
        </div>
      </div>
      <div className="card-aks">
        <img src={blockchain1} alt="img4" className="testimonial-img" />
        <div className="card-text">
            <p className='card-text-title'>MnAnalyse</p>
            <p className='card-text-para'>www.instagram.com  A quick guide to better understanding HIPAA compliance, obligations and rezre</p>
            <p className='card-text-para'>FEBRUARY 14, 2023</p>
            <button className="carousel-button">REGISTER <span className="fa fa-chevron-right fa-xxs" /></button>
        </div>
      </div>
      <div className="card-aks">
        <img src={MnAnalyse1} alt="img4" className="testimonial-img" />
        <div className="card-text">
            <p className='card-text-title'>MnAnalyse</p>
            <p className='card-text-para'>www.instagram.com  A quick guide to better understanding HIPAA compliance, obligations and rezre</p>
            <p className='card-text-para'>FEBRUARY 14, 2023</p>
            <button className="carousel-button">REGISTER <span className="fa fa-chevron-right fa-xxs" /></button>
        </div>
      </div>
      <div className="card-aks">
        <img src={sphinx1} alt="img4" className="testimonial-img" />
        <div className="card-text">
            <p className='card-text-title'>MnAnalyse</p>
            <p className='card-text-para'>www.instagram.com  A quick guide to better understanding HIPAA compliance, obligations and rezre</p>
            <p className='card-text-para'>FEBRUARY 14, 2023</p>
            <button className="carousel-button">REGISTER <span className="fa fa-chevron-right fa-xxs" /></button>
        </div>
      </div>
      {/* Add more slides as needed */}
    </Carousel>
    </div>
    
  );
}

export default Mycarousel;