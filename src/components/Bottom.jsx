import React from 'react';
import './Bottom.css';
import image79 from './images/image79.svg';
import thoughtCatalogImage from './images/thought-catalog-505eectW54k-unsplash1.svg';

function Bottom() {
  return (
    <section className="below-carousel">
        <div className="part-1-aks">
            <p className="part-1-aks-para1">
                Already a part of IITG family and want to explore finance
            </p>
            <p className="part-1-aks-para2">
                <b>Explore more of our courses</b>
            </p>
            <button className="bottom-button" >EXPLORE COURSES <span className="fa fa-chevron-right fa-xxs"></span></button>
            <img className='bottom-img' src={image79} style={{ borderRadius: '22px' }} alt="Course" />
        </div>
        <div className="part-1-aks">
            <img className='bottom-img' src={thoughtCatalogImage} style={{ borderRadius: '22px' }} alt="Thought" />
            <p className="part-1-aks-para1" style={{ marginTop: '3.4vw'}}>
                Effortlessly tackle time-consuming computing tasks
            </p>
            <p className="part-1-aks-para2">
               <b>Get ahead with our resources</b>
            </p>
            <button className="bottom-button">EXPLORE RESOURCES <span className="fa fa-chevron-right fa-xxs"></span></button>
        </div>
    </section>
  );
}

export default Bottom;
