import React from "react";
import Button from "../Button/Button";
import "./Header.css";
import OlineSignLogo1 from "../../assets/images/oline-sign-logo-1@2x.svg";

function Header(props) {
  const { onclick, buttonProps } = props;

  return (
    <div className="header">
      <div className="container-4">
        <img className="oline-sign-logo" src={OlineSignLogo1} alt="Oline-sign Logo" />
        <div className="buttons">
          <Button onclick={onclick} children={buttonProps.children}/>
        </div>
      </div>
    </div>
  );
}

export default Header;