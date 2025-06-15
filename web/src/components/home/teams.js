import React from 'react'
import  "./teams.css";
import Piggy3 from '../img/piggy3 3.svg';
import Ellipse from '../img/Ellipse 37.svg'
import Profilepic from '../img/profile-pic.svg'

function Teams() {
  return (
    <> <div className="bhai">
        <div className="india">
    <div className="title-aks"><p>Have a look at the teams <br/> working here.</p></div>
    
    <div className="akshaya">
        <div className="card">
            <div className="card-title">
                <p>FEC <br/> QUANT</p>
            </div>
            <div className="card-body-aks">
                <p className="card-text-aks"> Our mission is to create meaningful opportunities for personal and professional growth.
                     Through collaboration, innovation, and hard work, we strive to create sustainable solutions to the challenges facing our community.</p>
                <img alt="piggy-img"   src={Piggy3} className="piggy-aks"/>
                <img alt="ellipse"   src={Ellipse} className="ellipse1-aks"/>
            </div>
            <div className="arrow-circle-aks">
            <b>→</b>
            </div>
        </div>
        <div className="card">
            <div className="card-title">
                <p>FEC <br/> DEFI</p>
            </div>
            <div className="card-body-aks">
                <p className="card-text-aks"> Our mission is to create meaningful opportunities for personal and professional growth.
                     Through collaboration, innovation, and hard work, we strive to create sustainable solutions to the challenges facing our community.</p>
                     <img alt="piggy-img"   src={Piggy3} className="piggy-aks"/>
                     <img alt="ellipse"   src={Ellipse} className="ellipse1-aks"/>
            </div>
            <div className="arrow-circle-aks">
            <b>→</b>
            </div>
        </div>
        <div className="card">
            <div className="card-title">
                <p>FEC <br/> CAPITAL</p>
            </div>
            <div className="card-body-aks">
                <p className="card-text-aks"> Our mission is to create meaningful opportunities for personal and professional growth.
                     Through collaboration, innovation, and hard work, we strive to create sustainable solutions to the challenges facing our community.</p>
                     <img alt="piggy-img"   src={Piggy3} className="piggy-aks"/>
                     <img alt="ellipse"   src={Ellipse} className="ellipse1-aks"/>
            </div>
            <div className="arrow-circle-aks">
                <b>→</b>
            </div>
        </div>
    </div>
</div>
<div className="india">
    <div className="title-aks"><p>What students have to<br/> say about us?</p></div>
</div>
<div className="wrapper">
    <div className="item col1 hey">
        <p>Live data plays a big role in my design
            process. Thanks to Kernel I can now use it without any hassle and shorten my process which makes it a key tool for me.</p>
        <div className="aks-grid-item4 aks-grid-item">
            <div className="pic-aks">
                    <img alt="profile-pic"   src={Profilepic}/>
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
            <img alt="profile-pic"   src={Profilepic}/>
            </div>
            <div className="info-aks">
            <p className="commentor-aks">Shashwat Pandey</p>
                    <p className="post-aks"> Secy</p>
            </div>
                
        </div>
    </div>
    <div className="item col1">
        <p>Live data plays a big role in my design
            process. Thanks to Kernel I can now use it without any hassle and shorten my process which makes it a key tool for me.</p>
        <div className="aks-grid-item4 aks-grid-item">
            <div className="pic-aks">
            <img alt="profile-pic"   src={Profilepic}/>
            </div>
            <div className="info-aks">
            <p className="commentor-aks">Shashwat Pandey</p>
                    <p className="post-aks"> Secy</p>
            </div>
                
        </div>
    </div>
</div></div></>
  )
}

export default Teams;