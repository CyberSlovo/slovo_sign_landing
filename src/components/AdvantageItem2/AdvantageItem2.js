import React from "react";
import "./AdvantageItem2.css";
import IcSberSecure from "../../assets/images/ic-sber-secure-1@2x.svg";

function AdvantageItem2(props) {
  const { className } = props;
  return (
    <div className={`advantage-item-2 ${className || ""}`}>
      <div className="container-6">
        <img className="ic-sber-secure" src= { IcSberSecure } alt="Ic Sber secure" />
        <div className="title-subtitle-1">
          <div className="title-2 sbsansdisplay-normal-shark-24px">
            Юридически
            <br />
            значимо
          </div>
          <div className="subtitle-3 sbsanstext-regular-normal-shark-19px">
            Налоговая и суд примут подписанные в нашем приложении документы
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdvantageItem2;