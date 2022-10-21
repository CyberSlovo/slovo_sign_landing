import React from "react";
import "./Container2.css";

function Container2(props) {
  const { src, title, subtitle, className } = props;

  return (
    <div className={`container-36-1 ${className || ""}`}>
      <img className="ic-sber-wallet" src={src} alt="Ic Sber wallet" />
      <div className="title-subtitle-11">
        <div className="title-16 sbsansdisplay-normal-shark-24px">{title}</div>
        <div className="subtitle-22 sbsanstext-regular-normal-shark-19px">{subtitle}</div>
      </div>
    </div>
  );
}

export default Container2;
