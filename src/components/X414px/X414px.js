import React from "react";
import Header2 from "../Header2/Header2";
import HeroBannerMobile from "../HeroBannerMobile/HeroBannerMobile";
import SystemLightStatusBarDefault from "../SystemLightStatusBarDefault/SystemLightStatusBarDefault";
import AdvantageItem4 from "../AdvantageItem4/AdvantageItem4";
import AdvantageItem2 from "../AdvantageItem2/AdvantageItem2";
import TitleSubtitle from "../TitleSubtitle/TitleSubtitle";
import OtherchandsPhone from "../OtherchandsPhone/OtherchandsPhone";
import Column2 from "../Column2/Column2";
import HandsHeart2 from "../HandsHeart2/HandsHeart2";
import Frame270988946 from "../Frame270988946/Frame270988946";
import Frame270988947 from "../Frame270988947/Frame270988947";
import QAItem from "../QAItem/QAItem";
import QAItem2 from "../QAItem2/QAItem2";
import FooterMobile from "../FooterMobile/FooterMobile";
import "./X414px.css";
import IconClock from "../../assets/images/icon-sber-time@2x.svg";
import IcQuestionCircle from "../../assets/images/ic-question-circle@2x.svg";
import ImageDocChips from "../../assets/images/image-doc-chips@2x.svg";

function X414px(props) {
  const {
    h21,
    h22,
    h23,
    subtitle1,
    title1,
    subtitle2,
    subtitle3,
    title2,
    heroBannerMobileProps,
    systemLightStatusBarDefaultProps,
    advantageItem41Props,
    advantageItem2Props,
    titleSubtitleProps,
    advantageItem42Props,
    otherchandsPhoneProps,
    column21Props,
    column22Props,
    column23Props,
    handsHeart2Props,
    frame270988946Props,
    frame270988947Props,
    qAItem1Props,
    qAItem2Props,
    qAItem2Props2,
    footerMobileProps,
  } = props;

  return (
    <div className="x414px screen">
      <div className="hero">
        <Header2 />
        <div className="container-17">
          <HeroBannerMobile
            h1={heroBannerMobileProps.h1}
            subtitle={heroBannerMobileProps.subtitle}
            cmalePhoneProps={heroBannerMobileProps.cmalePhoneProps}
          />
        </div>
        <SystemLightStatusBarDefault time={systemLightStatusBarDefaultProps.time} />
      </div>
      <div className="advantages">
        <div className="container-18">
          <div className="blur-2">
            <div className="ellipse-2166-2"></div>
            <div className="ellipse-2167-4"></div>
          </div>
          <div className="h2-3 sbsansdisplay-normal-white-48px">{h21}</div>
          <div className="adva">
            <AdvantageItem4 titleSubtitleProps={advantageItem41Props.titleSubtitleProps} />
            <AdvantageItem2 className={advantageItem2Props.className} />
            <div className="advantage-item-5">
              <img className="icon-clock-1" src={IconClock} alt="icon-clock" />
              <div className="container-19">
                <TitleSubtitle title={titleSubtitleProps.title} subtitle={titleSubtitleProps.subtitle} />
              </div>
              <img className="ic-question-circle-1" src={IcQuestionCircle} alt="ic question-circle" />
            </div>
            <AdvantageItem4
              className={advantageItem42Props.className}
              titleSubtitleProps={advantageItem42Props.titleSubtitleProps}
            />
          </div>
        </div>
      </div>
      <div className="about">
        <div className="frame-270988950">
          <div className="h2-4 sbsansdisplay-normal-shark-34px">{h22}</div>
          <div className="container-20">
            <img className="image-doc-chips-1" src={ImageDocChips} alt="Image Doc Chips" />
            <div className="image-hands-2">
              <OtherchandsPhone src={otherchandsPhoneProps.src} className={otherchandsPhoneProps.className} />
            </div>
          </div>
        </div>
      </div>
      <div className="section-steps-1">
        <div className="container-21">
          <div className="head-2">
            <div className="h2-5 sbsansdisplay-normal-shark-34px">{h23}</div>
            <div className="subtitle-12 sbsanstext-regular-normal-shark-24px">{subtitle1}</div>
          </div>
          <div className="row-2">
            <Column2
              title={column21Props.title}
              caption={column21Props.caption}
              subtitle={column21Props.subtitle}
              imageSmProps={column21Props.imageSmProps}
            />
            <Column2
              title={column22Props.title}
              caption={column22Props.caption}
              subtitle={column22Props.subtitle}
              imageSmProps={column22Props.imageSmProps}
            />
            <Column2
              title={column23Props.title}
              caption={column23Props.caption}
              subtitle={column23Props.subtitle}
              imageSmProps={column23Props.imageSmProps}
            />
          </div>
        </div>
      </div>
      <div className="tell-us">
        <div className="container-banner">
          <div className="overlap-group-3">
            <HandsHeart2 src={handsHeart2Props.src} />
            <div className="container-22">
              <div className="head-3">
                <div className="title-10 sbsansdisplay-normal-shark-28px">{title1}</div>
                <div className="subtitle-13 sbsanstext-regular-normal-shark-19px-2">{subtitle2}</div>
              </div>
              <div className="frame-270988944-1">
                <div className="subtitle-14 sbsanstext-medium-blue-19px">{subtitle3}</div>
                <div className="container-23">
                  <Frame270988946 linkProps={frame270988946Props.linkProps} />
                  <Frame270988947 linkProps={frame270988947Props.linkProps} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="qa">
        <div className="blur-3">
          <div className="ellipse-container-2">
            <div className="ellipse-2166-3"></div>
            <div className="ellipse-2167-5"></div>
          </div>
        </div>
        <div className="container-24">
          <div className="title-11">{title2}</div>
          <div className="adva">
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
      <FooterMobile
        phone={footerMobileProps.phone}
        sbersdelkiSberbankRu={footerMobileProps.sbersdelkiSberbankRu}
        text2={footerMobileProps.text2}
      />
    </div>
  );
}

export default X414px;