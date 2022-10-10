import React from "react";
import Container from "../Container/Container";
import "./AdvantageItem.css";

function AdvantageItem(props) {
  const { className, containerProps } = props;

  return (
    <div className={`advantage-item ${className || ""}`}>
      <Container title={containerProps.title} subtitle={containerProps.subtitle} className={containerProps.className} src={containerProps.src} />
    </div>
  );
}

export default AdvantageItem;