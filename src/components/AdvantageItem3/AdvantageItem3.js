import React from "react";
import Container from "../Container/Container";
import "./AdvantageItem3.css";
import IcQuestionCircle1 from "../../assets/images/ic-question-circle-1@2x.svg";
import IcSberTime from "../../assets/images/icon-sber-time@2x.svg";
import ReactTooltip from "react-tooltip";

function AdvantageItem3(props) {
  const { containerProps } = props;

  return (
    <div className="advantage-item-4">
      <Container title={containerProps.title} subtitle={containerProps.subtitle} className={containerProps.className} src={IcSberTime} />
      <img data-tip data-for="registerTip" className="ic-question-circle" src={IcQuestionCircle1} alt="ic question-circle" />
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

export default AdvantageItem3;