import React from "react";
import X36StrokeDsIc36Handset from "../X36StrokeDsIc36Handset/X36StrokeDsIc36Handset";
import ButtonCallTo from "../ButtonCallTo/ButtonCallTo";
import "./Frame270988946.css";

function Frame270988946(props) {
  const { linkProps } = props;

  return (
    <div className="frame-270988946">
      <X36StrokeDsIc36Handset />
      <ButtonCallTo>{linkProps.children}</ButtonCallTo>
    </div>
  );
}

export default Frame270988946;