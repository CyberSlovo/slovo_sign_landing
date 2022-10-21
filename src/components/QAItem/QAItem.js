import React from "react";
import "./QAItem.css";
import IcQuestion from "../../assets/images/ic-question@2x.svg";

function QAItem(props) {
  const { title, subtitle } = props;

  return (
    <div className="qa-item">
      <div className="container-17">
        <img className="ic_question" src={IcQuestion} alt="ic_question" />
        <div className="title-subtitle-1">
          <div className="title-6 sbsansdisplay-normal-shark-24px">{title}</div>
          <div className="subtitle-10 sbsanstext-regular-normal-shark-19px">{subtitle}</div>
        </div>
      </div>
    </div>
  );
}

export default QAItem;
