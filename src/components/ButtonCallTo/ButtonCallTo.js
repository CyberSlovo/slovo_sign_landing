import React from "react";
import "./ButtonCallTo.css";


function ButtonCallTo(props) {
  const { children } = props;

  return (
    <div className="link">
      <div className="frame-270988836-3">
        <div className="button-6 sbsanstext-regular-normal-shark-19px">{children}</div>
      </div>
    </div>
  );
}

export default ButtonCallTo;