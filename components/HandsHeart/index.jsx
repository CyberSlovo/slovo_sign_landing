import React from "react";
import "./HandsHeart.css";

function HandsHeart(props) {
  const { src } = props;

  return <div className="hands-heart" style={{ backgroundImage: `url(${src})` }}></div>;
}

export default HandsHeart;
