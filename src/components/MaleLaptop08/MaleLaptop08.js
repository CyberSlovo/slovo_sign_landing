import React from "react";
import "./MaleLaptop08.css";

function MaleLaptop08(props) {
  const { src, className } = props;

  return (
    <div className={`male-laptop-08 ${className || ""}`}>
      <img className="private_2-1" src={src} alt="private_2 1" />
    </div>
  );
}

export default MaleLaptop08;
