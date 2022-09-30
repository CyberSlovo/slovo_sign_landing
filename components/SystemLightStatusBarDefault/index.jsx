import React from "react";
import "./SystemLightStatusBarDefault.css";

function SystemLightStatusBarDefault(props) {
  const { time } = props;

  return (
    <div className="system-light-status-bar-default">
      <div className="flex-row">
        <div className="time">{time}</div>
        <img className="icon-bar_chart" src="/img/cellular-connection@2x.svg" alt="icon-bar_chart" />
        <img className="icon-signal" src="/img/wifi@2x.svg" alt="icon-signal" />
        <div className="battery">
          <div className="overlap-group-4">
            <div className="capacity"></div>
          </div>
          <img className="cap" src="/img/cap@2x.svg" alt="Cap" />
        </div>
      </div>
    </div>
  );
}

export default SystemLightStatusBarDefault;
