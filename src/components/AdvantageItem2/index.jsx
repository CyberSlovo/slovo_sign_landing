import React from "react";
import Container from "../Container";
import "./AdvantageItem2.css";
import IcQuestionCircle from "../../assets/img/ic-question-circle@2x.svg";
import ReactTooltip from "react-tooltip";

function AdvantageItem2(props) {
  const { containerProps } = props;

  return (
    <div className="advantage-item-2">
      <Container src={containerProps.src} title={containerProps.title} subtitle={containerProps.subtitle} className={containerProps.className} />
      <img data-tip data-for="registerTip" className="ic-question-circle" src={IcQuestionCircle} alt="ic question-circle" />
      <ReactTooltip 
        id="registerTip" 
        place="bottom" 
        backgroundColor="white"
        multiline={true}
        afterHide={true} 
        scrollHide={true}
        textColor="rgba(38, 38, 38, 0.7)"
        border="1px"
        borderColor="rgba(38, 38, 38, 0.08)"
      >
        УНЭП — это усиленная неквалифицированная подпись
      </ReactTooltip>
    </div>
  );
}

export default AdvantageItem2;
