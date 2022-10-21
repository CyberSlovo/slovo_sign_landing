import React from "react";
import "./FooterMobile3.css";
import OlineSignLogo2 from "../../assets/images/oline-sign-logo-2@2x.svg";

function FooterMobile3(props) {
  const { phone, sbersdelkiSberbankRu, text2 } = props;

  return (
    <div className="footer-mobile-2">
      <div className="container-73">
        <img className="logo" src={OlineSignLogo2} alt="logo" />
        <div className="row-11">
          <div className="column-13 sbsansdisplay-normal-shark-18px">
            <div className="phone-5">{phone}</div>
            <div className="sbersdelkisberbankru">{sbersdelkiSberbankRu}</div>
          </div>
          <p className="text-6 sbsanstext-regular-normal-shark-16px">{text2}</p>
        </div>
      </div>
    </div>
  );
}

export default FooterMobile3;
