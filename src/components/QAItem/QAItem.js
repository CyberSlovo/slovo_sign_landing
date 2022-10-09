import React from "react";
import "./QAItem.css";
import IQ from "../../assets/images/ic-question-3@2x.svg";

function QAItem(props) {
  const { title, subtitle } = props;

  return (
    <div className="qa-item">
      <div className="container-12">
        <img className="ic_question" src= { IQ } alt="ic_question" />
        <div className="title-subtitle-3">
          <div className="title-6 sbsansdisplay-normal-shark-24px">{title}</div>
          <div className="subtitle-8 sbsanstext-regular-normal-shark-19px">{subtitle}</div>
        </div>
      </div>
    </div>
  );
}

export default QAItem;