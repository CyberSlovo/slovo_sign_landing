import React from "react";
import HandsHeart2 from "../HandsHeart2/HandsHeart2";
import "./ImageHands2.css";

function ImageHands2(props) {
  const { className, handsHeart3Props } = props;

  return (
    <div className={`image-hands-5 ${className || ""}`}>
      <HandsHeart2 src={handsHeart3Props.src} className={handsHeart3Props.className} />
    </div>
  );
}

export default ImageHands2;
