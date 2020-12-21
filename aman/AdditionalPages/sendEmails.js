import React from 'react'
import './sendEmails.css'
import messengerBoy from '../Images/email-1.png'
import CustomButton from '../CustomButton/CustomButton'

export default function sendEmails() {
    return (
        <div className="containerEmailPage">
            <div className="containerButtons">
                <CustomButton guideButton className="searchBloodBtn">Search Blood</CustomButton>
                <CustomButton guideButton className="updateBloodBtn">Update Blood</CustomButton>
                <CustomButton guideButton className="addPostBtn">Add Post</CustomButton>
                <CustomButton guideButton className="sendEmailsBtn">send Emails</CustomButton>
            </div>
            <div className="imgAndForm">
                <form className = "sendEmailsForm">
                <label for="RhSubject" className="Subject">Subject</label>
                <input type="text" name="subject" className="SubjectText" />

                <label for="Message" className="message">Message</label>
                <input type="text" name="message" className="MessageText" />

                    <button className="chooseImg">Choose images <i class="fa fa-cloud-upload"></i></button>
                    <button className="sendMail">Send mail <i class="material-icons">send</i></button>
                </form>
                <img src={messengerBoy} alt="messengerImage" className="BoyMessengerImage" />
                 
            </div>
        </div>
    )
}