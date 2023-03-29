import { red } from "@mui/material/colors";
import { style } from "@mui/system";
import React from "react";
import "./Frame270988836.css";

function Frame270988836(props) {
  const { text, className } = props;

  return (
    <div className="frame-270988836">
      <div className={`sbsanstext-regular-normal-white-19px `}>
        <div className={`button-2 ${className}`}>{text || ""}</div>
      </div>
    </div>
  );
}

export default Frame270988836;
