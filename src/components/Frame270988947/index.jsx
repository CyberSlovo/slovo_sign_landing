import React from "react";
import X36StrokeDsIc36Mail from "../X36StrokeDsIc36Mail";
import Link from "../Link";
import "./Frame270988947.css";

function Frame270988947(props) {
  const { linkProps } = props;

  return (
    <div className="frame-270988947">
      <X36StrokeDsIc36Mail />
      <a href={`mailto:${linkProps.children}`}>
        <Link>{linkProps.children}</Link>
      </a>
    </div>
  );
}

export default Frame270988947;
