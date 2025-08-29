import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'
import {Link} from 'react-router-dom'
import { Route } from 'react-router-dom'
const Footer = () => {
    return (
        <div className='footer' id='footer'>
            <div className="footer-content">

                <div className="footer-content-left">
                    <img src={assets.logo} alt="" />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla itaque adipisci praesentium tempore aliquam corporis, molestiae accusamus esse. Tempora in ullam praesentium quibusdam facere numquam voluptatibus ut blanditiis quasi aliquid.</p>
                    <div className="footer-social-icon">
                        <img src={assets.facebook_icon} alt="Facebook" />
                        <img src={assets.twitter_icon} alt="Twitter" />
                        <img src={assets.linkedin_icon} alt="Linkedin" />
                    </div>
                </div>

                <div className="footer-content-center">
                    <h2>COMPANY</h2>

                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About Us</Link></li>
                        <li><Link to="/delivery">Delivery</Link></li>
                        <li><Link to="/privacy-policy">Privacy Policy</Link></li>
                    </ul>
                </div>

                <div className="footer-content-right">
                    <h2>GET IN TOUCH </h2>
                    <ul>
                        <li>+91 1234567890</li>
                        <li>contact@tomato.com</li>
                    </ul>
                </div>
            </div>
            <hr />
            <p className='footer-copyright'>Copyright  2025  © Tomato.com -All Rights Reserved.  </p>
        </div>
    )
}

export default Footer