import React, { useRef } from "react";
import Header2 from "../Header2";
import Button2 from "../Button2";
import MaleLaptop from "../MaleLaptop";
import Blur2 from "../Blur2";
import AdvantageItem6 from "../AdvantageItem6";
import TitleSubtitle from "../TitleSubtitle";
import ImageHands4 from "../ImageHands4";
import ImageSm from "../ImageSm";
import Column5 from "../Column5";
import BannerContactsMobile from "../BannerContactsMobile";
import Blur3 from "../Blur3";
import QAItem from "../QAItem";
import FooterMobile from "../FooterMobile";
import "./X375px.css";
import ReactTooltip from "react-tooltip";

import IconSberTime from "../../assets/img/icon-sber-time@2x.svg";
import IcQuestionCircle from "../../assets/img/ic-question-circle@2x.svg";
import ImageDocChips from "../../assets/img/image-doc-chips@2x.svg";

import IcSberProfile from "../../assets/img/ic-sber-profile@2x.svg";

function X375px(props) {
  const {
    heroBannerMobile,
    h1,
    subtitle1,
    h21,
    h22,
    h23,
    subtitle2,
    title1,
    caption,
    subtitle3,
    title2,
    maleLaptopProps,
    advantageItem61Props,
    advantageItem62Props,
    titleSubtitleProps,
    advantageItem63Props,
    imageHands4Props,
    column51Props,
    column52Props,
    bannerContactsMobileProps,
    qAItem1Props,
    qAItem2Props,
    qAItem3Props,
  } = props;

  const scollToRef = useRef(); 

  return (
    <div className="x375px screen">
      <div className="hero">
        <Header2  />
        <div className="container-37">
          <div className="banner-3">
            <div className="hero-banner-mobile" style={{ backgroundImage: `url(${heroBannerMobile})` }}>
              <MaleLaptop maleLaptop08Props={maleLaptopProps.maleLaptop08Props} />
              <div className="text-container-buttons-3">
                <div className="text-container-3">
                  <div className="h1-3 sbsansdisplay-normal-shark-34px">{h1}</div>
                  <div className="subtitle-25 sbsanstext-regular-normal-shark-24px">{subtitle1}</div>
                </div>
                <Button2 onclick={() => scollToRef.current.scrollIntoView({ behavior: "smooth" })} />
              </div>
            </div>
            <div className="frame-1851039177">
              <div className="rectangle-1-3"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="advantages">
        <div className="container-38">
          <Blur2 />
          <div className="h2-9 sbsansdisplay-normal-white-48px">{h21}</div>
          <div className="adva">
            <AdvantageItem6 titleSubtitleProps={advantageItem61Props.titleSubtitleProps} />
            <AdvantageItem6
              className={advantageItem62Props.className}
              titleSubtitleProps={advantageItem62Props.titleSubtitleProps}
            />
            <div className="advantage-item-9">
              <img className="icon-sber-time-1" src={IconSberTime} alt="Icon Sber time" />
              <div className="container-39">
                <TitleSubtitle title={titleSubtitleProps.title} subtitle={titleSubtitleProps.subtitle} />
              </div>
            </div>
            <AdvantageItem6
              className={advantageItem63Props.className}
              titleSubtitleProps={advantageItem63Props.titleSubtitleProps}
            />
          </div>
        </div>
      </div>
      <div className="about">
        <div className="frame-270988950">
          <div className="h2-10 sbsansdisplay-normal-shark-34px">{h22}</div>
          <div className="container-40">
            <img className="image-doc-chips-3" src={ImageDocChips} alt="Image Doc Chips" />
            <ImageHands4 handsHeartProps={imageHands4Props.handsHeartProps} />
          </div>
        </div>
      </div>
      <div className="section-steps-1">
        <div className="container-41">
          <div className="head-6">
            <div className="h2-11 sbsansdisplay-normal-shark-34px">{h23}</div>
            <p className="subtitle-26 sbsanstext-regular-normal-shark-24px">{subtitle2}</p>
          </div>
          <div className="row-7">
            <div className="column-7">
              <ImageSm src={IcSberProfile}/>
              <div className="frame-270988932-4">
                <div className="title-19 sbsansdisplay-normal-shark-22px">{title1}</div>
                <div className="frame-270988931-4">
                  <div className="caption-4 sbsansdisplay-normal-shark-28px">{caption}</div>
                  <p className="subtitle-27 sbsanstext-regular-normal-shark-19px-2">{subtitle3}</p>
                </div>
              </div>
            </div>
            <Column5
              src={column51Props.src}
              title={column51Props.title}
              caption={column51Props.caption}
              subtitle={column51Props.subtitle}
              imageSmProps={column51Props.imageSmProps}
            />
            <Column5
              src={column52Props.src}
              title={column52Props.title}
              caption={column52Props.caption}
              subtitle={column52Props.subtitle}
              imageSmProps={column52Props.imageSmProps}
            />
          </div>
        </div>
      </div>
      <div ref={scollToRef}  className="tell-us">
        <BannerContactsMobile
          frame270988946Props={bannerContactsMobileProps.frame270988946Props}
          frame270988947Props={bannerContactsMobileProps.frame270988947Props}
          handsHeartProps={bannerContactsMobileProps.handsHeartProps}
        />
      </div>
      <div className="qa">
        <Blur3 />
        <div className="container-42">
          <div className="title-20 sbsansdisplay-normal-white-34px">{title2}</div>
          <div className="adva">
            <QAItem title={qAItem1Props.title} subtitle={qAItem1Props.subtitle} />
            <QAItem title={qAItem2Props.title} subtitle={qAItem2Props.subtitle} />
            <QAItem title={qAItem3Props.title} subtitle={qAItem3Props.subtitle} />
          </div>
        </div>
      </div>
      <FooterMobile />
    </div>
  );
}

export default X375px;
