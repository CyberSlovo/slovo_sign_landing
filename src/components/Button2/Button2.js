import React from "react";
import { useState } from 'react';
import "./Button2.css";

function Button2(props) {
  const { onclick } = props;
  
  const [isHover, setIsHover] = useState(false);

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
    className="button-2">
      <div className="frame-270988836-1">
        <div className="button-3 sbsanstext-regular-normal-white-19px">Подробнее</div>
      </div>
    </div>
  );
}

export default Button2;