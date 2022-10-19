import React from "react";
import "./AdvantageItem10.css";
import IcSberSecure from "../../assets/images/ic-sber-secure@2x.svg";

function AdvantageItem10(props) {
  const { title, subtitle } = props;

  return (
    <div className="advantage-item-17">
      <div className="container-70">
        <img className="ic-sber-secure-3" src={IcSberSecure} alt="Ic Sber secure" />
        <div className="title-subtitle-17">
          <div className="title-34 sbsansdisplay-normal-shark-24px">{title}</div>
          <div className="subtitle-47 sbsanstext-regular-normal-shark-19px">{subtitle}</div>
        </div>
      </div>
    </div>
  );
}

export default AdvantageItem10;
