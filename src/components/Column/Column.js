import React from "react";
import ImageSm from "../ImageSm/ImageSm";
import "./Column.css";

function Column(props) {
  const { title, caption, subtitle, imageSmProps } = props;

  return (
    <div className="column">
      <ImageSm src={imageSmProps.src} className={imageSmProps.className} />
      <div className="frame-270988932">
        <div className="title-4 sbsansdisplay-normal-shark-22px">{title}</div>
        <div className="frame-270988931">
          <div className="caption sbsansdisplay-normal-shark-28px">{caption}</div>
          <div className="subtitle-5 sbsanstext-regular-normal-shark-19px-2">{subtitle}</div>
        </div>
      </div>
    </div>
  );
}

export default Column;