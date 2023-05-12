import "./ButtonOutline.css";
// import React, { useState } from "react";
import React from "react";
function ButtonOutline(props) {
  const { text, onclick } = props;
  // const [hover, setIsHover] = useState(false);

  // function handleMouseEnter() {
  //   setIsHover(true);
  // }
  // function handleMouseLeave() {
  //   setIsHover(false);
  // }

  return (
    <div
      // onMouseEnter={handleMouseEnter}
      // onMouseLeave={handleMouseLeave}
      onClick={onclick}
      // hover={hover}
      className="button-outline sbsanstext-medium-blue-19px"
    >
      {text || "Подробнее"}
    </div>
  );
}

export default ButtonOutline;
