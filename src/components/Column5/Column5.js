import React from "react";
import ImageSm from "../ImageSm/ImageSm";
import "./Column5.css";

function Column5(props) {
  const { title, caption, subtitle, imageSmProps } = props;

  return (
    <div className="column-9">
      <ImageSm src={imageSmProps.src} className={imageSmProps.className} />
      <div className="frame-270988932-4">
        <div className="title-27 sbsansdisplay-normal-shark-22px">{title}</div>
        <div className="frame-270988931-4">
          <div className="caption-4 sbsansdisplay-normal-shark-28px">{caption}</div>
          <div className="subtitle-35 sbsanstext-regular-normal-shark-19px-2">{subtitle}</div>
        </div>
      </div>
    </div>
  );
}

export default Column5;
