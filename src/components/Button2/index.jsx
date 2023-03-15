import "./Button2.css";
import React, { useState } from "react";

function Button2(props) {
  const { text, onclick, className } = props;

  const [hover, setIsHover] = useState(false);

  function handleMouseEnter() {
    setIsHover(true);
  }
  function handleMouseLeave() {
    setIsHover(false);
  }

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={onclick}
      className={className || "button-7"}
    >
      <div className="frame-270988836-4">
        <div className="button-8 sbsanstext-regular-normal-white-19px">
          {text || "Подробнее"}
        </div>
      </div>
    </div>
  );
}

export default Button2;
