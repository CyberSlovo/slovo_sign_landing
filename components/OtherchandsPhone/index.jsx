import React from "react";
import "./OtherchandsPhone.css";

function OtherchandsPhone(props) {
  const { src, className } = props;

  return <div className={`otherchands-phone ${className || ""}`} style={{ backgroundImage: `url(${src})` }}></div>;
}

export default OtherchandsPhone;
