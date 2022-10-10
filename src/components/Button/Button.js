import React from "react";
import "./Button.css";

function Button(props) {
  const { children } = props;

  return (
    <div className="button">
      <div className="frame-270988836">
        <div className="button-1">{children}</div>
      </div>
    </div>
  );
}

export default Button;