import React from "react";
import "./QAItem2.css";
import IcQuestion from "../../assets/images/ic-question-5@2x.svg";

function QAItem2(props) {
  const { title, spanText1, spanText3 } = props;

  return (
    <div className="qa-item-2">
      <div className="container-14">
        <img className="ic_question-2" src= { IcQuestion } alt="ic_question" />
        <div className="title-subtitle-5">
          <div className="title-8 sbsansdisplay-normal-shark-24px">{title}</div>
          <div className="subtitle-10 sbsanstext-regular-normal-white-19px-2">
            <span className="sbsanstext-regular-normal-shark-19px">{spanText1}</span>
            <span className="sbsanstext-regular-normal-blue-19px">СберПраво</span>
            <span className="sbsanstext-regular-normal-shark-19px">{spanText3}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default QAItem2;