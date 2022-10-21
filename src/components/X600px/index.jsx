import React, { useRef } from "react";
import Header3 from "../Header3";
import Button2 from "../Button2";
import MaleLaptop from "../MaleLaptop";
import Frame1851039176 from "../Frame1851039176";
import Blur2 from "../Blur2";
import AdvantageItem7 from "../AdvantageItem7";
import TitleSubtitle2 from "../TitleSubtitle2";
import ImageHands4 from "../ImageHands4";
import Row from "../Row";
import BannerContactsMobile from "../BannerContactsMobile";
import Blur3 from "../Blur3";
import QAItem from "../QAItem";
import FooterMobile from "../FooterMobile";
import "./X600px.css";
import ReactTooltip from "react-tooltip";

import IconSberTime from "../../assets/img/icon-sber-time@2x.svg";
import IcQuestionCircle5 from "../../assets/img/ic-question-circle@2x.svg";
import ImageDocChips7 from "../../assets/img/image-doc-chips@2x.svg";

function X600px(props) {
  const {
    banner,
    h1,
    subtitle1,
    h21,
    h22,
    h23,
    subtitle2,
    title,
    header3Props,
    maleLaptopProps,
    frame1851039176Props,
    blur2Props,
    advantageItem71Props,
    advantageItem72Props,
    titleSubtitle2Props,
    advantageItem73Props,
    imageHands4Props,
    rowProps,
    bannerContactsMobileProps,
    qAItem1Props,
    qAItem2Props,
    qAItem3Props,
    footerMobileProps,
  } = props;

  const scollToRef = useRef();  

  return (
    <div className="x600px screen">
      <div className="hero-1">
        <Header3 
          onclick={() => scollToRef.current.scrollIntoView({ behavior: "smooth" })} 
          buttonProps={header3Props.buttonProps} 
        />
        <div className="container-51">
          <div className="frame-1851039175-2">
            <div className="banner-4" style={{ backgroundImage: `url(${banner})` }}>
              <div className="text-container-buttons-4">
                <div className="left-container-2">
                  <div className="text-container-4">
                    <div className="h1-4 sbsansdisplay-normal-shark-34px">{h1}</div>
                    <div className="subtitle-34 sbsanstext-regular-normal-shark-24px">{subtitle1}</div>
                  </div>
                  <Button2  onclick={() => scollToRef.current.scrollIntoView({ behavior: "smooth" })} />
                </div>
                <div className="placeholder-2"></div>
              </div>
              <MaleLaptop className={maleLaptopProps.className} maleLaptop08Props={maleLaptopProps.maleLaptop08Props} />
            </div>
            <Frame1851039176 className={frame1851039176Props.className} />
          </div>
        </div>
      </div>
      <div className="advantages-1">
        <div className="container-50">
          <Blur2 className={blur2Props.className} />
          <div className="h2-12 sbsansdisplay-normal-white-48px">{h21}</div>
          <div className="adva-1">
            <AdvantageItem7 titleSubtitle2Props={advantageItem71Props.titleSubtitle2Props} />
            <AdvantageItem7
              className={advantageItem72Props.className}
              titleSubtitle2Props={advantageItem72Props.titleSubtitle2Props}
            />
            <div className="advantage-item-11">
              <img className="icon-sber-time-2" src={IconSberTime} alt="Icon Sber time" />
              <div className="container-52">
                <TitleSubtitle2 title={titleSubtitle2Props.title} subtitle={titleSubtitle2Props.subtitle} />
              </div>
              <img data-tip data-for="registerTip" className="ic-question-circle-4" src={IcQuestionCircle5} alt="ic question-circle" />
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
            <AdvantageItem7
              className={advantageItem73Props.className}
              titleSubtitle2Props={advantageItem73Props.titleSubtitle2Props}
            />
          </div>
        </div>
      </div>
      <div className="about-1">
        <div className="frame-270988950-1">
          <div className="h2-13 sbsansdisplay-normal-shark-34px">{h22}</div>
          <div className="container-53">
            <img className="image-doc-chips-4" src={ImageDocChips7} alt="Image Doc Chips" />
            <ImageHands4 className={imageHands4Props.className} handsHeartProps={imageHands4Props.handsHeartProps} />
          </div>
        </div>
      </div>
      <div className="section-steps-2">
        <div className="container-50">
          <div className="head-9">
            <div className="h2-14 sbsansdisplay-normal-shark-34px">{h23}</div>
            <p className="subtitle-35 sbsanstext-regular-normal-shark-24px">{subtitle2}</p>
          </div>
          <Row
            className={rowProps.className}
            column41Props={rowProps.column41Props}
            column42Props={rowProps.column42Props}
            column43Props={rowProps.column43Props}
          />
        </div>
      </div>
      <div ref={scollToRef}  className="tell-us-1">
        <BannerContactsMobile
          frame270988946Props={bannerContactsMobileProps.frame270988946Props}
          frame270988947Props={bannerContactsMobileProps.frame270988947Props}
          handsHeartProps={bannerContactsMobileProps.handsHeartProps}
        />
      </div>
      <div className="qa-1">
        <Blur3 />
        <div className="container-54">
          <div className="title-25 sbsansdisplay-normal-white-34px">{title}</div>
          <div className="adva-1">
            <QAItem title={qAItem1Props.title} subtitle={qAItem1Props.subtitle} />
            <QAItem title={qAItem2Props.title} subtitle={qAItem2Props.subtitle} />
            <QAItem title={qAItem3Props.title} subtitle={qAItem3Props.subtitle} />
          </div>
        </div>
      </div>
      <FooterMobile className={footerMobileProps.className} />
    </div>
  );
}

export default X600px;
