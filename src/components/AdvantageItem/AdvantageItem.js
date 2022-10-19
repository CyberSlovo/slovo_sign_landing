import React from "react";
import TitleSubtitle from "../TitleSubtitle/TitleSubtitle";
import "./AdvantageItem.css";

function AdvantageItem(props) {
  const { className, titleSubtitleProps } = props;

  return (
    <div className={`advantage-item-1-1 ${className || ""}`}>
      <div className="container-5">
        <img className="ic-sber" src={titleSubtitleProps.src} alt="Ic Sber wallet" />
        <TitleSubtitle title={titleSubtitleProps.title} subtitle={titleSubtitleProps.subtitle} />
      </div>
    </div>
  );
}

export default AdvantageItem;
