import React from "react";
import "./TitleSubtitle3.css";

function TitleSubtitle3(props) {
  const { title, subtitle } = props;

  return (
    <div className="title-subtitle-16">
      <div className="title-33 sbsansdisplay-normal-shark-24px">{title}</div>
      <div className="subtitle-46 sbsanstext-regular-normal-shark-19px">{subtitle}</div>
    </div>
  );
}

export default TitleSubtitle3;
