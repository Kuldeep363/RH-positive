import React from 'react';

import './guide.styles.css';

import Svg7 from '../../assets/svg-7.png';

import Youtube from '../../assets/youtube.png';

import Input from '../input/input.component';

import CustomButton from '../custombutton/custombutton.component';

import { Link } from 'react-router-dom';


const Guide = () =>{
    return(
        <div className="donation-container">
            <div className="content-part">
                <div className="heading">New to blood donation?</div>
                <Link className='link'>
                  <img src={ Youtube } alt=""/>
                  Watch video guide
                </Link>
                <span>or</span>
                <div className="form">
                    <Input type='text' placeholder='Enter your name' guideInput/>    
                    <Input type='email' placeholder='Enter your email address' guideInput/>
                    <CustomButton guideButton>Get your guide</CustomButton>
                </div>
            </div>
            <div className="image-part">
                <img src={ Svg7 } alt=""/>
            </div>
        </div>
    )
}

export default Guide;