import React from "react";
import "./Column3.css";

function Column3(props) {
  const { className } = props;

  return (
    <div className={`column-3 sbsansdisplay-normal-shark-24px ${className || ""}`}>
      <a href={`tel:+7 (499) 404-10-37`}>
        <div className="phone-1">+7 (499) 404-10-37</div>
      </a>
      <a href={`mailto:podpis@sber.ru`}>
        <div className="podpissberru-1">podpis@sber.ru</div> 
      </a>

    </div>
  );
}

export default Column3;
