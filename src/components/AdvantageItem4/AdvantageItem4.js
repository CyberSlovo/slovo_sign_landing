import React from "react";
import "./AdvantageItem4.css";

function AdvantageItem4(props) {
  const { src, title, subtitle, className } = props;

  return (
    <div className={`advantage-item-6 ${className || ""}`}>
      <div className="container-46">
        <img className="ic-sber-1" src={src} alt="Ic Sber wallet" />
        <div className="title-subtitle-12">
          <div className="title-22 sbsansdisplay-normal-shark-24px">{title}</div>
          <div className="subtitle-31 sbsanstext-regular-normal-shark-19px">{subtitle}</div>
        </div>
      </div>
    </div>
  );
}

export default AdvantageItem4;
