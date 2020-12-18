import React from 'react'
import './donorPage.css'
import donorGirl from '../Images/update-1.png'
import CustomButton from '../CustomButton/CustomButton'

export default function donorPage(){
    return(
        <div className = "containerEmailPage">
        <div className = "containerButtons">
            <CustomButton guideButton className = "searchBloodBtn">Search Blood</CustomButton>
            <CustomButton guideButton className = "updateBloodBtn">Update Blood</CustomButton>
            <CustomButton guideButton className = "addPostBtn">Add Post</CustomButton>
            <CustomButton guideButton className = "sendEmailsBtn">send Emails</CustomButton>
        </div>
            <div className = "imgAndBtn">
            <img src = {donorGirl} alt = "GirlDonorImage" className = "girlDonorImage"/>
            <div className = "sideTwoBtns">
            <button className = "Btn-1"><i className="fa fa-arrow-circle-o-left"></i>  Existing Donor</button> //add left rather than right
                <button className = "Btn-2">New Donor  <i className="fa fa-arrow-circle-o-right"></i></button>
                
            </div>
            </div>
        </div>
    )}
