import React from "react";
import "./TitleSubtitle.css";

function TitleSubtitle(props) {
  const { title, subtitle } = props;

  return (
    <div className="title-subtitle-7">
      <div className="title-12 sbsansdisplay-normal-shark-24px">{title}</div>
      <div className="subtitle-16 sbsanstext-regular-normal-shark-19px">{subtitle}</div>
    </div>
  );
}

export default TitleSubtitle;
