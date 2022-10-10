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
            <a href={`tel:${phone}`}>
              <div className="phone">{phone}</div>
            </a>
            <a href={`mailto:${podpisSberRu}`}>
              <div className="podpissberru">{podpisSberRu}</div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;