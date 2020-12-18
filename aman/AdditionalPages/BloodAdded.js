import React from 'react'
import './BloodAdded.css'
import formViewGirlImage from '../Images/update-3.png'
import addTick from '../Images/done.gif'
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
            <img src = {formViewGirlImage} alt = "viewGirlImage" className = "girlImage"/>
            <img src = {addTick} alt = "addTickGif" className = "tickGif"/>
            
        </div>

    )
}