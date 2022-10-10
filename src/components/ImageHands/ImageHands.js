import React from "react";
import OtherchandsPhone from "../OtherchandsPhone/OtherchandsPhone";
import "./ImageHands.css";
import Vector2Stroke from "../../assets/images/vector-2--stroke-@2x.svg";

function ImageHands(props) {
  const { otherchandsPhoneProps } = props;

  return (
    <div className="image-hands">
      <div className="overlap-group">
        <OtherchandsPhone src={otherchandsPhoneProps.src} />
        <img className="vector-2-stroke" src={Vector2Stroke} alt="Vector 2 (Stroke)" />
      </div>
    </div>
  );
}

export default ImageHands;