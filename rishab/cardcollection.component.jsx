import React from 'react';

import './cardcollection.styles.css';

import Card from '../card/card.component';

import Items from './cardcollection.data';


const CardCollection =()=>{  
    
        return(
         <div className="collection">
             {
                 Items.map(Card)
             }
         </div>
    )
}

export default CardCollection;