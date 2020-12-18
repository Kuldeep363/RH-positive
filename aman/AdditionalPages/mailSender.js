import React from 'react'
import './mailSender.css'
import SenderImage from '../Images/email-2.png'
import CustomButton from '../CustomButton/CustomButton'

export default function mailSend(){
    return(
        <div className = "containerEmailPage">
        <div className = "containerButtons">
            <CustomButton guideButton className = "searchBloodBtn">Search Blood</CustomButton>
            <CustomButton guideButton className = "updateBloodBtn">Update Blood</CustomButton>
            <CustomButton guideButton className = "addPostBtn">Add Post</CustomButton>
            <CustomButton guideButton className = "sendEmailsBtn">send Emails</CustomButton>
        </div>
            <img src = {SenderImage} alt = "imageSend" className = "senderImage"/>
            <p className = "mailStatement">Mail sends to every donor</p>
        </div>

    )
}