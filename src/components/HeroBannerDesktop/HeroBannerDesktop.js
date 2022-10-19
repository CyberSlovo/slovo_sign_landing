import React from "react";
import Button22 from "../Button22/Button22";
import MaleLaptop2 from "../MaleLaptop2/MaleLaptop2";
import BackBlur2 from "../BackBlur2/BackBlur2";
import "./HeroBannerDesktop.css";

function HeroBannerDesktop(props) {
  const { onclick, h1, subtitle, maleLaptop2Props, backBlur2Props } = props;

  return (
    <div className="hero-banner-desktop">
      <div className="overlap-group1-3">
        <div className="text-container-buttons-3">
          <div className="text-container-4">
            <div className="h1-4 sbsansdisplay-normal-shark-48px">{h1}</div>
            <div className="subtitle-38 sbsanstext-regular-normal-shark-24px">{subtitle}</div>
          </div>
          <Button22 onclick={onclick}/>
        </div>
        <MaleLaptop2 className={maleLaptop2Props.className} maleLaptop08Props={maleLaptop2Props.maleLaptop08Props} />
        <BackBlur2 className={backBlur2Props.className} />
      </div>
      <div className="rectangle-1-3"></div>
    </div>
  );
}

export default HeroBannerDesktop;
