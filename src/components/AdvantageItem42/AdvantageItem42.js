import React from "react";
import TitleSubtitle3 from "../TitleSubtitle3/TitleSubtitle3";
import "./AdvantageItem42.css";
import IcSberWallet from "../../assets/images/ic-sber-wallet@2x.svg";

function AdvantageItem42(props) {
  const { className, titleSubtitleProps } = props;

  return (
    <div className={`advantage-item-16 ${className || ""}`}>
      <div className="container-69">
        <img className="ic-sber-2" src={IcSberWallet} alt="Ic Sber wallet" />
        <TitleSubtitle3 title={titleSubtitleProps.title} subtitle={titleSubtitleProps.subtitle} />
      </div>
    </div>
  );
}

export default AdvantageItem42;
