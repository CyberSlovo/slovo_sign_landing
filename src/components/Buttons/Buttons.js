import React from "react";
import Button from "../Button/Button";
import "./Buttons.css";

function Buttons(props) {
  const { onclick, buttonProps } = props;

  return (
    <div className="buttons">
       <Button onclick={onclick} children={buttonProps.children}/>
    </div>
  );
}

export default Buttons;
