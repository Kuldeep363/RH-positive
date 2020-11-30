import React from 'react';

import './footer.styles.css';

import CustomButton from '../custombutton/custombutton.component';

import Facebook from '../../assets/facebook.svg';

import Instagram from '../../assets/instagram.svg';

import Twitter from '../../assets/twitter.svg';

import Linkedin from '../../assets/linkedin.svg';

import Youtube from '../../assets/youtube.svg';

import { BsHeartFill } from 'react-icons/bs';

const Footer= () => {
    return(
        <div className="footer-container">
            <p className="heading">Connect with us</p>
            <hr/>
            <div className="social-icons">
                <img src={ Facebook } alt=""/>
                <img src={ Instagram } alt=""/>
                <img src={ Twitter } alt=""/>
                <img src={ Linkedin } alt=""/>
                <img src={ Youtube } alt=""/>
            </div>
            <div className="footer-content">
              <div className="left-content">
                <div className="quick-links">
                    <div className="title2">Quick links</div>
                    <span></span>
                    <p>Get RH+ card</p>
                    <p>Become volunteer</p>
                    <p>Get your guide</p>
                    <p>Make an appointment</p>
                    <p>Check eligibility</p>
                </div>
                <div className="know-us">
                    <div className="title2">Know us</div>
                    <span className='line'></span>
                    <p>About us</p>
                    <p>Contact us</p>
                    <p>Read about us</p>
                    <p>Let's introduce</p>
                    <p></p>
                </div>
              </div>
                <div className="get-notification">
                    <input type="text" placeholder='Enter your email address'/>
                    <CustomButton notificationButton>Get latest notification</CustomButton>
                </div>
            </div>
            <div className="other-content">
                <div className="team-line">
                    <p>Made with <span>&#10084;</span> by RH+ team</p>
                </div>
                <div className="terms">
                    <p>Terms of uses</p>
                    <p>Privacy and policy</p>
                </div>
            </div>
            <div className="footer-line">
                <p><span>© </span> 2020 RH+ All rights reserved</p>
            </div>
        </div>
        )
}

export default Footer;