import React from "react";
import Container from "../Container/Container";
import "./AdvantageItem.css";
import IcSberWallet from "../../assets/images/ic-sber-wallet@2x.svg";

function AdvantageItem(props) {
  const { className, containerProps } = props;

  return (
    <div className={`advantage-item ${className || ""}`}>
      <Container title={containerProps.title} subtitle={containerProps.subtitle} className={containerProps.className} src={IcSberWallet} />
    </div>
  );
}

export default AdvantageItem;