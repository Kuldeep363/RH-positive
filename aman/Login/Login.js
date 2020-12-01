import React from 'react'
import './login.css'
import LoginSvg from '../Images/login-svg.png'
import CustomButton from '../CustomButton/CustomButton';
export default function Login()
{
    return(
        <div className = "login-container">
            <img src = {LoginSvg} alt = "loginSvg" className = "Login-Svg" />
            <div className = "LoginForm">
                <h2 className = "login">Login</h2>

                <input type = "text" placeholder = "Enter your RH+ id" className = "placeHolder-1"></input>
                <input type = "text" placeholder = "Password" className = "placeHolder-2"></input>
                
                <CustomButton guideButton>Login</CustomButton>
            </div>
        </div>
    )
}