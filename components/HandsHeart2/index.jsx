import React from "react";
import "./HandsHeart2.css";

function HandsHeart2(props) {
  const { src } = props;

  return (
    <div className="hands-heart-1">
      <img className="hands_-heart" src={src} alt="Hands_Heart" />
    </div>
  );
}

export default HandsHeart2;
