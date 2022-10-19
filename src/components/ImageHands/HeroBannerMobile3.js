import React from "react";
import OtherchandsPhone2 from "../OtherchandsPhone2/OtherchandsPhone2";
import "./ImageHands.css";
import Vector2Stroke from "../../assets/images/vector-2--stroke-@2x.svg";

function ImageHands() {
  return (
    <div className="image-hands-3">
      <div className="overlap-group-9">
        <OtherchandsPhone2 />
        <img className="vector-2-stroke" src={Vector2Stroke} alt="Vector 2 (Stroke)" />
      </div>
    </div>
  );
}

export default ImageHands;
