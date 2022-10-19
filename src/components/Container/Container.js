import React from "react";
import Head from "../Head/Head";
import Frame270988946 from "../Frame270988946/Frame270988946";
import Frame270988947 from "../Frame270988947/Frame270988947";
import "./Container.css";

function Container(props) {
  const { className, headProps, frame270988946Props, frame270988947Props } = props;

  return (
    <div className={`container-13 ${className || ""}`}>
      <Head subtitle={headProps.subtitle} className={headProps.className} />
      <div className="frame-270988944">
        <div className="subtitle-5 sbsanstext-medium-blue-19px">свяжитесь с нами</div>
        <div className="container-14">
          <Frame270988946 linkProps={frame270988946Props.linkProps} />
          <Frame270988947 linkProps={frame270988947Props.linkProps} />
        </div>
      </div>
    </div>
  );
}

export default Container;
