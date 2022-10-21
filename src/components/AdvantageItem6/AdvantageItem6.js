import React from "react";
import Container3 from "../Container3/Container3";
import "./AdvantageItem6.css";

function AdvantageItem6(props) {
  const { className, container3Props } = props;

  return (
    <div className={`advantage-item-9 ${className || ""}`}>
      <Container3
        src={container3Props.src}
        title={container3Props.title}
        subtitle={container3Props.subtitle}
        className={container3Props.className}
      />
    </div>
  );
}

export default AdvantageItem6;
