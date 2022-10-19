import React from "react";
import Button22 from "../Button22/Button22";
import CmalePhone from "../CmalePhone/CmalePhone";
import BackBlur from "../BackBlur/BackBlur";
import "./HeroBannerMobile3.css";

function HeroBannerMobile3(props) {
  const { onclick, h1, subtitle, cmalePhoneProps, cmalePhoneProps2 } = props;

  return (
    <div className="hero-banner-mobile-2">
      <div className="overlap-group1-4">
        <div className="text-container-buttons-4">
          <div className="text-container-5">
            <div className="h1-5 sbsansdisplay-normal-shark-34px">{h1}</div>
            <div className="subtitle-45 sbsanstext-regular-normal-shark-24px">{subtitle}</div>
          </div>
          <Button22 onclick={onclick}/>
        </div>
        <div className="image-man">
          <CmalePhone src={cmalePhoneProps.src} />
        </div>
        <BackBlur className={cmalePhoneProps2.className} />
      </div>
      <div className="rectangle-1-4"></div>
    </div>
  );
}

export default HeroBannerMobile3;
