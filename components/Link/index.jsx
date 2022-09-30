import React from "react";
import "./Link.css";

function Link(props) {
  const { children } = props;

  return (
    <div className="link">
      <div className="frame-270988836-3">
        <div className="button-6 sbsanstext-regular-normal-shark-19px">{children}</div>
      </div>
    </div>
  );
}

export default Link;
