import React, { useRef } from "react";
import Header from "../Header/Header";
import HeroBannerMobile from "../HeroBannerMobile/HeroBannerMobile";
import Blur from "../Blur/Blur";
import AdvantageItem6 from "../AdvantageItem6/AdvantageItem6";
import Container3 from "../Container3/Container3";
import Frame270988950 from "../Frame270988950/Frame270988950";
import Column5 from "../Column5/Column5";
import BannerContactsMobile from "../BannerContactsMobile/BannerContactsMobile";
import Blur2 from "../Blur2/Blur2";
import QAItem from "../QAItem/QAItem";
import QAItem2 from "../QAItem2/QAItem2";
import FooterMobile from "../FooterMobile/FooterMobile";
import "./X375px.css";
import IcQuestionCircle from "../../assets/images/ic-question-circle@2x.svg";
import ReactTooltip from "react-tooltip";

function X375px(props) {
  const {
    h21,
    h22,
    subtitle,
    title,
    headerProps,
    heroBannerMobileProps,
    blurProps,
    advantageItem61Props,
    advantageItem62Props,
    container3Props,
    advantageItem63Props,
    frame270988950Props,
    column51Props,
    column52Props,
    column53Props,
    bannerContactsMobileProps,
    qAItem1Props,
    qAItem2Props,
    qAItem2Props2,
    footerMobileProps,
  } = props;

  const scollToRef = useRef();  

  return (
    <div className="x375px screen">
       <Header className={headerProps.className} />
        <div className="container-48">
          <HeroBannerMobile
            onclick={() => scollToRef.current.scrollIntoView({ behavior: "smooth" })}
            subtitle={heroBannerMobileProps.subtitle}
            className={heroBannerMobileProps.className}
            maleLaptopProps={heroBannerMobileProps.maleLaptopProps}
            backBlurProps={heroBannerMobileProps.backBlurProps}
          />
        </div>
      <div className="advantages-1">
        <div className="container-49">
          <Blur className={blurProps.className} />
          <div className="h2-10 sbsansdisplay-normal-white-48px">{h21}</div>
          <div className="advantages-container-2">
            <AdvantageItem6 container3Props={advantageItem61Props.container3Props} />
            <AdvantageItem6
              className={advantageItem62Props.className}
              container3Props={advantageItem62Props.container3Props}
            />
            <div className="advantage-item-8">
              <Container3
                src={container3Props.src}
                title={container3Props.title}
                subtitle={container3Props.subtitle}
                className={container3Props.className}
              />
              <img data-tip data-for="registerTip" className="ic-question-circle-3" src={IcQuestionCircle} alt="ic question-circle" />
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
            <AdvantageItem6
              className={advantageItem63Props.className}
              container3Props={advantageItem63Props.container3Props}
            />
          </div>
        </div>
      </div>
      <div className="about-1">
        <Frame270988950
          className={frame270988950Props.className}
          otherchandsPhoneProps={frame270988950Props.otherchandsPhoneProps}
        />
      </div>
      <div className="section-steps-1">
        <div className="container-50">
          <div className="head-8">
            <div className="h2-11 sbsansdisplay-normal-shark-34px">{h22}</div>
            <div className="subtitle-34 sbsanstext-regular-normal-shark-24px">{subtitle}</div>
          </div>
          <div className="row-8">
            <Column5
              title={column51Props.title}
              caption={column51Props.caption}
              subtitle={column51Props.subtitle}
              imageSmProps={column51Props.imageSmProps}
            />
            <Column5
              title={column52Props.title}
              caption={column52Props.caption}
              subtitle={column52Props.subtitle}
              imageSmProps={column52Props.imageSmProps}
            />
            <Column5
              title={column53Props.title}
              caption={column53Props.caption}
              subtitle={column53Props.subtitle}
              imageSmProps={column53Props.imageSmProps}
            />
          </div>
        </div>
      </div>
      <div ref={scollToRef}  className="tell-us-1">
        <BannerContactsMobile
          className={bannerContactsMobileProps.className}
          handsHeartProps={bannerContactsMobileProps.handsHeartProps}
          containerProps={bannerContactsMobileProps.containerProps}
        />
      </div>
      <div className="qa-1">
        <Blur2 />
        <div className="container-51">
          <div className="title-25 sbsansdisplay-normal-white-34px">{title}</div>
          <div className="advatages-items-row-4">
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
      <FooterMobile className={footerMobileProps.className} />
    </div>
  );
}

export default X375px;
