import React from "react";
import Container2 from "../Container2/Container2";
import "./AdvantageItem2.css";

function AdvantageItem2(props) {
  const { className, container2Props } = props;

  return (
    <div className={`advantage-item-3 ${className || ""}`}>
      <Container2
        src= {container2Props.src}
        title={container2Props.title}
        subtitle={container2Props.subtitle}
        className={container2Props.className}
      />
    </div>
  );
}

export default AdvantageItem2;
