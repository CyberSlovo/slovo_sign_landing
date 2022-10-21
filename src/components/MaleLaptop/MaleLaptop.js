import React from "react";
import MaleLaptop08 from "../MaleLaptop08/MaleLaptop08";
import "./MaleLaptop.css";

function MaleLaptop(props) {
  const { className, maleLaptop08Props } = props;

  return (
    <div className={`male-laptop ${className || ""}`}>
      <MaleLaptop08 src={maleLaptop08Props.src} />
    </div>
  );
}

export default MaleLaptop;
