import React from 'react'
import './Hero.css'
import LeftHand from '../Assets/handLeft.png'
import arrow_icon from '../Assets/arrowIcon.png'
import RightLogo from '../Assets/rightLogo.png'

const Hero = () => {
    return (
        <div className='Hero'>
            <div className="Hero-left">
                <h2>NEW ARRIVALS ONLY</h2>
                <div>
                    <div className="hero-hand-icon">
                        <p>new</p>
                        <img src={LeftHand} alt="" />
                    </div>
                    <p>Collections</p>
                    <p>For Everyone</p>
                </div>
                <div className="hero-latest-btn">
                    <div>Lates Collection</div>
                    <img src={arrow_icon} alt="" />
                </div>
            </div>
            <div className="hero-right">
                <img src={RightLogo} alt="" />
            </div>
        </div>
    )
}
export default Hero;