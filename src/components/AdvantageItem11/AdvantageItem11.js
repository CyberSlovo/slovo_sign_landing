import React from "react";
import Container5 from "../Container5/Container5";
import "./AdvantageItem11.css";

function AdvantageItem11(props) {
  const { className, containerProps } = props;

  return (
    <div className={`advantage-item-13 ${className || ""}`}>
      <Container5
        src= {containerProps.src}
        title={containerProps.title}
        subtitle={containerProps.subtitle}
        className={containerProps.className}
      />
    </div>
  );
}

export default AdvantageItem11;
