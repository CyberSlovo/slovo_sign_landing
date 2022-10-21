import React from "react";
import "./SystemLightStatusBarDefault.css";
import Cap from "../../assets/images/cap@2x.svg";
import CellularConnection from "../../assets/images/cellular-connection@2x.svg";

function SystemLightStatusBarDefault(props) {
  const { className } = props;

  return (
    <div className={`system-light-status-bar-default ${className || ""}`}>
      <div className="flex-row">
        <div className="time sfprodisplay-normal-black-15px">9:41</div>
        <img className="icon-bar_chart" src={CellularConnection} alt="icon-bar_chart" />
        <img className="icon-signal" src="/img/wifi@2x.svg" alt="icon-signal" />
        <div className="battery">
          <div className="overlap-group">
            <div className="capacity"></div>
          </div>
          <img className="cap" src={Cap} alt="Cap" />
        </div>
      </div>
    </div>
  );
}

export default SystemLightStatusBarDefault;
