import React from "react";
import TitleSubtitle from "../TitleSubtitle/TitleSubtitle";
import "./AdvantageItem4.css";
import IcSberWallet from "../../assets/images/ic-sber-wallet@2x.svg";

function AdvantageItem4(props) {
  const { className, titleSubtitleProps } = props;

  return (
    <div className={`advantage-item-6-1 ${className || ""}`}>
      <div className="container-25">
        <img className="ic-sber" src= { IcSberWallet } alt="Ic Sber wallet" />
        <TitleSubtitle title={titleSubtitleProps.title} subtitle={titleSubtitleProps.subtitle} />
      </div>
    </div>
  );
}

export default AdvantageItem4;