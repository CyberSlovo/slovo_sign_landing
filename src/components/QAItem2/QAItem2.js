import React from "react";
import "./QAItem2.css";
import IcQuestion from "../../assets/images/ic-question@2x.svg";

function QAItem2(props) {
  const { title, spanText1, spanText3, className } = props;

  return (
    <div className={`qa-item-5 ${className || ""}`}>
      <div className="container-22">
        <img className="ic_question-5" src={IcQuestion} alt="ic_question" />
        <div className="title-subtitle-6">
          <div className="title-11 sbsansdisplay-normal-shark-24px">{title}</div>
          <div className="subtitle-15 sbsanstext-regular-normal-white-19px-2">
            <span className="span sbsanstext-regular-normal-shark-19px">{spanText1}</span>
            <a href="https://sberpravo.ru/">
              <span className="span sbsanstext-regular-normal-blue-19px">СберПраво</span>
            </a>
            <span className="span sbsanstext-regular-normal-shark-19px">{spanText3}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default QAItem2;
