import React from "react";
import "./ButtonOutline.css";
import { useState } from "react";

function ButtonOutline(props) {
  const { text, onclick } = props;
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
      className="button-outline sbsanstext-medium-blue-19px"
    >
      {text || "Подробнее"}
    </div>
  );
}

export default ButtonOutline;
