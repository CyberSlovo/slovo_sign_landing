import React, { useState } from "react";
import Frame270988836 from "../Frame270988836";
import "./Button.css";

function Button(props) {
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
      className={className}
    >
      <Frame270988836 className={className ?? ""} text={text} />
    </div>
  );
}

export default Button;
