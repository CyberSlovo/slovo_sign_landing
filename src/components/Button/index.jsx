import React from "react";
import Frame270988836 from "../Frame270988836";
import "./Button.css";
import { useState } from 'react';

function Button(props) {
  const { onclick, className } = props;

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
    
    className={`button ${className || ""}`}>
      <Frame270988836 />
    </div>
  );
}

export default Button;
