import React from "react";
import X36StrokeDsIc36Handset from "../X36StrokeDsIc36Handset";
import Link from "../Link";
import "./Frame270988946.css";

function Frame270988946(props) {
  const { linkProps } = props;

  return (
    <div className="frame-270988946">
      <X36StrokeDsIc36Handset />
      <Link>{linkProps.children}</Link>
    </div>
  );
}

export default Frame270988946;
