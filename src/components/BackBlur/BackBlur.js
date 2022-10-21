import React from "react";
import "./BackBlur.css";

function BackBlur(props) {
  const { className } = props;

  return (
    <div className={`back-blur ${className || ""}`}>
      <div className="ellipse-container">
        <div className="ellipse-2166"></div>
        <div className="ellipse-2167"></div>
      </div>
    </div>
  );
}

export default BackBlur;
