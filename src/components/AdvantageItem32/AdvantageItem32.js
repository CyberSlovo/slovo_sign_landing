import React from "react";
import Container5 from "../Container5/Container5";
import "./AdvantageItem32.css";
import IcQuestionCircle1 from "../../assets/images/ic-question-circle-1@2x.svg";
import ReactTooltip from "react-tooltip";

function AdvantageItem32(props) {
  const { containerProps } = props;

  return (
    <div className="advantage-item-14">
      <Container5
        src={containerProps.src}
        title={containerProps.title}
        subtitle={containerProps.subtitle}
        className={containerProps.className}
      />
      <img data-tip data-for="registerTip" className="ic-question-circle-4" src={IcQuestionCircle1} alt="ic question-circle" />
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

export default AdvantageItem32;
