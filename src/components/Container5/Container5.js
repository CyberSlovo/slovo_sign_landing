import React from "react";
import "./Container5.css";

function Container5(props) {
  const { src, title, subtitle, className } = props;

  return (
    <div className={`container-59 ${className || ""}`}>
      <img className="ic-sber-wallet-2" src={src} alt="Ic Sber wallet" />
      <div className="title-subtitle-14">
        <div className="title-29 sbsansdisplay-normal-shark-24px">{title}</div>
        <div className="subtitle-39 sbsanstext-regular-normal-shark-19px">{subtitle}</div>
      </div>
    </div>
  );
}

export default Container5;
