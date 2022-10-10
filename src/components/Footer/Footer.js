import React from "react";
import "./Footer.css";
import Logo from "../../assets/images/logo-2@2x.svg";

function Footer(props) {
  const { text1, phone, podpisSberRu } = props;

  return (
    <div className="footer">
      <div className="container-16">
        <img className="logo" src={Logo} alt="logo" />
        <div className="row-1">
          <p className="text-1 sbsanstext-regular-normal-shark-16px">{text1}</p>
          <div className="column-1 sbsansdisplay-normal-shark-24px">
            <div className="phone">{phone}</div>
            <div className="podpissberru">{podpisSberRu}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;