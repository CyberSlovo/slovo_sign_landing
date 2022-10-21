import React from "react";
import "./Column3.css";

function Column3(props) {
  const { className } = props;

  return (
    <div className={`column-4 sbsansdisplay-normal-shark-24px ${className || ""}`}>
      <a href={`tel:+7 (499) 404-10-37`}>
        <div className="phone-2">+7 (499) 404-10-37</div>
      </a>
      <a href={`mailto:podpis@sber.ru`}>
        <div className="podpissberru-2">podpis@sber.ru</div> 
      </a>
    </div>
  );
}

export default Column3;
