import React from "react";
import X36StrokeDsIc36Handset from "../X36StrokeDsIc36Handset/X36StrokeDsIc36Handset";
import Link from "../Link/Link";
import "./Frame2709889463.css";

function Frame2709889463(props) {
  const { linkProps } = props;

  return (
    <div className="frame-270988946-4">
      <X36StrokeDsIc36Handset />
      <a href={`tel:${linkProps.children}`}>
        <Link>{linkProps.children}</Link>
      </a>
    </div>
  );
}

export default Frame2709889463;
