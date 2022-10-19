import React from "react";
import Buttons from "../Buttons/Buttons";
import "./Header2.css";
import OlineSignLogo2 from "../../assets/images/oline-sign-logo-2@2x.svg";

function Header2(props) {
  const { onclick, className, buttonsProps } = props;

  return (
    <div className={`header-2 ${className || ""}`}>
      <div className="container-34">
        <img className="oline-sign-logo-3" src={OlineSignLogo2} alt="Oline-sign Logo" />
        <Buttons onclick={onclick} buttonProps={buttonsProps.buttonProps} />
      </div>
    </div>
  );
}

export default Header2;
