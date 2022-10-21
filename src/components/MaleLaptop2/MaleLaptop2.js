import React from "react";
import MaleLaptop08 from "../MaleLaptop08/MaleLaptop08";
import "./MaleLaptop2.css";

function MaleLaptop2(props) {
  const { className, maleLaptop08Props } = props;

  return (
    <div className={`male-laptop-2 ${className || ""}`}>
      <MaleLaptop08 src={maleLaptop08Props.src} className={maleLaptop08Props.className} />
    </div>
  );
}

export default MaleLaptop2;
