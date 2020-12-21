import React from 'react'
import './updateBlood.css'
import girlWithTick from '../Images/update-2.png'
import CustomButton from '../CustomButton/CustomButton'

export default function updateBlood() {
    return (
        <div className="containerEmailPage">
            <div className="containerButtons">
                <CustomButton guideButton className="searchBloodBtn">Search Blood</CustomButton>
                <CustomButton guideButton className="updateBloodBtn">Update Blood</CustomButton>
                <CustomButton guideButton className="addPostBtn">Add Post</CustomButton>
                <CustomButton guideButton className="sendEmailsBtn">send Emails</CustomButton>
            </div>
            <div className="imgAndForm">
                <img src={girlWithTick} alt="GirlDonorImage" className="girlDonorImage" />
                <form className="formForRhId">
                    <label for="RhId" className="RhIdName">RH ID</label>
                    <input type="text" name="RhId_Name" className="RhIdText" />

                    <div className="checkBoxContainer">
                    <input type="checkbox" />
                        <label className="voluntary">Voluntary</label>
                        <input type="checkbox" />
                        <label className="replacement">Replacement</label>
                  
                    </div>

                    <label for="add" className="address">ADDRESS</label>
                    <input type="text" name="add_Name" className="addressText" />

                    <button className="addBlood">Add Blood</button>
                </form>
            </div>
        </div>
    )
}