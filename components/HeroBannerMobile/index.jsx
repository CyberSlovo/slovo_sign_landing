import React from "react";
import Button2 from "../Button2";
import CmalePhone from "../CmalePhone";
import "./HeroBannerMobile.css";

function HeroBannerMobile(props) {
  const { h1, subtitle, cmalePhoneProps } = props;

  return (
    <div className="hero-banner-mobile">
      <div className="overlap-group1-1">
        <div className="text-container-buttons-1">
          <div className="text-container-1">
            <div className="h1-1 sbsansdisplay-normal-shark-34px">{h1}</div>
            <div className="subtitle-15 sbsanstext-regular-normal-shark-24px">{subtitle}</div>
          </div>
          <Button2 />
        </div>
        <div className="image-man-1">
          <CmalePhone src={cmalePhoneProps.src} className={cmalePhoneProps.className} />
        </div>
        <div className="back-blur-1">
          <div className="ellipse-container-3">
            <div className="ellipse-2166-4"></div>
            <div className="ellipse-2167-6"></div>
          </div>
        </div>
      </div>
      <div className="rectangle-1-1"></div>
    </div>
  );
}

export default HeroBannerMobile;
