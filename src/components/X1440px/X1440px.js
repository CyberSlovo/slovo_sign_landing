import React, { useRef } from "react";
import Header2 from "../Header2/Header2";
import HeroBannerDesktop from "../HeroBannerDesktop/HeroBannerDesktop";
import Blur4 from "../Blur4/Blur4";
import AdvantageItem11 from "../AdvantageItem11/AdvantageItem11";
import AdvantageItem32 from "../AdvantageItem32/AdvantageItem32";
import ImageHands4 from "../ImageHands4/ImageHands4";
import Column8 from "../Column8/Column8";
import BannerContactsDesktop from "../BannerContactsDesktop/BannerContactsDesktop";
import QAItem from "../QAItem/QAItem";
import QAItem2 from "../QAItem2/QAItem2";
import Footer from "../Footer/Footer";
import "./X1440px.css";
import ImageDocChips4 from "../../assets/images/image-doc-chips-4@2x.svg";

function X1440px(props) {
  const {
    h21,
    h22,
    h23,
    subtitle,
    title,
    header2Props,
    heroBannerDesktopProps,
    blur41Props,
    advantageItem111Props,
    advantageItem112Props,
    advantageItem32Props,
    advantageItem113Props,
    imageHands4Props,
    column81Props,
    column82Props,
    column83Props,
    bannerContactsDesktopProps,
    blur42Props,
    qAItem1Props,
    qAItem2Props,
    qAItem2Props2,
    footerProps,
  } = props;

  const scollToRef = useRef();  

  return (
    <div className="x1440px screen">
      <div className="section-hero-2">
        <Header2 
        
        onclick={() => scollToRef.current.scrollIntoView({ behavior: "smooth" })}
        
        className={header2Props.className} buttonsProps={header2Props.buttonsProps} />
        <div className="container-57">
          <HeroBannerDesktop
            onclick={() => scollToRef.current.scrollIntoView({ behavior: "smooth" })}
            h1={heroBannerDesktopProps.h1}
            subtitle={heroBannerDesktopProps.subtitle}
            maleLaptop2Props={heroBannerDesktopProps.maleLaptop2Props}
            backBlur2Props={heroBannerDesktopProps.backBlur2Props}
          />
        </div>
      </div>
      <div className="section-advantages-2">
        <Blur4 className={blur41Props.className} />
        <div className="container-55">
          <div className="h2-12 sbsansdisplay-normal-white-48px">{h21}</div>
          <div className="advantages-container-3">
            <div className="advatages-items-row-5">
              <AdvantageItem11 containerProps={advantageItem111Props.containerProps} />
              <AdvantageItem11
                className={advantageItem112Props.className}
                containerProps={advantageItem112Props.containerProps}
              />
            </div>
            <div className="advatages-items-row-5">
              <AdvantageItem32 containerProps={advantageItem32Props.containerProps} />
              <AdvantageItem11
                className={advantageItem113Props.className}
                containerProps={advantageItem113Props.containerProps}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="section-about-2">
        <div className="container-56">
          <div className="h2-13 sbsansdisplay-normal-shark-48px">{h22}</div>
          <div className="container-58">
            <ImageHands4 otherchandsPhoneProps={imageHands4Props.otherchandsPhoneProps} />
            <img className="image-doc-chips-5" src={ImageDocChips4} alt="Image Doc Chips" />
          </div>
        </div>
      </div>
      <div className="section-steps-2">
        <div className="container-56">
          <div className="head-9">
            <div className="h2-14 sbsansdisplay-normal-shark-48px">{h23}</div>
            <div className="subtitle-37 sbsanstext-regular-normal-shark-24px">{subtitle}</div>
          </div>
          <div className="row-9">
            <Column8
              title={column81Props.title}
              caption={column81Props.caption}
              subtitle={column81Props.subtitle}
              imageSmProps={column81Props.imageSmProps}
            />
            <Column8
              title={column82Props.title}
              caption={column82Props.caption}
              subtitle={column82Props.subtitle}
              className={column82Props.className}
              imageSmProps={column82Props.imageSmProps}
            />
            <Column8
              title={column83Props.title}
              caption={column83Props.caption}
              subtitle={column83Props.subtitle}
              imageSmProps={column83Props.imageSmProps}
            />
          </div>
        </div>
      </div>
      <div ref={scollToRef} className="section-banner">
        <BannerContactsDesktop
          title={bannerContactsDesktopProps.title}
          subtitle1={bannerContactsDesktopProps.subtitle1}
          subtitle2={bannerContactsDesktopProps.subtitle2}
          frame2709889463Props={bannerContactsDesktopProps.frame2709889463Props}
          frame270988947Props={bannerContactsDesktopProps.frame270988947Props}
          imageHands2Props={bannerContactsDesktopProps.imageHands2Props}
        />
      </div>
      <div className="section-qa-2">
        <Blur4 className={blur42Props.className} />
        <div className="container-55">
          <div className="title-28 sbsansdisplay-normal-white-48px">{title}</div>
          <div className="advatages-items-row-6">
            <QAItem title={qAItem1Props.title} subtitle={qAItem1Props.subtitle} />
            <QAItem title={qAItem2Props.title} subtitle={qAItem2Props.subtitle} />
            <QAItem2
              title={qAItem2Props2.title}
              spanText1={qAItem2Props2.spanText1}
              spanText3={qAItem2Props2.spanText3}
            />
          </div>
        </div>
      </div>
      <Footer className={footerProps.className} column3Props={footerProps.column3Props} />
    </div>
  );
}

export default X1440px;
