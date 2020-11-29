import React from 'react'
import './addCssImage.css'
import donation from '../Images/donor.jpg'

export default function AddImages()
{
    return(
        <div className = "container">
        <img src = {donation} alt = "donor" className = "imageStyle"/>
        <div className = "text-block">
              <h1 className = "bv">Become Volunteer</h1>
              <p className = "paraSp">Volunteer is the bridge between the service and needed person. Come and join us in this beautiful course</p>
              <button className="btnInbv"  id ="joinUs" type="submit" >Join us</button>
        </div>
        </div>
    )
}