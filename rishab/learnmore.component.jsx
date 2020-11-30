import React from 'react';

import './learnmore.styles.css';

import Svg8 from '../../assets/svg-8.png';

import CustomButton from '../custombutton/custombutton.component';

const LearnMore = () =>{
    return(
        <div className = "TextSvg">
            <img src = { Svg8 } alt = "bookReadingImage" className = "bookReading" />
            <div className = "TextArea">
                <h2 className = "textAreaLetsBlood">Let's know our blood !</h2>
                <p className = "textAreaPara">There is no replacement of blood, your blood can save upto 3 lifes, so, use it wisely. Do you know to whom
                    you can donate or get from?
                </p>
                <CustomButton guideButton>Learn More</CustomButton>
            </div>
        </div>
    )
}

export default LearnMore;