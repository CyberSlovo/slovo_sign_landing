import React from "react";
import Buttons from "../Buttons";
import "./Header.css";
import OlineSignLogo2 from "../../assets/img/oline-sign-logo-2@2x.svg";

function Header(props) {
  const { onclick, className } = props;

  return (
    <div className={`header ${className || ""}`}>
      <div className="container-4">
        <img className="oline-sign-logo" src={OlineSignLogo2} alt="Oline-sign Logo" />
        <Buttons onclick={onclick} />
      </div>
    </div>
  );
}

export default Header;
