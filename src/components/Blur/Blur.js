import React from "react";
import "./Blur.css";

function Blur(props) {
  const { className } = props;

  return (
    <div className={`blur ${className || ""}`}>
      <div className="ellipse-2166-3"></div>
      <div className="ellipse-2167-3"></div>
    </div>
  );
}

export default Blur;
