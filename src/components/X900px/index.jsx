import React, { useRef } from "react";
import Header from "../Header";
import Button2 from "../Button2";
import Blur from "../Blur";
import AdvantageItem3 from "../AdvantageItem3";
import AdvantageItem4 from "../AdvantageItem4";
import ImageHands from "../ImageHands";
import Column2 from "../Column2";
import Frame270988944 from "../Frame270988944";
import ImageHands2 from "../ImageHands2";
import QAItem from "../QAItem";
import Footer2 from "../Footer2";
import "./X900px.css";

import ImageDocChimps from "../../assets/img/image-doc-chips@2x.svg";

function X900px(props) {
  const {
    banner,
    h1,
    subtitle1,
    img,
    h21,
    h22,
    h23,
    subtitle2,
    title1,
    subtitle3,
    title2,
    headerProps,
    blur1Props,
    advantageItem31Props,
    advantageItem32Props,
    advantageItem4Props,
    advantageItem33Props,
    imageHandsProps,
    column21Props,
    column22Props,
    column23Props,
    frame270988944Props,
    imageHands2Props,
    blur2Props,
    qAItem1Props,
    qAItem2Props,
    qAItem3Props,
    footer2Props,
  } = props;

  const scollToRef = useRef();  

  return (
    <div className="x900px screen">
      <div className="section-hero-1">
        <Header 
          onclick={() => scollToRef.current.scrollIntoView({ behavior: "smooth" })} 
          className={headerProps.className} 
        />
        <div className="container-23">
          <div className="frame-1851039175">
            <div className="banner-1" style={{ backgroundImage: `url(${banner})` }}>
              <div className="text-container-buttons-1">
                <div className="left-container">
                  <div className="text-container-1">
                    <div className="h1-1 sbsansdisplay-normal-shark-48px">{h1}</div>
                    <div className="subtitle-13 sbsanstext-regular-normal-shark-24px">{subtitle1}</div>
                  </div>
                  <Button2 onclick={() => scollToRef.current.scrollIntoView({ behavior: "smooth" })} />
                </div>
                <div className="placeholder"></div>
              </div>
            </div>
            <img className="img" src={img} alt="IMG" />
            <div className="frame-1851039176">
              <div className="rectangle-1-1"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="section-advantages-1">
        <Blur className={blur1Props.className} />
        <div className="container-21">
          <div className="h2-3 sbsansdisplay-normal-white-48px">{h21}</div>
          <div className="advantages-container-1">
            <div className="advatages-items-row-2">
              <AdvantageItem3 container2Props={advantageItem31Props.container2Props} />
              <AdvantageItem3
                className={advantageItem32Props.className}
                container2Props={advantageItem32Props.container2Props}
              />
            </div>
            <div className="advatages-items-row-2">
              <AdvantageItem4 container2Props={advantageItem4Props.container2Props} />
              <AdvantageItem3
                className={advantageItem33Props.className}
                container2Props={advantageItem33Props.container2Props}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="section-about-1">
        <div className="container-22">
          <div className="h2-4 sbsansdisplay-normal-shark-48px">{h22}</div>
          <div className="container-24">
            <ImageHands
              className={imageHandsProps.className}
              otherchandsPhoneProps={imageHandsProps.otherchandsPhoneProps}
            />
            <img className="image-doc-chips-1" src={ImageDocChimps} alt="Image Doc Chips" />
          </div>
        </div>
      </div>
      <div className="section">
        <div className="container-22">
          <div className="head-2">
            <div className="h2-5 sbsansdisplay-normal-shark-48px">{h23}</div>
            <p className="subtitle-14 sbsanstext-regular-normal-shark-24px">{subtitle2}</p>
          </div>
          <div className="row-2">
            <Column2
              src={column21Props.src}
              title={column21Props.title}
              caption={column21Props.caption}
              subtitle={column21Props.subtitle}
              imageSmProps={column21Props.imageSmProps}
            />
            <Column2
              src={column22Props.src}
              title={column22Props.title}
              caption={column22Props.caption}
              subtitle={column22Props.subtitle}
              imageSmProps={column22Props.imageSmProps}
            />
            <Column2
              src={column23Props.src}
              title={column23Props.title}
              caption={column23Props.caption}
              subtitle={column23Props.subtitle}
              imageSmProps={column23Props.imageSmProps}
            />
          </div>
        </div>
      </div>
      <div ref={scollToRef} className="section">
        <div className="container-banner">
          <div className="container-25">
            <div className="head-3">
              <p className="title-9 sbsansdisplay-normal-shark-34px">{title1}</p>
              <p className="subtitle-15 sbsanstext-regular-normal-shark-24px-2">{subtitle3}</p>
            </div>
            <Frame270988944
              frame270988946Props={frame270988944Props.frame270988946Props}
              frame270988947Props={frame270988944Props.frame270988947Props}
            />
          </div>
          <ImageHands2 className={imageHands2Props.className} handsHeartProps={imageHands2Props.handsHeartProps} />
        </div>
      </div>
      <div className="section-qa-1">
        <Blur className={blur2Props.className} />
        <div className="container-21">
          <div className="title-10 sbsansdisplay-normal-white-48px">{title2}</div>
          <div className="advatages-items-row-3">
            <QAItem title={qAItem1Props.title} subtitle={qAItem1Props.subtitle} />
            <QAItem title={qAItem2Props.title} subtitle={qAItem2Props.subtitle} />
            <QAItem title={qAItem3Props.title} subtitle={qAItem3Props.subtitle} />
          </div>
        </div>
      </div>
      <Footer2 column3Props={footer2Props.column3Props} />
    </div>
  );
}

export default X900px;
