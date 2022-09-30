import React from "react";
import "./FooterMobile.css";

function FooterMobile(props) {
  const { phone, sbersdelkiSberbankRu, text2 } = props;

  return (
    <div className="footer-mobile">
      <div className="container-26">
        <img className="logo-1" src="/img/logo-1@2x.svg" alt="logo" />
        <div className="row-3">
          <div className="column-3 sbsansdisplay-normal-shark-18px">
            <div className="phone-1">{phone}</div>
            <div className="sbersdelkisberbankru">{sbersdelkiSberbankRu}</div>
          </div>
          <p className="text-2 sbsanstext-regular-normal-shark-16px">{text2}</p>
        </div>
      </div>
    </div>
  );
}

export default FooterMobile;
