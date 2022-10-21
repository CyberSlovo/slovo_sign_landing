import React from "react";
import "./OtherchandsPhone.css";

function OtherchandsPhone(props) {
  const { src, className } = props;

  return (
    <div className={`otherchands-phone ${className || ""}`}>
      <img className="lg-hands-phone-012x" src={src} alt="Lg-Hands-Phone-01@2x" />
    </div>
  );
}

export default OtherchandsPhone;
