import React from "react";
import Button from "../Button";
import "./Header.css";

function Header(props) {
  const { buttonProps } = props;

  return (
    <div className="header">
      <div className="container-4">
        <img className="oline-sign-logo" src="/img/oline-sign-logo-1@2x.svg" alt="Oline-sign Logo" />
        <div className="buttons">
          <Button>{buttonProps.children}</Button>
        </div>
      </div>
    </div>
  );
}

export default Header;
