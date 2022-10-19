import React from "react";
import "./HandsHeart2.css";

function HandsHeart2(props) {
  const { src, className } = props;

  return <div className={`hands-heart-3 ${className || ""}`} style={{ backgroundImage: `url(${src})` }}></div>;
}

export default HandsHeart2;
