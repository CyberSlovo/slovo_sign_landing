import React from "react";
import ImageSm from "../ImageSm";
import "./Column5.css";

function Column5(props) {
  const { src, title, caption, subtitle, imageSmProps } = props;

  return (
    <div className="column-8">
      <ImageSm src={src} className={imageSmProps.className} />
      <div className="frame-270988932-5">
        <div className="title-22 sbsansdisplay-normal-shark-22px">{title}</div>
        <div className="frame-270988931-5">
          <div className="caption-5 sbsansdisplay-normal-shark-28px">{caption}</div>
          <p className="subtitle-29 sbsanstext-regular-normal-shark-19px-2">{subtitle}</p>
        </div>
      </div>
    </div>
  );
}

export default Column5;
