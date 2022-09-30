import React from "react";
import Container from "../Container";
import "./AdvantageItem.css";

function AdvantageItem(props) {
  const { className, containerProps } = props;

  return (
    <div className={`advantage-item ${className || ""}`}>
      <Container title={containerProps.title} subtitle={containerProps.subtitle} className={containerProps.className} />
    </div>
  );
}

export default AdvantageItem;
