
import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Ellipse from "./Ellipse 35.svg"
import Ellipse2 from "./ellispse4.svg";
import Search from "./search-01.svg";
import Rec1 from "./Rectangle 114 (3).svg";
import Rec2 from './Rectangle 114.svg'
import Rec3 from './Rectangle727.svg'
import down from './svgdownload.svg'

//  import  './assets/Rectangle114.svg'
//  import './assets/third.svg'
import "./java.js"
import {dostuffpg1} from "./java.js"
import {dostuffpg2} from "./java.js"
import {dostuffpg3} from "./java.js"
import {scrollToTop} from "./java.js"


const Carousel = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
  const settings = {
    dots: true, // Enable slide indicators (dots)
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    customPaging: (i) => (
      <div className="slick-number">
        {i + 1} {/* Display slide numbers: 1, 2, 3, ... */}
      </div>
    ),
    beforeChange: (oldIndex, newIndex) => {
        setCurrentSlide(newIndex);
        setTimeout(() => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth',
              })
          }, 700);
      },
    
  
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Slider {...settings}>
        
        <div>
          <div class="container">
        <img src={Ellipse} class="sl_ellipse_one" alt="ell"/>
        <img src={Ellipse2} class="sl_ellipse_two" alt="ell"/>
        <img src={Ellipse2} alt="" class="sl_ellipse_three"/>

        <div class="sl_page">

            <h1 class="sl_heading">
                Resources
            </h1>

            <p class="sl_para">
                Unleash your potential with our curated resources. Explore, learn, and excel on your path to success.
            </p>

            <div class="sl_search">
                <img src={Search} alt=""/>
                <input type="text" id= "searchbar1" onKeyUp={dostuffpg1} class="custom-input" placeholder="Search"/>
            </div>




            <div class="horizontal-line"></div>
            <div class="sl_box" id="apple">
                <div class="sl_box_img">
                    <img src={Rec3} alt="third"/>
                </div>
                <div class="sl_box_head">
                    <h2>
                        Apple
                    </h2>
                    <p className="desktop">
                        MnAnalyse is the India's only and Largest Mergers & Ecquisition Based Case Competition. Started
                        in
                        2022 it attracts teams from more than 100 institutes including all Major IIM’s, IIT’s and other
                        Institutes of National importance.......
                        MnAnalyse is the India’s only and Largest Mergers & Ecquisition Based Case Competition. Started
                        in
                        2022 it attracts teams from more than 100 institutes including all Major IIM’s, IIT’s and other
                        Institutes of National importance.......
                    </p>
                    <p className="mobile">
                        MnAnalyse is the India's only and Largest Mergers & Ecquisition Based Case Competition. Started
                        in
                        2022 it attracts teams from more than 100 institutes.
                    </p>
                   
                    <div class="sl_box_bottom">
                        <p class="sl_box_bottom_date">
                            FEBRAURY 14, 2023
                        </p>
                        <div class="sl_box_bottom_down">
                            <p>
                                DOWNLOAD
                                <img src={down} alt=""/>

                            </p>

                        </div>

                    </div>

                </div>

            </div>
            <div class="sl_box" id="banana">
                <div class="sl_box_img">
                    <img src={Rec3} alt="third"/>
                </div>
                <div class="sl_box_head">
                    <h2>
                        Banana
                    </h2>
                    <p className="desktop">
                        MnAnalyse is the India's only and Largest Mergers & Ecquisition Based Case Competition. Started
                        in
                        2022 it attracts teams from more than 100 institutes including all Major IIM’s, IIT’s and other
                        Institutes of National importance.......
                        MnAnalyse is the India’s only and Largest Mergers & Ecquisition Based Case Competition. Started
                        in
                        2022 it attracts teams from more than 100 institutes including all Major IIM’s, IIT’s and other
                        Institutes of National importance.......
                    </p>
                    <p className="mobile">
                        MnAnalyse is the India's only and Largest Mergers & Ecquisition Based Case Competition. Started
                        in
                        2022 it attracts teams from more than 100 institutes.
                    </p>
                    <div class="sl_box_bottom">
                        <p class="sl_box_bottom_date">
                            FEBRAURY 14, 2023
                        </p>
                        <div class="sl_box_bottom_down">
                            <p>
                                DOWNLOAD
                                <img src={down} alt=""/>
                            </p>




                        </div>

                    </div>

                </div>


            </div>
            <div class="sl_box"  id="cucumber">
                <div class="sl_box_img">
                    <img src={Rec3} alt="third"/>
                </div>
                <div class="sl_box_head">
                    <h2>
                        Cucumber
                    </h2>
                    <p className="desktop">
                        MnAnalyse is the India's only and Largest Mergers & Ecquisition Based Case Competition. Started
                        in
                        2022 it attracts teams from more than 100 institutes including all Major IIM’s, IIT’s and other
                        Institutes of National importance.......
                        MnAnalyse is the India’s only and Largest Mergers & Ecquisition Based Case Competition. Started
                        in
                        2022 it attracts teams from more than 100 institutes including all Major IIM’s, IIT’s and other
                        Institutes of National importance.......
                    </p>
                    <p className="mobile">
                        MnAnalyse is the India's only and Largest Mergers & Ecquisition Based Case Competition. Started
                        in
                        2022 it attracts teams from more than 100 institutes.
                    </p>
                    <div class="sl_box_bottom">
                        <p class="sl_box_bottom_date">
                            FEBRAURY 14, 2023
                        </p>
                        <div class="sl_box_bottom_down">
                            <p>
                                DOWNLOAD
                                <img src={down} alt=""/>
                            </p>




                        </div>

                    </div>

                </div>


            </div>
            <div class="sl_box"  id="donut">
                <div class="sl_box_img">
                    <img src={Rec3} alt="third"/>
                </div>
                <div class="sl_box_head">
                    <h2>
                        Donut
                    </h2>
                    <p className="desktop">
                        MnAnalyse is the India's only and Largest Mergers & Ecquisition Based Case Competition. Started
                        in
                        2022 it attracts teams from more than 100 institutes including all Major IIM’s, IIT’s and other
                        Institutes of National importance.......
                        MnAnalyse is the India’s only and Largest Mergers & Ecquisition Based Case Competition. Started
                        in
                        2022 it attracts teams from more than 100 institutes including all Major IIM’s, IIT’s and other
                        Institutes of National importance.......
                    </p>
                    <p className="mobile">
                        MnAnalyse is the India's only and Largest Mergers & Ecquisition Based Case Competition. Started
                        in
                        2022 it attracts teams from more than 100 institutes.
                    </p>
                    <div class="sl_box_bottom">
                        <p class="sl_box_bottom_date">
                            FEBRAURY 14, 2023
                        </p>
                        <div class="sl_box_bottom_down">
                            <p>
                                DOWNLOAD
                                <img src={down} alt=""/>
                            </p>

                        </div>

                    </div>

                </div>
            </div>
            <div class="sl_box"  id="elephant1" style={{display: "none"}}>
                <div class="sl_box_img">
                    <img src={Rec3} alt="third"/>
                </div>
                <div class="sl_box_head">
                    <h2>
                        Elephant
                    </h2>
                    <p className="desktop">
                        MnAnalyse is the India's only and Largest Mergers & Ecquisition Based Case Competition. Started
                        in
                        2022 it attracts teams from more than 100 institutes including all Major IIM’s, IIT’s and other
                        Institutes of National importance.......
                        MnAnalyse is the India’s only and Largest Mergers & Ecquisition Based Case Competition. Started
                        in
                        2022 it attracts teams from more than 100 institutes including all Major IIM’s, IIT’s and other
                        Institutes of National importance.......
                    </p>
                    <p className="mobile">
                        MnAnalyse is the India's only and Largest Mergers & Ecquisition Based Case Competition. Started
                        in
                        2022 it attracts teams from more than 100 institutes.
                    </p>
                    <div class="sl_box_bottom">
                        <p class="sl_box_bottom_date">
                            FEBRAURY 14, 2023
                        </p>
                        <div class="sl_box_bottom_down">
                            <p>
                                DOWNLOAD
                                <img src={down} alt=""/>
                            </p>

                        </div>

                    </div>

                </div>
            </div>
            <div class="sl_box"  id="fanta1" style={{display: "none"}}>
                <div class="sl_box_img">
                    <img src={Rec3} alt="third"/>
                </div>
                <div class="sl_box_head">
                    <h2>
                        Fanta
                    </h2>
                    <p className="desktop">
                        MnAnalyse is the India's only and Largest Mergers & Ecquisition Based Case Competition. Started
                        in
                        2022 it attracts teams from more than 100 institutes including all Major IIM’s, IIT’s and other
                        Institutes of National importance.......
                        MnAnalyse is the India’s only and Largest Mergers & Ecquisition Based Case Competition. Started
                        in
                        2022 it attracts teams from more than 100 institutes including all Major IIM’s, IIT’s and other
                        Institutes of National importance.......
                    </p>
                    <p className="mobile">
                        MnAnalyse is the India's only and Largest Mergers & Ecquisition Based Case Competition. Started
                        in
                        2022 it attracts teams from more than 100 institutes.
                    </p>
                    <div class="sl_box_bottom">
                        <p class="sl_box_bottom_date">
                            FEBRAURY 14, 2023
                        </p>
                        <div class="sl_box_bottom_down">
                            <p>
                                DOWNLOAD
                                <img src={down} alt=""/>
                            </p>

                        </div>

                    </div>

                </div>
            </div>
            <div class="sl_box"  id="grapes1" style={{display: "none"}}>
                <div class="sl_box_img">
                    <img src={Rec3} alt="third"/>
                </div>
                <div class="sl_box_head">
                    <h2>
                        Grapes
                    </h2>
                    <p className="desktop">
                        MnAnalyse is the India's only and Largest Mergers & Ecquisition Based Case Competition. Started
                        in
                        2022 it attracts teams from more than 100 institutes including all Major IIM’s, IIT’s and other
                        Institutes of National importance.......
                        MnAnalyse is the India’s only and Largest Mergers & Ecquisition Based Case Competition. Started
                        in
                        2022 it attracts teams from more than 100 institutes including all Major IIM’s, IIT’s and other
                        Institutes of National importance.......
                    </p>
                    <p className="mobile">
                        MnAnalyse is the India's only and Largest Mergers & Ecquisition Based Case Competition. Started
                        in
                        2022 it attracts teams from more than 100 institutes.
                    </p>
                    <div class="sl_box_bottom">
                        <p class="sl_box_bottom_date">
                            FEBRAURY 14, 2023
                        </p>
                        <div class="sl_box_bottom_down">
                            <p>
                                DOWNLOAD
                                <img src={down} alt=""/>
                            </p>

                        </div>

                    </div>

                </div>
            </div>
            <div class="sl_box"  id="house1" style={{display: "none"}}>
                <div class="sl_box_img">
                    <img src={Rec3} alt="third"/>
                </div>
                <div class="sl_box_head">
                    <h2>
                        House
                    </h2>
                    <p className="desktop">
                        MnAnalyse is the India's only and Largest Mergers & Ecquisition Based Case Competition. Started
                        in
                        2022 it attracts teams from more than 100 institutes including all Major IIM’s, IIT’s and other
                        Institutes of National importance.......
                        MnAnalyse is the India’s only and Largest Mergers & Ecquisition Based Case Competition. Started
                        in
                        2022 it attracts teams from more than 100 institutes including all Major IIM’s, IIT’s and other
                        Institutes of National importance.......
                    </p>
                    <p className="mobile">
                        MnAnalyse is the India's only and Largest Mergers & Ecquisition Based Case Competition. Started
                        in
                        2022 it attracts teams from more than 100 institutes.
                    </p>
                    <div class="sl_box_bottom">
                        <p class="sl_box_bottom_date">
                            FEBRAURY 14, 2023
                        </p>
                        <div class="sl_box_bottom_down">
                            <p>
                                DOWNLOAD
                                <img src={down} alt=""/>
                            </p>

                        </div>

                    </div>

                </div>
            </div>
            <div class="sl_box"  id="knight1" style={{display: "none"}}>
                <div class="sl_box_img">
                    <img src={Rec3} alt="third"/>
                </div>
                <div class="sl_box_head">
                    <h2>
                        Knight
                    </h2>
                    <p className="desktop">
                        MnAnalyse is the India's only and Largest Mergers & Ecquisition Based Case Competition. Started
                        in
                        2022 it attracts teams from more than 100 institutes including all Major IIM’s, IIT’s and other
                        Institutes of National importance.......
                        MnAnalyse is the India’s only and Largest Mergers & Ecquisition Based Case Competition. Started
                        in
                        2022 it attracts teams from more than 100 institutes including all Major IIM’s, IIT’s and other
                        Institutes of National importance.......
                    </p>
                    <p className="mobile">
                        MnAnalyse is the India's only and Largest Mergers & Ecquisition Based Case Competition. Started
                        in
                        2022 it attracts teams from more than 100 institutes.
                    </p>
                    <div class="sl_box_bottom">
                        <p class="sl_box_bottom_date">
                            FEBRAURY 14, 2023
                        </p>
                        <div class="sl_box_bottom_down">
                            <p>
                                DOWNLOAD
                                <img src={down} alt=""/>
                            </p>




                        </div>

                    </div>

                </div>


            </div>
            <div class="sl_box"  id="igloo1" style={{display: "none"}}>
                <div class="sl_box_img">
                    <img src={Rec3} alt="third"/>
                </div>
                <div class="sl_box_head">
                    <h2>
                        Igloo
                    </h2>
                    <p className="desktop">
                        MnAnalyse is the India's only and Largest Mergers & Ecquisition Based Case Competition. Started
                        in
                        2022 it attracts teams from more than 100 institutes including all Major IIM’s, IIT’s and other
                        Institutes of National importance.......
                        MnAnalyse is the India’s only and Largest Mergers & Ecquisition Based Case Competition. Started
                        in
                        2022 it attracts teams from more than 100 institutes including all Major IIM’s, IIT’s and other
                        Institutes of National importance.......
                    </p>
                    <p className="mobile">
                        MnAnalyse is the India's only and Largest Mergers & Ecquisition Based Case Competition. Started
                        in
                        2022 it attracts teams from more than 100 institutes.
                    </p>
                    <div class="sl_box_bottom">
                        <p class="sl_box_bottom_date">
                            FEBRAURY 14, 2023
                        </p>
                        <div class="sl_box_bottom_down">
                            <p>
                                DOWNLOAD
                                <img src={down} alt=""/>
                            </p>

                        </div>

                    </div>

                </div>
            </div>
            <div class="sl_box"  id="jackal1" style={{display: "none"}}>
                <div class="sl_box_img">
                    <img src={Rec3} alt="third"/>
                </div>
                <div class="sl_box_head">
                    <h2>
                        Jackal
                    </h2>
                    <p className="desktop">
                        MnAnalyse is the India's only and Largest Mergers & Ecquisition Based Case Competition. Started
                        in
                        2022 it attracts teams from more than 100 institutes including all Major IIM’s, IIT’s and other
                        Institutes of National importance.......
                        MnAnalyse is the India’s only and Largest Mergers & Ecquisition Based Case Competition. Started
                        in
                        2022 it attracts teams from more than 100 institutes including all Major IIM’s, IIT’s and other
                        Institutes of National importance.......
                    </p>
                    <p className="mobile">
                        MnAnalyse is the India's only and Largest Mergers & Ecquisition Based Case Competition. Started
                        in
                        2022 it attracts teams from more than 100 institutes.
                    </p>
                    <div class="sl_box_bottom">
                        <p class="sl_box_bottom_date">
                            FEBRAURY 14, 2023
                        </p>
                        <div class="sl_box_bottom_down">
                            <p>
                                DOWNLOAD
                                <img src={down} alt=""/>
                            </p>

                        </div>

                    </div>

                </div>
            </div>
            <div class="sl_box"  id="laundry1" style={{display: "none"}}>
                <div class="sl_box_img">
                    <img src={Rec3} alt="third"/>
                </div>
                <div class="sl_box_head">
                    <h2>
                        Laundry
                    </h2>
                    <p className="desktop">
                        MnAnalyse is the India's only and Largest Mergers & Ecquisition Based Case Competition. Started
                        in
                        2022 it attracts teams from more than 100 institutes including all Major IIM’s, IIT’s and other
                        Institutes of National importance.......
                        MnAnalyse is the India’s only and Largest Mergers & Ecquisition Based Case Competition. Started
                        in
                        2022 it attracts teams from more than 100 institutes including all Major IIM’s, IIT’s and other
                        Institutes of National importance.......
                    </p>
                    <p className="mobile">
                        MnAnalyse is the India's only and Largest Mergers & Ecquisition Based Case Competition. Started
                        in
                        2022 it attracts teams from more than 100 institutes.
                    </p>
                    <div class="sl_box_bottom">
                        <p class="sl_box_bottom_date">
                            FEBRAURY 14, 2023
                        </p>
                        <div class="sl_box_bottom_down">
                            <p>
                                DOWNLOAD
                                <img src={down} alt=""/>
                            </p>

                        </div>

                    </div>

                </div>
            </div>
            <div class="sl_box"  id="laundry1" style={{display: "none"}}>
                <div class="sl_box_img">
                    <img src={Rec3} alt="third"/>
                </div>
                <div class="sl_box_head">
                    <h2>
                        Laundry
                    </h2>
                    <p className="desktop">
                        MnAnalyse is the India's only and Largest Mergers & Ecquisition Based Case Competition. Started
                        in
                        2022 it attracts teams from more than 100 institutes including all Major IIM’s, IIT’s and other
                        Institutes of National importance.......
                        MnAnalyse is the India’s only and Largest Mergers & Ecquisition Based Case Competition. Started
                        in
                        2022 it attracts teams from more than 100 institutes including all Major IIM’s, IIT’s and other
                        Institutes of National importance.......
                    </p>
                    <p className="mobile">
                        MnAnalyse is the India's only and Largest Mergers & Ecquisition Based Case Competition. Started
                        in
                        2022 it attracts teams from more than 100 institutes.
                    </p>
                    <div class="sl_box_bottom">
                        <p class="sl_box_bottom_date">
                            FEBRAURY 14, 2023
                        </p>
                        <div class="sl_box_bottom_down">
                            <p>
                                DOWNLOAD
                                <img src={down} alt=""/>
                            </p>

                        </div>

                    </div>

                </div>
            </div>
           
           
           
        </div>
    </div>
        </div>


        

          

      
        <div>
          
          <div class="container">
        <img src={Ellipse} class="sl_ellipse_one" alt="ell"/>
        <img src={Ellipse2} class="sl_ellipse_two" alt="ell"/>
        <img src={Ellipse2} alt="" class="sl_ellipse_three"/>

        <div class="sl_page">

            <h1 class="sl_heading">
                Resources
            </h1>

            <p class="sl_para">
                Unleash your potential with our curated resources. Explore, learn, and excel on your path to success.
            </p>

            <div class="sl_search">
                <img src={Search} alt=""/>
                <input type="text" id= "searchbar2" onKeyUp={dostuffpg2} class="custom-input" placeholder="Search"/>
            </div>




            <div class="horizontal-line"></div>
            <div class="sl_box"  id="elephant">
                <div class="sl_box_img">
                    <img src={Rec3} alt="third"/>
                </div>
                <div class="sl_box_head">
                    <h2>
                        Elephant
                    </h2>
                    <p className="desktop">
                        MnAnalyse is the India's only and Largest Mergers & Ecquisition Based Case Competition. Started
                        in
                        2022 it attracts teams from more than 100 institutes including all Major IIM’s, IIT’s and other
                        Institutes of National importance.......
                        MnAnalyse is the India’s only and Largest Mergers & Ecquisition Based Case Competition. Started
                        in
                        2022 it attracts teams from more than 100 institutes including all Major IIM’s, IIT’s and other
                        Institutes of National importance.......
                    </p>
                    <p className="mobile">
                        MnAnalyse is the India's only and Largest Mergers & Ecquisition Based Case Competition. Started
                        in
                        2022 it attracts teams from more than 100 institutes.
                    </p>
                   
                    <div class="sl_box_bottom">
                        <p class="sl_box_bottom_date">
                            FEBRAURY 14, 2023
                        </p>
                        <div class="sl_box_bottom_down">
                            <p>
                                DOWNLOAD
                                <img src={down} alt=""/>

                            </p>

                        </div>

                    </div>

                </div>


            </div>
            <div class="sl_box"  id="fanta">
                <div class="sl_box_img">
                    <img src={Rec3} alt="third"/>
                </div>
                <div class="sl_box_head">
                    <h2>
                        Fanta
                    </h2>
                    <p className="desktop">
                        MnAnalyse is the India's only and Largest Mergers & Ecquisition Based Case Competition. Started
                        in
                        2022 it attracts teams from more than 100 institutes including all Major IIM’s, IIT’s and other
                        Institutes of National importance.......
                        MnAnalyse is the India’s only and Largest Mergers & Ecquisition Based Case Competition. Started
                        in
                        2022 it attracts teams from more than 100 institutes including all Major IIM’s, IIT’s and other
                        Institutes of National importance.......
                    </p>
                    <p className="mobile">
                        MnAnalyse is the India's only and Largest Mergers & Ecquisition Based Case Competition. Started
                        in
                        2022 it attracts teams from more than 100 institutes.
                    </p>
                    <div class="sl_box_bottom">
                        <p class="sl_box_bottom_date">
                            FEBRAURY 14, 2023
                        </p>
                        <div class="sl_box_bottom_down">
                            <p>
                                DOWNLOAD
                                <img src={down} alt=""/>
                            </p>




                        </div>

                    </div>

                </div>


            </div>
            <div class="sl_box"  id="grapes">
                <div class="sl_box_img">
                    <img src={Rec3} alt="third"/>
                </div>
                <div class="sl_box_head">
                    <h2>
                        Grapes
                    </h2>
                    <p className="desktop">
                        MnAnalyse is the India's only and Largest Mergers & Ecquisition Based Case Competition. Started
                        in
                        2022 it attracts teams from more than 100 institutes including all Major IIM’s, IIT’s and other
                        Institutes of National importance.......
                        MnAnalyse is the India’s only and Largest Mergers & Ecquisition Based Case Competition. Started
                        in
                        2022 it attracts teams from more than 100 institutes including all Major IIM’s, IIT’s and other
                        Institutes of National importance.......
                    </p>
                    <p className="mobile">
                        MnAnalyse is the India's only and Largest Mergers & Ecquisition Based Case Competition. Started
                        in
                        2022 it attracts teams from more than 100 institutes.
                    </p>
                    <div class="sl_box_bottom">
                        <p class="sl_box_bottom_date">
                            FEBRAURY 14, 2023
                        </p>
                        <div class="sl_box_bottom_down">
                            <p>
                                DOWNLOAD
                                <img src={down} alt=""/>
                            </p>




                        </div>

                    </div>

                </div>


            </div>
            <div class="sl_box"  id="house">
                <div class="sl_box_img">
                    <img src={Rec3} alt="third"/>
                </div>
                <div class="sl_box_head">
                    <h2>
                        House
                    </h2>
                    <p className="desktop">
                        MnAnalyse is the India's only and Largest Mergers & Ecquisition Based Case Competition. Started
                        in
                        2022 it attracts teams from more than 100 institutes including all Major IIM’s, IIT’s and other
                        Institutes of National importance.......
                        MnAnalyse is the India’s only and Largest Mergers & Ecquisition Based Case Competition. Started
                        in
                        2022 it attracts teams from more than 100 institutes including all Major IIM’s, IIT’s and other
                        Institutes of National importance.......
                    </p>
                    <p className="mobile">
                        MnAnalyse is the India's only and Largest Mergers & Ecquisition Based Case Competition. Started
                        in
                        2022 it attracts teams from more than 100 institutes.
                    </p>
                    <div class="sl_box_bottom">
                        <p class="sl_box_bottom_date">
                            FEBRAURY 14, 2023
                        </p>
                        <div class="sl_box_bottom_down">
                            <p>
                                DOWNLOAD
                                <img src={down} alt=""/>
                            </p>

                        </div>

                    </div>

                </div>
            </div>
            <div class="sl_box" id="apple2" style={{display: "none"}}>
                <div class="sl_box_img">
                    <img src={Rec3} alt="third"/>
                </div>
                <div class="sl_box_head">
                    <h2>
                        Apple
                    </h2>
                    <p className="desktop">
                        MnAnalyse is the India's only and Largest Mergers & Ecquisition Based Case Competition. Started
                        in
                        2022 it attracts teams from more than 100 institutes including all Major IIM’s, IIT’s and other
                        Institutes of National importance.......
                        MnAnalyse is the India’s only and Largest Mergers & Ecquisition Based Case Competition. Started
                        in
                        2022 it attracts teams from more than 100 institutes including all Major IIM’s, IIT’s and other
                        Institutes of National importance.......
                    </p>
                    <p className="mobile">
                        MnAnalyse is the India's only and Largest Mergers & Ecquisition Based Case Competition. Started
                        in
                        2022 it attracts teams from more than 100 institutes.
                    </p>
                   
                    <div class="sl_box_bottom">
                        <p class="sl_box_bottom_date">
                            FEBRAURY 14, 2023
                        </p>
                        <div class="sl_box_bottom_down">
                            <p>
                                DOWNLOAD
                                <img src={down} alt=""/>

                            </p>

                        </div>

                    </div>

                </div>


            </div>
            <div class="sl_box" id="banana2" style={{display: "none"}}>
                <div class="sl_box_img">
                    <img src={Rec3} alt="third"/>
                </div>
                <div class="sl_box_head">
                    <h2>
                        Banana
                    </h2>
                    <p className="desktop">
                        MnAnalyse is the India's only and Largest Mergers & Ecquisition Based Case Competition. Started
                        in
                        2022 it attracts teams from more than 100 institutes including all Major IIM’s, IIT’s and other
                        Institutes of National importance.......
                        MnAnalyse is the India’s only and Largest Mergers & Ecquisition Based Case Competition. Started
                        in
                        2022 it attracts teams from more than 100 institutes including all Major IIM’s, IIT’s and other
                        Institutes of National importance.......
                    </p>
                    <p className="mobile">
                        MnAnalyse is the India's only and Largest Mergers & Ecquisition Based Case Competition. Started
                        in
                        2022 it attracts teams from more than 100 institutes.
                    </p>
                    <div class="sl_box_bottom">
                        <p class="sl_box_bottom_date">
                            FEBRAURY 14, 2023
                        </p>
                        <div class="sl_box_bottom_down">
                            <p>
                                DOWNLOAD
                                <img src={down} alt=""/>
                            </p>




                        </div>

                    </div>

                </div>


            </div>
            <div class="sl_box"  id="cucumber2" style={{display: "none"}}>
                <div class="sl_box_img">
                    <img src={Rec3} alt="third"/>
                </div>
                <div class="sl_box_head">
                    <h2>
                        Cucumber
                    </h2>
                    <p className="desktop">
                        MnAnalyse is the India's only and Largest Mergers & Ecquisition Based Case Competition. Started
                        in
                        2022 it attracts teams from more than 100 institutes including all Major IIM’s, IIT’s and other
                        Institutes of National importance.......
                        MnAnalyse is the India’s only and Largest Mergers & Ecquisition Based Case Competition. Started
                        in
                        2022 it attracts teams from more than 100 institutes including all Major IIM’s, IIT’s and other
                        Institutes of National importance.......
                    </p>
                    <p className="mobile">
                        MnAnalyse is the India's only and Largest Mergers & Ecquisition Based Case Competition. Started
                        in
                        2022 it attracts teams from more than 100 institutes.
                    </p>
                    <div class="sl_box_bottom">
                        <p class="sl_box_bottom_date">
                            FEBRAURY 14, 2023
                        </p>
                        <div class="sl_box_bottom_down">
                            <p>
                                DOWNLOAD
                                <img src={down} alt=""/>
                            </p>




                        </div>

                    </div>

                </div>


            </div>
            
            <div class="sl_box"  id="donut2" style={{display: "none"}}>
                <div class="sl_box_img">
                    <img src={Rec3} alt="third"/>
                </div>
                <div class="sl_box_head">
                    <h2>
                        Donut
                    </h2>
                    <p className="desktop">
                        MnAnalyse is the India's only and Largest Mergers & Ecquisition Based Case Competition. Started
                        in
                        2022 it attracts teams from more than 100 institutes including all Major IIM’s, IIT’s and other
                        Institutes of National importance.......
                        MnAnalyse is the India’s only and Largest Mergers & Ecquisition Based Case Competition. Started
                        in
                        2022 it attracts teams from more than 100 institutes including all Major IIM’s, IIT’s and other
                        Institutes of National importance.......
                    </p>
                    <p className="mobile">
                        MnAnalyse is the India's only and Largest Mergers & Ecquisition Based Case Competition. Started
                        in
                        2022 it attracts teams from more than 100 institutes.
                    </p>
                    <div class="sl_box_bottom">
                        <p class="sl_box_bottom_date">
                            FEBRAURY 14, 2023
                        </p>
                        <div class="sl_box_bottom_down">
                            <p>
                                DOWNLOAD
                                <img src={down} alt=""/>
                            </p>

                        </div>

                    </div>

                </div>
            </div>
            
            <div class="sl_box"  id="knight2" style={{display: "none"}}>
                <div class="sl_box_img">
                    <img src={Rec3} alt="third"/>
                </div>
                <div class="sl_box_head">
                    <h2>
                        Knight
                    </h2>
                    <p className="desktop">
                        MnAnalyse is the India's only and Largest Mergers & Ecquisition Based Case Competition. Started
                        in
                        2022 it attracts teams from more than 100 institutes including all Major IIM’s, IIT’s and other
                        Institutes of National importance.......
                        MnAnalyse is the India’s only and Largest Mergers & Ecquisition Based Case Competition. Started
                        in
                        2022 it attracts teams from more than 100 institutes including all Major IIM’s, IIT’s and other
                        Institutes of National importance.......
                    </p>
                    <p className="mobile">
                        MnAnalyse is the India's only and Largest Mergers & Ecquisition Based Case Competition. Started
                        in
                        2022 it attracts teams from more than 100 institutes.
                    </p>
                    <div class="sl_box_bottom">
                        <p class="sl_box_bottom_date">
                            FEBRAURY 14, 2023
                        </p>
                        <div class="sl_box_bottom_down">
                            <p>
                                DOWNLOAD
                                <img src={down} alt=""/>
                            </p>

                        </div>

                    </div>

                </div>
            </div>
            <div class="sl_box"  id="igloo2" style={{display: "none"}}>
                <div class="sl_box_img">
                    <img src={Rec3} alt="third"/>
                </div>
                <div class="sl_box_head">
                    <h2>
                        Igloo
                    </h2>
                    <p className="desktop">
                        MnAnalyse is the India's only and Largest Mergers & Ecquisition Based Case Competition. Started
                        in
                        2022 it attracts teams from more than 100 institutes including all Major IIM’s, IIT’s and other
                        Institutes of National importance.......
                        MnAnalyse is the India’s only and Largest Mergers & Ecquisition Based Case Competition. Started
                        in
                        2022 it attracts teams from more than 100 institutes including all Major IIM’s, IIT’s and other
                        Institutes of National importance.......
                    </p>
                    <p className="mobile">
                        MnAnalyse is the India's only and Largest Mergers & Ecquisition Based Case Competition. Started
                        in
                        2022 it attracts teams from more than 100 institutes.
                    </p>
                    <div class="sl_box_bottom">
                        <p class="sl_box_bottom_date">
                            FEBRAURY 14, 2023
                        </p>
                        <div class="sl_box_bottom_down">
                            <p>
                                DOWNLOAD
                                <img src={down} alt=""/>
                            </p>

                        </div>

                    </div>

                </div>
            </div>
            <div class="sl_box"  id="jackal2" style={{display: "none"}}>
                <div class="sl_box_img">
                    <img src={Rec3} alt="third"/>
                </div>
                <div class="sl_box_head">
                    <h2>
                        Jackal
                    </h2>
                    <p className="desktop">
                        MnAnalyse is the India's only and Largest Mergers & Ecquisition Based Case Competition. Started
                        in
                        2022 it attracts teams from more than 100 institutes including all Major IIM’s, IIT’s and other
                        Institutes of National importance.......
                        MnAnalyse is the India’s only and Largest Mergers & Ecquisition Based Case Competition. Started
                        in
                        2022 it attracts teams from more than 100 institutes including all Major IIM’s, IIT’s and other
                        Institutes of National importance.......
                    </p>
                    <p className="mobile">
                        MnAnalyse is the India's only and Largest Mergers & Ecquisition Based Case Competition. Started
                        in
                        2022 it attracts teams from more than 100 institutes.
                    </p>
                    <div class="sl_box_bottom">
                        <p class="sl_box_bottom_date">
                            FEBRAURY 14, 2023
                        </p>
                        <div class="sl_box_bottom_down">
                            <p>
                                DOWNLOAD
                                <img src={down} alt=""/>
                            </p>

                        </div>

                    </div>

                </div>
            </div>
            
            <div class="sl_box"  id="laundry2" style={{display: "none"}}>
                <div class="sl_box_img">
                    <img src={Rec3} alt="third"/>
                </div>
                <div class="sl_box_head">
                    <h2>
                        Laundry
                    </h2>
                    <p className="desktop">
                        MnAnalyse is the India's only and Largest Mergers & Ecquisition Based Case Competition. Started
                        in
                        2022 it attracts teams from more than 100 institutes including all Major IIM’s, IIT’s and other
                        Institutes of National importance.......
                        MnAnalyse is the India’s only and Largest Mergers & Ecquisition Based Case Competition. Started
                        in
                        2022 it attracts teams from more than 100 institutes including all Major IIM’s, IIT’s and other
                        Institutes of National importance.......
                    </p>
                    <p className="mobile">
                        MnAnalyse is the India's only and Largest Mergers & Ecquisition Based Case Competition. Started
                        in
                        2022 it attracts teams from more than 100 institutes.
                    </p>
                    <div class="sl_box_bottom">
                        <p class="sl_box_bottom_date">
                            FEBRAURY 14, 2023
                        </p>
                        <div class="sl_box_bottom_down">
                            <p>
                                DOWNLOAD
                                <img src={down} alt=""/>
                            </p>

                        </div>

                    </div>

                </div>
            </div>
           
           
        </div>
    </div>
        </div>


        

        
        <div>
        <div class="container">
        <img src={Ellipse} class="sl_ellipse_one" alt="ell"/>
        <img src={Ellipse2} class="sl_ellipse_two" alt="ell"/>
        <img src={Ellipse2} alt="" class="sl_ellipse_three"/>

        <div class="sl_page">

            <h1 class="sl_heading">
                Resources
            </h1>

            <p class="sl_para">
                Unleash your potential with our curated resources. Explore, learn, and excel on your path to success.
            </p>

            <div class="sl_search">
                <img src={Search} alt=""/>
                <input type="text" id= "searchbar3" onKeyUp={dostuffpg3} class="custom-input" placeholder="Search"/>
            </div>




            <div class="horizontal-line"></div>
            <div class="sl_box"  id="igloo">
                <div class="sl_box_img">
                    <img src={Rec3} alt="third"/>
                </div>
                <div class="sl_box_head">
                    <h2>
                        Igloo
                    </h2>
                    <p className="desktop">
                        MnAnalyse is the India's only and Largest Mergers & Ecquisition Based Case Competition. Started
                        in
                        2022 it attracts teams from more than 100 institutes including all Major IIM’s, IIT’s and other
                        Institutes of National importance.......
                        MnAnalyse is the India’s only and Largest Mergers & Ecquisition Based Case Competition. Started
                        in
                        2022 it attracts teams from more than 100 institutes including all Major IIM’s, IIT’s and other
                        Institutes of National importance.......
                    </p>
                    <p className="mobile">
                        MnAnalyse is the India's only and Largest Mergers & Ecquisition Based Case Competition. Started
                        in
                        2022 it attracts teams from more than 100 institutes.
                    </p>
                   
                    <div class="sl_box_bottom">
                        <p class="sl_box_bottom_date">
                            FEBRAURY 14, 2023
                        </p>
                        <div class="sl_box_bottom_down">
                            <p>
                                DOWNLOAD
                                <img src={down} alt=""/>

                            </p>

                        </div>

                    </div>

                </div>


            </div>
            <div class="sl_box"  id="jackal">
                <div class="sl_box_img">
                    <img src={Rec3} alt="third"/>
                </div>
                <div class="sl_box_head">
                    <h2>
                        Jackal
                    </h2>
                    <p className="desktop">
                        MnAnalyse is the India's only and Largest Mergers & Ecquisition Based Case Competition. Started
                        in
                        2022 it attracts teams from more than 100 institutes including all Major IIM’s, IIT’s and other
                        Institutes of National importance.......
                        MnAnalyse is the India’s only and Largest Mergers & Ecquisition Based Case Competition. Started
                        in
                        2022 it attracts teams from more than 100 institutes including all Major IIM’s, IIT’s and other
                        Institutes of National importance.......
                    </p>
                    <p className="mobile">
                        MnAnalyse is the India's only and Largest Mergers & Ecquisition Based Case Competition. Started
                        in
                        2022 it attracts teams from more than 100 institutes.
                    </p>
                    <div class="sl_box_bottom">
                        <p class="sl_box_bottom_date">
                            FEBRAURY 14, 2023
                        </p>
                        <div class="sl_box_bottom_down">
                            <p>
                                DOWNLOAD
                                <img src={down} alt=""/>
                            </p>




                        </div>

                    </div>

                </div>


            </div>
            <div class="sl_box"  id="knight">
                <div class="sl_box_img">
                    <img src={Rec3} alt="third"/>
                </div>
                <div class="sl_box_head">
                    <h2>
                        Knight
                    </h2>
                    <p className="desktop">
                        MnAnalyse is the India's only and Largest Mergers & Ecquisition Based Case Competition. Started
                        in
                        2022 it attracts teams from more than 100 institutes including all Major IIM’s, IIT’s and other
                        Institutes of National importance.......
                        MnAnalyse is the India’s only and Largest Mergers & Ecquisition Based Case Competition. Started
                        in
                        2022 it attracts teams from more than 100 institutes including all Major IIM’s, IIT’s and other
                        Institutes of National importance.......
                    </p>
                    <p className="mobile">
                        MnAnalyse is the India's only and Largest Mergers & Ecquisition Based Case Competition. Started
                        in
                        2022 it attracts teams from more than 100 institutes.
                    </p>
                    <div class="sl_box_bottom">
                        <p class="sl_box_bottom_date">
                            FEBRAURY 14, 2023
                        </p>
                        <div class="sl_box_bottom_down">
                            <p>
                                DOWNLOAD
                                <img src={down} alt=""/>
                            </p>




                        </div>

                    </div>

                </div>


            </div>
            <div class="sl_box"  id="laundry">
                <div class="sl_box_img">
                    <img src={Rec3} alt="third"/>
                </div>
                <div class="sl_box_head">
                    <h2>
                        Laundry
                    </h2>
                    <p className="desktop">
                        MnAnalyse is the India's only and Largest Mergers & Ecquisition Based Case Competition. Started
                        in
                        2022 it attracts teams from more than 100 institutes including all Major IIM’s, IIT’s and other
                        Institutes of National importance.......
                        MnAnalyse is the India’s only and Largest Mergers & Ecquisition Based Case Competition. Started
                        in
                        2022 it attracts teams from more than 100 institutes including all Major IIM’s, IIT’s and other
                        Institutes of National importance.......
                    </p>
                    <p className="mobile">
                        MnAnalyse is the India's only and Largest Mergers & Ecquisition Based Case Competition. Started
                        in
                        2022 it attracts teams from more than 100 institutes.
                    </p>
                    <div class="sl_box_bottom">
                        <p class="sl_box_bottom_date">
                            FEBRAURY 14, 2023
                        </p>
                        <div class="sl_box_bottom_down">
                            <p>
                                DOWNLOAD
                                <img src={down} alt=""/>
                            </p>

                        </div>

                    </div>

                </div>
            </div>
            <div class="sl_box" id="apple3" style={{display: "none"}}>
                <div class="sl_box_img">
                    <img src={Rec3} alt="third"/>
                </div>
                <div class="sl_box_head">
                    <h2>
                        Apple
                    </h2>
                    <p className="desktop">
                        MnAnalyse is the India's only and Largest Mergers & Ecquisition Based Case Competition. Started
                        in
                        2022 it attracts teams from more than 100 institutes including all Major IIM’s, IIT’s and other
                        Institutes of National importance.......
                        MnAnalyse is the India’s only and Largest Mergers & Ecquisition Based Case Competition. Started
                        in
                        2022 it attracts teams from more than 100 institutes including all Major IIM’s, IIT’s and other
                        Institutes of National importance.......
                    </p>
                    <p className="mobile">
                        MnAnalyse is the India's only and Largest Mergers & Ecquisition Based Case Competition. Started
                        in
                        2022 it attracts teams from more than 100 institutes.
                    </p>
                   
                    <div class="sl_box_bottom">
                        <p class="sl_box_bottom_date">
                            FEBRAURY 14, 2023
                        </p>
                        <div class="sl_box_bottom_down">
                            <p>
                                DOWNLOAD
                                <img src={down} alt=""/>

                            </p>

                        </div>

                    </div>

                </div>


            </div>
            <div class="sl_box" id="banana3" style={{display: "none"}}>
                <div class="sl_box_img">
                    <img src={Rec3} alt="third"/>
                </div>
                <div class="sl_box_head">
                    <h2>
                        Banana
                    </h2>
                    <p className="desktop">
                        MnAnalyse is the India's only and Largest Mergers & Ecquisition Based Case Competition. Started
                        in
                        2022 it attracts teams from more than 100 institutes including all Major IIM’s, IIT’s and other
                        Institutes of National importance.......
                        MnAnalyse is the India’s only and Largest Mergers & Ecquisition Based Case Competition. Started
                        in
                        2022 it attracts teams from more than 100 institutes including all Major IIM’s, IIT’s and other
                        Institutes of National importance.......
                    </p>
                    <p className="mobile">
                        MnAnalyse is the India's only and Largest Mergers & Ecquisition Based Case Competition. Started
                        in
                        2022 it attracts teams from more than 100 institutes.
                    </p>
                    <div class="sl_box_bottom">
                        <p class="sl_box_bottom_date">
                            FEBRAURY 14, 2023
                        </p>
                        <div class="sl_box_bottom_down">
                            <p>
                                DOWNLOAD
                                <img src={down} alt=""/>
                            </p>




                        </div>

                    </div>

                </div>


            </div>
            <div class="sl_box"  id="cucumber3" style={{display: "none"}}>
                <div class="sl_box_img">
                    <img src={Rec3} alt="third"/>
                </div>
                <div class="sl_box_head">
                    <h2>
                        Cucumber
                    </h2>
                    <p className="desktop">
                        MnAnalyse is the India's only and Largest Mergers & Ecquisition Based Case Competition. Started
                        in
                        2022 it attracts teams from more than 100 institutes including all Major IIM’s, IIT’s and other
                        Institutes of National importance.......
                        MnAnalyse is the India’s only and Largest Mergers & Ecquisition Based Case Competition. Started
                        in
                        2022 it attracts teams from more than 100 institutes including all Major IIM’s, IIT’s and other
                        Institutes of National importance.......
                    </p>
                    <p className="mobile">
                        MnAnalyse is the India's only and Largest Mergers & Ecquisition Based Case Competition. Started
                        in
                        2022 it attracts teams from more than 100 institutes.
                    </p>
                    <div class="sl_box_bottom">
                        <p class="sl_box_bottom_date">
                            FEBRAURY 14, 2023
                        </p>
                        <div class="sl_box_bottom_down">
                            <p>
                                DOWNLOAD
                                <img src={down} alt=""/>
                            </p>




                        </div>

                    </div>

                </div>


            </div>
            <div class="sl_box"  id="donut3" style={{display: "none"}}>
                <div class="sl_box_img">
                    <img src={Rec3} alt="third"/>
                </div>
                <div class="sl_box_head">
                    <h2>
                        Donut
                    </h2>
                    <p className="desktop">
                        MnAnalyse is the India's only and Largest Mergers & Ecquisition Based Case Competition. Started
                        in
                        2022 it attracts teams from more than 100 institutes including all Major IIM’s, IIT’s and other
                        Institutes of National importance.......
                        MnAnalyse is the India’s only and Largest Mergers & Ecquisition Based Case Competition. Started
                        in
                        2022 it attracts teams from more than 100 institutes including all Major IIM’s, IIT’s and other
                        Institutes of National importance.......
                    </p>
                    <p className="mobile">
                        MnAnalyse is the India's only and Largest Mergers & Ecquisition Based Case Competition. Started
                        in
                        2022 it attracts teams from more than 100 institutes.
                    </p>
                    <div class="sl_box_bottom">
                        <p class="sl_box_bottom_date">
                            FEBRAURY 14, 2023
                        </p>
                        <div class="sl_box_bottom_down">
                            <p>
                                DOWNLOAD
                                <img src={down} alt=""/>
                            </p>

                        </div>

                    </div>

                </div>
            </div>
            <div class="sl_box"  id="elephant3" style={{display: "none"}}>
                <div class="sl_box_img">
                    <img src={Rec3} alt="third"/>
                </div>
                <div class="sl_box_head">
                    <h2>
                        Elephant
                    </h2>
                    <p className="desktop">
                        MnAnalyse is the India's only and Largest Mergers & Ecquisition Based Case Competition. Started
                        in
                        2022 it attracts teams from more than 100 institutes including all Major IIM’s, IIT’s and other
                        Institutes of National importance.......
                        MnAnalyse is the India’s only and Largest Mergers & Ecquisition Based Case Competition. Started
                        in
                        2022 it attracts teams from more than 100 institutes including all Major IIM’s, IIT’s and other
                        Institutes of National importance.......
                    </p>
                    <p className="mobile">
                        MnAnalyse is the India's only and Largest Mergers & Ecquisition Based Case Competition. Started
                        in
                        2022 it attracts teams from more than 100 institutes.
                    </p>
                    <div class="sl_box_bottom">
                        <p class="sl_box_bottom_date">
                            FEBRAURY 14, 2023
                        </p>
                        <div class="sl_box_bottom_down">
                            <p>
                                DOWNLOAD
                                <img src={down} alt=""/>
                            </p>

                        </div>

                    </div>

                </div>
            </div>
            <div class="sl_box"  id="Fanta3" style={{display: "none"}}>
                <div class="sl_box_img">
                    <img src={Rec3} alt="third"/>
                </div>
                <div class="sl_box_head">
                    <h2>
                        Fanta
                    </h2>
                    <p className="desktop">
                        MnAnalyse is the India's only and Largest Mergers & Ecquisition Based Case Competition. Started
                        in
                        2022 it attracts teams from more than 100 institutes including all Major IIM’s, IIT’s and other
                        Institutes of National importance.......
                        MnAnalyse is the India’s only and Largest Mergers & Ecquisition Based Case Competition. Started
                        in
                        2022 it attracts teams from more than 100 institutes including all Major IIM’s, IIT’s and other
                        Institutes of National importance.......
                    </p>
                    <p className="mobile">
                        MnAnalyse is the India's only and Largest Mergers & Ecquisition Based Case Competition. Started
                        in
                        2022 it attracts teams from more than 100 institutes.
                    </p>
                    <div class="sl_box_bottom">
                        <p class="sl_box_bottom_date">
                            FEBRAURY 14, 2023
                        </p>
                        <div class="sl_box_bottom_down">
                            <p>
                                DOWNLOAD
                                <img src={down} alt=""/>
                            </p>

                        </div>

                    </div>

                </div>
            </div>
            <div class="sl_box"  id="Grapes3" style={{display: "none"}}>
                <div class="sl_box_img">
                    <img src={Rec3} alt="third"/>
                </div>
                <div class="sl_box_head">
                    <h2>
                        Grapes
                    </h2>
                    <div class="sl_box_bottom">
                        <p class="sl_box_bottom_date">
                            FEBRAURY 14, 2023
                        </p>
                    <p className="desktop">
                        MnAnalyse is the India's only and Largest Mergers & Ecquisition Based Case Competition. Started
                        in
                        2022 it attracts teams from more than 100 institutes including all Major IIM’s, IIT’s and other
                        Institutes of National importance.......
                        MnAnalyse is the India’s only and Largest Mergers & Ecquisition Based Case Competition. Started
                        in
                        2022 it attracts teams from more than 100 institutes including all Major IIM’s, IIT’s and other
                        Institutes of National importance.......
                    </p>
                    <p className="mobile">
                        MnAnalyse is the India's only and Largest Mergers & Ecquisition Based Case Competition. Started
                        in
                        2022 it attracts teams from more than 100 institutes.
                    </p>
                  
                        <div class="sl_box_bottom_down">
                            <p>
                                DOWNLOAD
                                <img src={down} alt=""/>
                            </p>

                        </div>

                    </div>

                </div>
            </div>
            <div class="sl_box"  id="house3" style={{display: "none"}}>
                <div class="sl_box_img">
                    <img src={Rec3} alt="third"/>
                </div>
                <div class="sl_box_head">
                    <h2>
                        House
                    </h2>
                    <p className="desktop">
                        MnAnalyse is the India's only and Largest Mergers & Ecquisition Based Case Competition. Started
                        in
                        2022 it attracts teams from more than 100 institutes including all Major IIM’s, IIT’s and other
                        Institutes of National importance.......
                        MnAnalyse is the India’s only and Largest Mergers & Ecquisition Based Case Competition. Started
                        in
                        2022 it attracts teams from more than 100 institutes including all Major IIM’s, IIT’s and other
                        Institutes of National importance.......
                    </p>
                    <p className="mobile">
                        MnAnalyse is the India's only and Largest Mergers & Ecquisition Based Case Competition. Started
                        in
                        2022 it attracts teams from more than 100 institutes.
                    </p>
                    <div class="sl_box_bottom">
                        <p class="sl_box_bottom_date">
                            FEBRAURY 14, 2023
                        </p>
                        <div class="sl_box_bottom_down">
                            <p>
                                DOWNLOAD
                                <img src={down} alt=""/>
                            </p>

                        </div>

                    </div>

                </div>
            </div>
           
           
        </div>
    </div>
              </div>
      </Slider>
    </div>
  );
};

export default Carousel;
