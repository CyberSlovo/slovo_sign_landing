import React from "react";
import Button from "../Button";
import "./Buttons.css";

function Buttons(props) {
  const { onclick } = props;

  return (
    <div className="buttons">
      <Button onclick={onclick} />
    </div>
  );
}

export default Buttons;
