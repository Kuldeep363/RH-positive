import React from 'react'
import './addCssImage.css'
import donation from '../Images/home-3.png'

export default function AddImages()
{
    return(
        <div className = "container">
        <img src = {donation} alt = "donor" className = "imageStyle"/>
        <div className = "text-block">
              <h1 className = "becomeVolunteer">Become Volunteer</h1>
              <p className = "paragraph">Volunteer is the bridge between the service and needed person. Come and join us in this beautiful course</p>
              <button className="btnForJoin"  id ="joinUs" type="submit" >Join us</button>
        </div>
        </div>
    )
}