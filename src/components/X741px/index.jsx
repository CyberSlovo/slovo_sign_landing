import React, { useRef } from "react";
import Header from "../Header";
import Button2 from "../Button2";
import Frame1851039176 from "../Frame1851039176";
import Blur from "../Blur";
import AdvantageItem5 from "../AdvantageItem5";
import ImageHands from "../ImageHands";
import Row from "../Row";
import Frame270988944 from "../Frame270988944";
import ImageHands3 from "../ImageHands3";
import QAItem from "../QAItem";
import Footer2 from "../Footer2";
import "./X741px.css";


import ImageDocChips3 from "../../assets/img/image-doc-chips-3@2x.svg";
import IcQuestionCircle from "../../assets/img/ic-question-circle@2x.svg";
import IconSberTime from "../../assets/img/icon-sber-time@2x.svg";



function X741px(props) {
  const {
    banner,
    h1,
    subtitle1,
    img,
    h21,
    title1,
    subtitle2,
    h22,
    h23,
    subtitle3,
    title2,
    subtitle4,
    title3,
    headerProps,
    blur1Props,
    advantageItem51Props,
    advantageItem52Props,
    advantageItem53Props,
    imageHandsProps,
    rowProps,
    frame270988944Props,
    imageHands3Props,
    blur2Props,
    qAItem1Props,
    qAItem2Props,
    qAItem3Props,
    footer2Props,
  } = props;

  const scollToRef = useRef();  

  return (
    <div className="x741px screen">
      <div className="section-hero-2">
        <Header 
          onclick={() => scollToRef.current.scrollIntoView({ behavior: "smooth" })} 
          className={headerProps.className} 
        />
        <div className="container-30">
          <div className="frame-1851039175-1">
            <div className="banner-2" style={{ backgroundImage: `url(${banner})` }}>
              <div className="text-container-buttons-2">
                <div className="left-container-1">
                  <div className="text-container-2">
                    <div className="h1-2 sbsansdisplay-normal-shark-34px">{h1}</div>
                    <div className="subtitle-18 sbsanstext-regular-normal-shark-24px">{subtitle1}</div>
                  </div>
                  <Button2  onclick={() => scollToRef.current.scrollIntoView({ behavior: "smooth" })}  />
                </div>
                <div className="placeholder-1"></div>
              </div>
              <img className="img-1" src={img} alt="IMG" />
            </div>
            <Frame1851039176 />
          </div>
        </div>
      </div>
      <div className="section-advantages-2">
        <Blur className={blur1Props.className} />
        <div className="container-29">
          <div className="h2-6 sbsansdisplay-normal-white-48px">{h21}</div>
          <div className="advantages-container-2">
            <div className="advatages-items-row-4">
              <AdvantageItem5 
                src={advantageItem51Props.src} 
                title={advantageItem51Props.title} 
                subtitle={advantageItem51Props.subtitle} 
              />
              <AdvantageItem5
                src={advantageItem52Props.src}
                title={advantageItem52Props.title}
                subtitle={advantageItem52Props.subtitle}
                className={advantageItem52Props.className}
              />
            </div>
            <div className="advatages-items-row-4">
//                <div className="advantage-item-6">
//                  <div className="container-31">
//                    <img className="icon-sber-time" src={IconSberTime} alt="Icon Sber time" />
//                    <div className="title-subtitle-7">
//                      <div className="title-13 sbsansdisplay-normal-shark-24px">{title1}</div>
//                      <p className="subtitle-19 sbsanstext-regular-normal-shark-19px">{subtitle2}</p>
//                    </div>
//                  </div>
//                </div>
              <AdvantageItem5
                src={IconSberTime}
                title={title1}
                subtitle={subtitle2}
                className="advantage-item-6"
              />
              <AdvantageItem5
                src={advantageItem53Props.src}
                title={advantageItem53Props.title}
                subtitle={advantageItem53Props.subtitle}
                className={advantageItem53Props.className}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="section-about-2">
        <div className="container-32">
          <div className="h2-7 sbsansdisplay-normal-shark-48px">{h22}</div>
          <div className="container-33">
            <ImageHands
              className={imageHandsProps.className}
              otherchandsPhoneProps={imageHandsProps.otherchandsPhoneProps}
            />
            <img className="image-doc-chips-2" src={ImageDocChips3} alt="Image Doc Chips" />
          </div>
        </div>
      </div>
      <div className="section-1">
        <div className="container-34">
          <div className="head-4">
            <div className="h2-8 sbsansdisplay-normal-shark-48px">{h23}</div>
            <p className="subtitle-20 sbsanstext-regular-normal-shark-24px">{subtitle3}</p>
          </div>
          <Row
            column41Props={rowProps.column41Props}
            column42Props={rowProps.column42Props}
            column43Props={rowProps.column43Props}
          />
        </div>
      </div>
      <div ref={scollToRef} className="section-1">
        <div className="container-banner-1">
          <div className="container-35">
            <div className="head-5">
              <p className="title-14 sbsansdisplay-normal-shark-34px">{title2}</p>
              <p className="subtitle-21 sbsanstext-regular-normal-shark-24px-2">{subtitle4}</p>
            </div>
            <Frame270988944
              className={frame270988944Props.className}
              frame270988946Props={frame270988944Props.frame270988946Props}
              frame270988947Props={frame270988944Props.frame270988947Props}
            />
          </div>
          <ImageHands3 handsHeart2Props={imageHands3Props.handsHeart2Props} />
        </div>
      </div>
      <div className="section-qa-2">
        <Blur className={blur2Props.className} />
        <div className="container-29">
          <div className="title-15 sbsansdisplay-normal-white-48px">{title3}</div>
          <div className="advatages-items-row-5">
            <QAItem title={qAItem1Props.title} subtitle={qAItem1Props.subtitle} />
            <QAItem title={qAItem2Props.title} subtitle={qAItem2Props.subtitle} />
            <QAItem title={qAItem3Props.title} subtitle={qAItem3Props.subtitle} />
          </div>
        </div>
      </div>
      <Footer2 className={footer2Props.className} column3Props={footer2Props.column3Props} />
    </div>
  );
}

export default X741px;
