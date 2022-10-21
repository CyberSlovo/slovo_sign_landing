import React from "react";
import "./Button22.css";
import { useState } from 'react';

function Button22(props) {
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
      className="button">
      <div className="frame-270988836">
        <div className="button-1 sbsanstext-regular-normal-white-19px">Подробнее</div>
      </div>
    </div>
  );
}

export default Button22;
