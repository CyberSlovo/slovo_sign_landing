import React from "react";
import "./ImageSm.css";

function ImageSm(props) {
  const { src, className } = props;

  return (
    <div className={`image-sm-2 ${className || ""}`}>
      <div className="overlap-group-1">
        <div className="ellipse-2167-2"></div>
        <div className="container-8">
          <img className="ic-sber-profile" src={src} alt="Ic Sber profile" />
        </div>
      </div>
    </div>
  );
}

export default ImageSm;