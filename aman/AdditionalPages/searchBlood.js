import React from 'react'
import './searchBlood.css'
import SearchGirlImage from '../Images/search-1.png'
import CustomButton from '../CustomButton/CustomButton'

export default function searchBlood(){
    return(
        <div className = "containerEmailPage">
        <div className = "containerButtons">
            <CustomButton guideButton className = "searchBloodBtn">Search Blood</CustomButton>
            <CustomButton guideButton className = "updateBloodBtn">Update Blood</CustomButton>
            <CustomButton guideButton className = "addPostBtn">Add Post</CustomButton>
            <CustomButton guideButton className = "sendEmailsBtn">send Emails</CustomButton>
        </div>

        <div className = "imgAndBtn">
        <div className = "setsOfBtn">
        <div className = "upperBtns">
            <button className = "Btn-1">A+</button>
            <button className = "Btn-2">A-</button>
            <button className = "Btn-3">B+</button>
            <button className = "Btn-4">B-</button>
        </div>

         <div className = "bottomBtns">
            <button className = "Btn-A">O+</button>
            <button className = "Btn-B">O-</button>
            <button className = "Btn-C">AB+</button>
            <button className = "Btn-D">AB-</button>
        </div>
        </div>
        <img src = {SearchGirlImage} alt = "imageSearchGirl" className = "searchImage"/>
        </div>
        </div>
    )
}