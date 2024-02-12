import React from 'react'
import './Footer.css'
import logo from '../Assets/logo.png'
import whatsapp from '../Assets/Footer/whatsapp.png'
import instagram from '../Assets/Footer/instagram.png'
import facebook from '../Assets/Footer/facebook.png'

const Footer = () => {
    return (
        <div className='footer'>
            <div className="footer-logo">
                <img src={logo} alt="" />
                <p>RAM COLLECTION</p>
            </div>

                <ul className="footer-links">
                    <li>Company</li>
                    <li>Products</li>
                    <li>Offices</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            <div className="footer-social-icon">
                <div className="footer-icon-container">
                    <img src={whatsapp} alt="" />
                </div>
                <div className="footer-icon-container">
                    <img src={instagram} alt="" />
                </div>
                <div className="footer-icon-container">
                    <img src={facebook} alt="" />
                </div>
            </div>
            <div className="footer-copyrights">
                <hr />
                <p>copyright @ 2024 - All Right Reserved</p>
            </div>
        </div>
    )
}

export default Footer