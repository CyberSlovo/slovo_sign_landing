import React from "react";
import HandsHeart from "../HandsHeart/HandsHeart";
import "./ImageHands2.css";

function ImageHands2(props) {
  const { handsHeartProps } = props;

  return (
    <div className="image-hands-1">
      <HandsHeart src={handsHeartProps.src} />
    </div>
  );
}

export default ImageHands2;