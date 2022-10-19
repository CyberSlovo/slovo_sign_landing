import React from "react";
import ImageSm from "../ImageSm/ImageSm";
import "./Column8.css";

function Column8(props) {
  const { title, caption, subtitle, className, imageSmProps } = props;

  return (
    <div className={`column-10-1 ${className || ""}`}>
      <ImageSm src={imageSmProps.src} className={imageSmProps.className} />
      <div className="frame-270988932-5">
        <div className="title-30 sbsansdisplay-normal-shark-22px">{title}</div>
        <div className="frame-270988931-5">
          <div className="caption-5 sbsansdisplay-normal-shark-28px">{caption}</div>
          <div className="subtitle-40 sbsanstext-regular-normal-shark-19px-2">{subtitle}</div>
        </div>
      </div>
    </div>
  );
}

export default Column8;
