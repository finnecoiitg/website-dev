import React from 'react'
import Image6 from '../img/Image6.png';
import './DiscoverPotential.css';

const DiscoverPotential = () => {
    return (
        <div className="discover-potential-content">
            <div className="discover-potential-text-container">
                <h4 className='discover-potential-subtitle'>
                    Want to collaborate with us or explore finance
                </h4>
                <h2 className="discover-potential-title">
                    Discover your potential with us
                </h2>
                <span className="btn1"><button><span>JOIN US</span> <span>→</span> </button></span>
            </div>
            <div className="discover-potential-image-container">
                <img
                    src={Image6}
                    alt="Join our network"
                    className="discover-potential-image"
                    onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/400x300/0F343A/FFFFFF?text=Network+Image'; }}
                />
            </div>
        </div>
    )
}

export default DiscoverPotential
