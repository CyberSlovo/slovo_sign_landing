import React, { useRef } from "react";
import Header from "../Header/Header";
import HeroBannerMobile from "../HeroBannerMobile/HeroBannerMobile";
import Blur from "../Blur/Blur";
import AdvantageItem from "../AdvantageItem/AdvantageItem";
import TitleSubtitle from "../TitleSubtitle/TitleSubtitle";
import Frame270988950 from "../Frame270988950/Frame270988950";
import Column from "../Column/Column";
import BannerContactsMobile from "../BannerContactsMobile/BannerContactsMobile";
import Blur2 from "../Blur2/Blur2";
import QAItem from "../QAItem/QAItem";
import QAItem2 from "../QAItem2/QAItem2";
import FooterMobile from "../FooterMobile/FooterMobile";
import "./X430px.css";
import IconSberTime from "../../assets/images/icon-sber-time@2x.svg";
import IcQuestionCircle from "../../assets/images/ic-question-circle@2x.svg";
import ReactTooltip from "react-tooltip";

function X430px(props) {
  const {
    h21,
    h22,
    subtitle,
    title,
    heroBannerMobileProps,
    advantageItem1Props,
    advantageItem2Props,
    titleSubtitleProps,
    advantageItem3Props,
    frame270988950Props,
    column1Props,
    column2Props,
    column3Props,
    bannerContactsMobileProps,
    qAItem1Props,
    qAItem2Props,
    qAItem2Props2,
  } = props;

  const scollToRef = useRef();  

  return (
    <div className="x430px screen">
      <div className="hero">
        <Header />
        <div className="container">
          <HeroBannerMobile
            onclick={() => scollToRef.current.scrollIntoView({ behavior: "smooth" })}
            subtitle={heroBannerMobileProps.subtitle}
            maleLaptopProps={heroBannerMobileProps.maleLaptopProps}
            backBlurProps={heroBannerMobileProps.backBlurProps}
          />
        </div>
      </div>
      <div className="advantages">
        <div className="container-1">
          <Blur />
          <h1 className="h2 sbsansdisplay-normal-white-48px">{h21}</h1>
          <div className="adva">
            <AdvantageItem titleSubtitleProps={advantageItem1Props.titleSubtitleProps} />
            <AdvantageItem
              className={advantageItem2Props.className}
              titleSubtitleProps={advantageItem2Props.titleSubtitleProps}
            />
            <div className="advantage-item">
              <img className="icon-clock" src={IconSberTime} alt="icon-clock" />
              <div className="container-2">
                <TitleSubtitle title={titleSubtitleProps.title} subtitle={titleSubtitleProps.subtitle} />
              </div>
              <img data-tip data-for="registerTip" className="ic-question-circle" src={IcQuestionCircle} alt="ic question-circle" />
              <ReactTooltip 
                id="registerTip" 
                place="bottom" 
                afterHide={true} 
                backgroundColor="white"
                multiline={true}
                textColor="rgba(38, 38, 38, 0.7)"
                border="1px"
                borderColor="rgba(38, 38, 38, 0.08)"
              >
                УНЭП — это усиленная неквалифицированная подпись
              </ReactTooltip>
            </div>
            <AdvantageItem
              className={advantageItem3Props.className}
              titleSubtitleProps={advantageItem3Props.titleSubtitleProps}
            />
          </div>
        </div>
      </div>
      <div className="about">
        <Frame270988950 otherchandsPhoneProps={frame270988950Props.otherchandsPhoneProps} />
      </div>
      <div className="section-steps">
        <div className="container-3">
          <div className="head">
            <div className="h2-1 sbsansdisplay-normal-shark-34px">{h22}</div>
            <div className="subtitle sbsanstext-regular-normal-shark-24px">{subtitle}</div>
          </div>
          <div className="row">
            <Column
              title={column1Props.title}
              caption={column1Props.caption}
              subtitle={column1Props.subtitle}
              imageSmProps={column1Props.imageSmProps}
            />
            <Column
              title={column2Props.title}
              caption={column2Props.caption}
              subtitle={column2Props.subtitle}
              imageSmProps={column2Props.imageSmProps}
            />
            <Column
              title={column3Props.title}
              caption={column3Props.caption}
              subtitle={column3Props.subtitle}
              imageSmProps={column3Props.imageSmProps}
            />
          </div>
        </div>
      </div>
      <div ref={scollToRef} className="tell-us">
        <BannerContactsMobile
          handsHeartProps={bannerContactsMobileProps.handsHeartProps}
          containerProps={bannerContactsMobileProps.containerProps}
        />
      </div>
      <div className="qa">
        <Blur2 />
        <div className="container-4">
          <div className="title sbsansdisplay-normal-white-34px">{title}</div>
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
      <FooterMobile />
    </div>
  );
}

export default X430px;
