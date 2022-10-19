import React from "react";
import "./HandsHeart.css";

function HandsHeart(props) {
  const { src, className } = props;

  return (
    <div className={`hands-heart ${className || ""}`}>
      <img className="hands_-heart" src={src} alt="Hands_Heart" />
    </div>
  );
}

export default HandsHeart;
