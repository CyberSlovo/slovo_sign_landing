import React from "react";
import Container from "../Container/Container";
import "./AdvantageItem3.css";
import IcQuestionCircle1 from "../../assets/images/ic-question-circle-1@2x.svg";

function AdvantageItem3(props) {
  const { containerProps } = props;

  return (
    <div className="advantage-item-4">
      <Container title={containerProps.title} subtitle={containerProps.subtitle} className={containerProps.className} />
      <img className="ic-question-circle" src={IcQuestionCircle1} alt="ic question-circle" />
    </div>
  );
}

export default AdvantageItem3;