import React from "react";
import Frame270988836 from "../Frame270988836";
import "./Button.css";
import { useState } from "react";

function Button(props) {
  const { text, onclick, className } = props;

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
      className={className ? "" : "button"}
    >
      <Frame270988836 className={className ?? ""} text={text} />
    </div>
  );
}

export default Button;
