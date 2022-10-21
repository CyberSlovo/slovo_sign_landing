import React from "react";
import "./AdvantageItem5.css";
import IcQuestionCircle1 from "../../assets/images/ic-question-circle-1@2x.svg";
import ReactTooltip from "react-tooltip";

function AdvantageItem5(props) {
  const { src, title, subtitle } = props;

  return (
    <div className="advantage-item-7">
      <div className="container-47">
        <img className="icon-clock-2" src={src} alt="icon-clock" />
        <div className="title-subtitle-13">
          <div className="title-23 sbsansdisplay-normal-shark-24px">{title}</div>
          <div className="subtitle-32 sbsanstext-regular-normal-shark-19px">{subtitle}</div>
        </div>
      </div>
      <img data-tip data-for="registerTip" className="ic-question-circle-2" src={IcQuestionCircle1} alt="ic question-circle" />
      <ReactTooltip 
        id="registerTip" 
        place="bottom" 
        afterHide={true} 
        backgroundColor="white"
        multiline={true}
        textColor="rgba(38, 38, 38, 0.7)"
        border="1px"
        borderColor="rgba(38, 38, 38, 0.08)"
      >
        УНЭП — это усиленная неквалифицированная подпись
      </ReactTooltip>
    </div>
  );
}

export default AdvantageItem5;
