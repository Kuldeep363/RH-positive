import React from 'react'
import './TextSvg.css'
import bookReadingSvg from '../Images/svg-8.png'
export default function TextSvg()
{
    return(
        <div className = "TextSvg">
            <img src = {bookReadingSvg} alt = "bookReadingImage" className = "bookReading" />
            <div className = "TextArea">
                <h2 className = "textAreaLetsBlood">Let's know our blood !</h2>
                <p className = "textAreaPara">There is no replacement of blood, your blood can save upto 3 lifes, so, use it wisely. Do you know to whom
                    you can donate or get from?
                </p>
                <button className="LearnMore"  id ="LearnMoreId" type="submit" >Learn more</button>
            </div>
        </div>
    )
}