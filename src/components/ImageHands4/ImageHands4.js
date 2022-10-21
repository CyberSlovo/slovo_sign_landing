import React from "react";
import OtherchandsPhone from "../OtherchandsPhone/OtherchandsPhone";
import "./ImageHands4.css";
import Vector2Stroke2 from "../../assets/images/vector-2--stroke--2@2x.svg";

function ImageHands4(props) {
  const { otherchandsPhoneProps } = props;

  return (
    <div className="image-hands-8">
      <div className="overlap-group-11">
        <OtherchandsPhone src={otherchandsPhoneProps.src} className={otherchandsPhoneProps.className} />
        <img className="vector-2-stroke-2" src={Vector2Stroke2} alt="Vector 2 (Stroke)" />
      </div>
    </div>
  );
}

export default ImageHands4;
