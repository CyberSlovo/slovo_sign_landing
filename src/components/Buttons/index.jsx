import React from "react";
import Button from "../Button";
import "./Buttons.css";

function Buttons(props) {
  const { text, onclick, className } = props;

  return (
    <div className={className ? "" : "buttons"}>
      <Button className={className ?? ""} text={text} onclick={onclick} />
    </div>
  );
}

export default Buttons;
