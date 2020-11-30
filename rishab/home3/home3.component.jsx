import React from 'react';

import './home3.styles.css';

import CustomButton from '../custombutton/custombutton.component';

const Home3= () =>{
    return(
        <div className = "container">
            <div className = "text-block">
              <h1>Become Volunteer</h1>
              <p className = "paragraph">Volunteer is the bridge between the service and needed person. Come and join us in this beautiful course</p>
              <CustomButton home3Button>Join us</CustomButton>
            </div>
        </div>
    )
}

export default Home3;