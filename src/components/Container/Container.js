import React from "react";
import "./Container.css";

function Container(props) {
  const { title, subtitle, className, src} = props;

  return (
    <div className={`container-5-1 ${className || ""}`}>
      <img className="ic-sber-wallet" src={src} alt="Ic Sber wallet" />
      <div className="title-subtitle">
        <div className="title-1 sbsansdisplay-normal-shark-24px">{title}</div>
        <div className="subtitle-2 sbsanstext-regular-normal-shark-19px">{subtitle}</div>
      </div>
    </div>
  );
}

export default Container;