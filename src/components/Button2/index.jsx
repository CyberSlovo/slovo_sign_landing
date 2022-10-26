import React from "react";
import "./Button2.css";
import { useState } from 'react';

function Button2(props) {
  const { onclick } = props;

  const [setIsHover] = useState(false);

  const handleMouseEnter = () => {
     setIsHover(true);
  };
  const handleMouseLeave = () => {
     setIsHover(false);
  };

  return (
    <div 

    onMouseEnter={handleMouseEnter}
    onMouseLeave={handleMouseLeave}
    onClick={onclick} 
    
    
    className="button-7">
      <div className="frame-270988836-4">
        <div className="button-8 sbsanstext-regular-normal-white-19px">Подробнее</div>
      </div>
    </div>
  );
}

export default Button2;
