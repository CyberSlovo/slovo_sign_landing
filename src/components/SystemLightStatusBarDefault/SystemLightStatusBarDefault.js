import React from "react";
import "./SystemLightStatusBarDefault.css";
import IconBarChart from "../../assets/images/cellular-connection@2x.svg";
import IconSignal from "../../assets/images/wifi@2x.svg";
import Cap from "../../assets/images/cap@2x.svg";

function SystemLightStatusBarDefault(props) {
  const { time } = props;
  return (
    <div className="system-light-status-bar-default">
      <div className="flex-row">
        <div className="time">9:41</div>
        <img className="icon-bar_chart" src= { IconBarChart } alt="icon-bar_chart" />
        <img className="icon-signal" src= { IconSignal } alt="icon-signal" />
        <div className="battery">
          <div className="overlap-group-4">
            <div className="capacity"></div>
          </div>
          <img className="cap" src={ Cap } alt="Cap" />
        </div>
      </div>
    </div>
  );
}

export default SystemLightStatusBarDefault;