import React from 'react';
import './Top.css';
import backgroundEvents from './images/Slice 2.svg';
import boximg from './images/Slice 5.svg';

function Top(){
    return (
        <section>
            <div className="header-events">
                <img src={backgroundEvents} className="header-bg" style={{width: '100%',height: '100%', overflow: 'hidden'}} />
            </div>

            <div style={{width: '100vw', marginBottom:'8.8vw', display:'flex', justifyContent:'center', alignItems: 'center'}} >
                <div className="greenbox" >
                   <div className="greenbox-text item">
                        <ul>
                            <li>Gear up for MNAnalyse - a case study analysis competion</li>
                        </ul>
                        <div>
                            <button className="top-register-button">REGISTER <span className="fa fa-chevron-right fa-xxs"></span></button>
                        </div>                   
                   </div>
                   <div className="greenbox-img item">
                        <img className="greenbox-img-img" src={boximg} />
                   </div>
                </div>
            </div>
        </section>
        
    );
}

export default Top;