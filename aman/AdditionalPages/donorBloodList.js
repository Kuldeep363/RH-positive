import React from 'react'
import './donorBloodList.css'
import detailCollectorBoy from '../Images/search-2.png'
import CustomButton from '../CustomButton/CustomButton'

export default function donorBloodList() {
    return (
        <div className="containerEmailPage">
            <div className="containerButtons">
                <CustomButton guideButton className="searchBloodBtn">Search Blood</CustomButton>
                <CustomButton guideButton className="updateBloodBtn">Update Blood</CustomButton>
                <CustomButton guideButton className="addPostBtn">Add Post</CustomButton>
                <CustomButton guideButton className="sendEmailsBtn">send Emails</CustomButton>
            </div>
            <div className="imgAndListOfBlood">
                <img src={detailCollectorBoy} alt="collectorBoy" className="BoyCollectorImage" />
                 
            </div>
        </div>
    )
}