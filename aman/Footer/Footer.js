import React from 'react'
import './footer.css'
export default function Footer() {
    return(
        <div className = "Footer">

        <div className = "footerFirst">
            <div className = "row">
                <h1 className = "connectUs">Connect with us</h1>
            </div>
        </div>

        <div className = "footerMid">
            <div className = "row">

                <div className = "col-4">
                   <h3 className = "ql">Quick links</h3>
                 
                   <ul className = "ql-links">
                     <li>Get RH+ Card</li>
                     <li>Become Voulteer</li> 
                     <li>Get Your Guide</li>
                     <li>Make an appointment</li>
                     <li>Check Eligibility</li>
                  </ul>  

                </div>
                <div className = "col-4">
                    <h3 className = "kus">Know us</h3>

                    <ul className = "kus-links">
                       <li>About us</li>
                       <li>Contact us</li> 
                       <li>Read about us </li>
                       <li>Let'introduce</li>
                    </ul>  

                </div>
                <div className = "col-2">
                <input type="text " placeholder="Enter Your Email Address" className = "pHolderstyle"></input><br/>
                <button className="btnstyle"  id ="notification" type="submit" >Get The latest Notification</button>
                </div>
            </div>

            <div className ="row">
            <div className = "col-6">
                <div className = "devTeam">Made by RH+ Developer team</div>
            </div>
            <div className = "col-3">
            <div className = "tou">Term of uses</div>
            </div>
            <div className = "col-3">
            <div className = "pndp">privacy and policy</div>
            </div>
            </div>
        </div>

        <div className = "footerBottom" >
            <span style = {{top : "1.5rem" , position : "relative"}}>
                &copy;{new Date().getFullYear()} All right reserved RH+.
            </span>
        </div>

        </div>
        )
}

