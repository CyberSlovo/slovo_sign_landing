import React from "react";
import Button22 from "../Button22/Button22";
import MaleLaptop from "../MaleLaptop/MaleLaptop";
import BackBlur from "../BackBlur/BackBlur";
import "./HeroBannerMobile.css";

function HeroBannerMobile(props) {
  const { onclick, subtitle, className, maleLaptopProps, backBlurProps } = props;

  return (
    <div className={`hero-banner-mobile ${className || ""}`}>
      <div className="overlap-group1">
      <MaleLaptop className={maleLaptopProps.className} maleLaptop08Props={maleLaptopProps.maleLaptop08Props} />
        <BackBlur className={backBlurProps.className} />
        <div className="text-container-buttons">
          <div className="text-container">
            <div className="h1 sbsansdisplay-normal-shark-34px">Подписывайте документы онлайн</div>
            <div className="subtitle-1 sbsanstext-regular-normal-shark-24px">{subtitle}</div>
          </div>
          <Button22 onclick={onclick}/>
        </div>
    
      </div>
      <div className="rectangle-1"></div>
    </div>
  );
}

export default HeroBannerMobile;
