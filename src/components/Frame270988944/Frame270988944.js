import React from "react";
import Frame270988946 from "../Frame270988946/Frame270988946";
import Frame270988947 from "../Frame270988947/Frame270988947";
import "./Frame270988944.css";

function Frame270988944(props) {
  const { className, frame270988946Props, frame270988947Props } = props;

  return (
    <div className={`frame-270988944-1 ${className || ""}`}>
      <div className="subtitle-26 sbsanstext-medium-blue-19px">свяжитесь с нами</div>
      <div className="container-37">
        <Frame270988946 linkProps={frame270988946Props.linkProps} />
        <Frame270988947 linkProps={frame270988947Props.linkProps} />
      </div>
    </div>
  );
}

export default Frame270988944;
