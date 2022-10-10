import React from "react";
import "./Container.css";
import IcSberWallet1 from "../../assets/images/ic-sber-wallet-1@2x.svg";

function Container(props) {
  const { title, subtitle, className } = props;

  return (
    <div className={`container-5-1 ${className || ""}`}>
      <img className="ic-sber-wallet" src={IcSberWallet1} alt="Ic Sber wallet" />
      <div className="title-subtitle">
        <div className="title-1 sbsansdisplay-normal-shark-24px">{title}</div>
        <div className="subtitle-2 sbsanstext-regular-normal-shark-19px">{subtitle}</div>
      </div>
    </div>
  );
}

export default Container;