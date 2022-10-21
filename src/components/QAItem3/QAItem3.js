import React from "react";
import "./QAItem3.css";
import IcQuestion from "../../assets/images/ic-question@2x.svg";

function QAItem3(props) {
  const { title, subtitle } = props;

  return (
    <div className="qa-item-10">
      <div className="container-71">
        <img className="ic_question-10" src={IcQuestion} alt="ic_question" />
        <div className="title-subtitle-18">
          <div className="title-36 sbsansdisplay-normal-shark-24px">{title}</div>
          <div className="subtitle-49 sbsanstext-regular-normal-shark-19px">{subtitle}</div>
        </div>
      </div>
    </div>
  );
}

export default QAItem3;
