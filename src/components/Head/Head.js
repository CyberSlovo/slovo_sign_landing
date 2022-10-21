import React from "react";
import "./Head.css";

function Head(props) {
  const { subtitle, className } = props;

  return (
    <div className={`head-1 ${className || ""}`}>
      <div className="title-3 sbsansdisplay-normal-shark-28px">
        Расскажите, какие документы <br />
        вы бы хотели подписывать
      </div>
      <div className="subtitle-7 sbsanstext-regular-normal-shark-19px-2">{subtitle}</div>
    </div>
  );
}

export default Head;
