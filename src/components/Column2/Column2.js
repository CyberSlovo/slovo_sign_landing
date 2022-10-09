import React from "react";
import ImageSm from "../ImageSm/ImageSm";
import "./Column2.css";

function Column2(props) {
  const { title, caption, subtitle, imageSmProps } = props;

  return (
    <div className="column-2">
      <ImageSm src={imageSmProps.src} className={imageSmProps.className} />
      <div className="frame-270988932-1">
        <div className="title-13 sbsansdisplay-normal-shark-22px">{title}</div>
        <div className="frame-270988931-1">
          <div className="caption-1 sbsansdisplay-normal-shark-28px">{caption}</div>
          <div className="subtitle-17 sbsanstext-regular-normal-shark-19px-2">{subtitle}</div>
        </div>
      </div>
    </div>
  );
}

export default Column2;