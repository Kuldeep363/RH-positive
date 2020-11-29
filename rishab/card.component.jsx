import React from 'react';

import './card.styles.css';

import CustomButton from '../custombutton/custombutton.component';


const Card=( card , index ) => {
    return(
        <div className="card" key={index}>
            <img src={card.imageURL} alt="svg"/>
            <p className="title">{ card.title }</p>
            <p className="description">{ card.description }</p>
            <CustomButton className='button' cardButton>{card.buttonName}</CustomButton>
        </div> 
    )

}

export default Card;