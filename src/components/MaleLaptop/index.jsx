import React from "react";
import MaleLaptop08 from "../MaleLaptop08";
import "./MaleLaptop.css";

function MaleLaptop(props) {
  const { className, maleLaptop08Props } = props;

  return (
    <div className={`male-laptop-1 ${className || ""}`}>
      <MaleLaptop08 src={maleLaptop08Props.src} className={maleLaptop08Props.className} />
    </div>
  );
}

export default MaleLaptop;
