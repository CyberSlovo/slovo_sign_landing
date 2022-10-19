import React from "react";
import "./Container3.css";

function Container3(props) {
  const { src, title, subtitle, className } = props;

  return (
    <div className={`container-53 ${className || ""}`}>
      <img className="ic-sber-wallet-1" src={src} alt="Ic Sber wallet" />
      <div className="title-subtitle-15">
        <div className="title-26 sbsansdisplay-normal-shark-24px">{title}</div>
        <div className="subtitle-36 sbsanstext-regular-normal-shark-19px">{subtitle}</div>
      </div>
    </div>
  );
}

export default Container3;
