import React from "react";
import "./Button.css";
import { useState } from 'react';

function Button(props) {
  const { onclick, children } = props;

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
        <div className="button-1">{children}</div>
      </div>
    </div>
  );
}

export default Button;