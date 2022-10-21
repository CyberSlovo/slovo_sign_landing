import React from "react";
import "./QAItem4.css";
import IcQuestion1 from "../../assets/images/ic-question-1@2x.svg";

function QAItem4(props) {
  const { title, spanText1, spanText2, spanText3 } = props;

  return (
    <div className="qa-item-11">
      <div className="container-72">
        <img className="ic_question-11" src={IcQuestion1} alt="ic_question" />
        <div className="title-subtitle-19">
          <div className="title-37 sbsansdisplay-normal-shark-24px">{title}</div>
          <div className="subtitle-50 sbsanstext-regular-normal-white-19px-2">
            <span className="sbsanstext-regular-normal-shark-19px">{spanText1}</span>
            <span className="sbsanstext-regular-normal-blue-19px">{spanText2}</span>
            <span className="sbsanstext-regular-normal-shark-19px">{spanText3}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default QAItem4;
