import React from 'react'
import './contact.css'
import contactLogo from '../Images/contact-png.png'
//import contactIcon from ''
//import whatsAppIcon from ''
//import msgIcon from ''
import CustomButton from '../CustomButton/CustomButton'
export default function Contact(){
  return(
      <div className = "ContactContainer">
            <img src = {contactLogo} alt = "LogoContact" className = "contactImg"/>
            <div className = "ContactForm">
              <h2 className = "contactUs">Contact Us</h2>
              {/* <div className = "IconContainer">
                  <img src = {contactIcon} alt = "contact" className = "IconContact"/>
                  <img src = {whatsAppIcon} alt = "whatsApp" className = "IconwhatsApp"/>
                  <img src = {msgIcon} alt = "msg" className = "IconMsg"/>
              </div> */}
              <h2 className = "OR">or</h2>
              <input type = "email" placeholder = "Email" className = "placeHolderEmail"></input>
              <input type = "text" placeholder = "Full name" className = "placeHolderName"></input>
              <input type = "text" placeholder = "Message" className = "placeHolderMsg"></input>
              <CustomButton guideButton>send message</CustomButton>
            </div>
      </div>
  )
}