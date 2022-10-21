import React from "react";
import "./CmalePhone.css";

function CmalePhone(props) {
  const { src } = props;

  return (
    <div className="cmale-phone">
      <img className="boy_telefon-1" src={src} alt="boy_telefon 1" />
    </div>
  );
}

export default CmalePhone;
