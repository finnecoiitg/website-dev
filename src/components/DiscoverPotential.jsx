import React from 'react';
import './DiscoverPotential.css';
import boximg from './images/Frame 2608631.svg';

function GreenBox1(){
    return (
        <section style={{marginBottom:'40vw'}}>
            <div style={{width: '100vw', marginBottom:'8.8vw', display:'flex', justifyContent:'center', alignItems:'center'}} >
                <div className="greenbox1">
                   <div className="greenbox-text1 item">
                    <ul>
                        <li className='li-one'>Want to collaborate with us or explore finance? </li>
                        <li className='li-two'>Discover your potential with us.</li>
                    </ul>
                    <div>
                        <button className='join-us-button'>JOIN US <span className="fa fa-chevron-right fa-xxs"></span></button>
                    </div>
                    
                   </div>
                   <div className="greenbox-img1 item">
                        <img src={boximg} className="disc-potential-imgimg"/>
                   </div>
                </div>
            </div>
        </section>
        
    );
}

export default GreenBox1;