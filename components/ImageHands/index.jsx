import React from "react";
import OtherchandsPhone from "../OtherchandsPhone";
import "./ImageHands.css";

function ImageHands(props) {
  const { otherchandsPhoneProps } = props;

  return (
    <div className="image-hands">
      <div className="overlap-group">
        <OtherchandsPhone src={otherchandsPhoneProps.src} />
        <img className="vector-2-stroke" src="/img/vector-2--stroke-@2x.svg" alt="Vector 2 (Stroke)" />
      </div>
    </div>
  );
}

export default ImageHands;
