import React from "react";
import "./Header.css";
import OlineSignLogo2 from "../../assets/images/oline-sign-logo-2@2x.svg";

function Header(props) {
  const { className } = props;

  return (
    <div className={`header ${className || ""}`}>
      <img className="oline-sign-logo" src={OlineSignLogo2} alt="Oline-sign Logo" />
    </div>
  );
}

export default Header;
