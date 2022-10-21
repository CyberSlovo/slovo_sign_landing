import React from "react";
import ImageSm from "../ImageSm/ImageSm";
import "./Column22.css";

function Column22(props) {
  const { title, caption, subtitle, imageSmProps } = props;

  return (
    <div className="column-12">
      <ImageSm src={imageSmProps.src} className={imageSmProps.className} />
      <div className="frame-270988932-6">
        <div className="title-35 sbsansdisplay-normal-shark-22px">{title}</div>
        <div className="frame-270988931-6">
          <div className="caption-6 sbsansdisplay-normal-shark-28px">{caption}</div>
          <div className="subtitle-48 sbsanstext-regular-normal-shark-19px-2">{subtitle}</div>
        </div>
      </div>
    </div>
  );
}

export default Column22;
