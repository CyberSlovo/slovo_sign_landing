import React from "react";
import ImageSm from "../ImageSm/ImageSm";
import "./Column4.css";

function Column4(props) {
  const { title, caption, subtitle, imageSmProps } = props;

  return (
    <div className="column-8">
      <ImageSm src={imageSmProps.src} className={imageSmProps.className} />
      <div className="frame-270988932-3">
        <div className="title-24 sbsansdisplay-normal-shark-22px">{title}</div>
        <div className="frame-270988931-3">
          <div className="caption-3 sbsansdisplay-normal-shark-28px">{caption}</div>
          <div className="subtitle-33 sbsanstext-regular-normal-shark-19px-2">{subtitle}</div>
        </div>
      </div>
    </div>
  );
}

export default Column4;
