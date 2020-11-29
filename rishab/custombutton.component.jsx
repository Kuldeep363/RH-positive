import React from 'react';

import './custombutton.styles.css';

const CustomButton = ({ children , navBarButton , cardButton }) =>{
  return(
      <button className={`${navBarButton ? 'navbar-button' : ' '} ${cardButton ? 'card-button' : ' '} main-button`}>
        { children }
      </button>
  )
}

export default CustomButton;