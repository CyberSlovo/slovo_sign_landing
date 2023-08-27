import React from "react";
import "./MaleLaptop.css";

function MaleLaptop(props) {
  const { className, maleLaptop08Props, isMobile } = props;

  return (
    <div
      className={
        isMobile ? className || "" : `male-laptop-1 ${className || ""}`
      }
    >
      {/* <MaleLaptop08
        src={maleLaptop08Props.src}
        className={maleLaptop08Props.className}
      /> */}
    </div>
  );
}

export default MaleLaptop;
