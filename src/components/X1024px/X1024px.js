import React, { useRef } from "react";
import Header2 from "../Header2/Header2";
import Button22 from "../Button22/Button22";
import MaleLaptop2 from "../MaleLaptop2/MaleLaptop2";
import BackBlur2 from "../BackBlur2/BackBlur2";
import Blur4 from "../Blur4/Blur4";
import AdvantageItem2 from "../AdvantageItem2/AdvantageItem2";
import AdvantageItem3 from "../AdvantageItem3/AdvantageItem3";
import ImageHands from "../ImageHands/HeroBannerMobile3";
import Column2 from "../Column2/Column2";
import Head2 from "../Head2/Head2";
import Frame270988944 from "../Frame270988944/Frame270988944";
import ImageHands2 from "../ImageHands2/ImageHands2";
import QAItem from "../QAItem/QAItem";
import QAItem2 from "../QAItem2/QAItem2";
import Footer from "../Footer/Footer";
import "./X1024px.css";
import ImageDocChips1 from "../../assets/images/image-doc-chips-1@2x.svg";

function X1024px(props) {
  const {
    h1,
    subtitle1,
    h21,
    h22,
    h23,
    subtitle2,
    title,
    header2Props,
    maleLaptop2Props,
    advantageItem21Props,
    advantageItem22Props,
    advantageItem3Props,
    advantageItem23Props,
    column21Props,
    column22Props,
    column23Props,
    frame270988944Props,
    imageHands2Props,
    blur4Props,
    qAItem1Props,
    qAItem2Props,
    qAItem2Props2,
    footerProps,
  } = props;

  const scollToRef = useRef();  

  return (
    <div className="x1024px screen">
      <div className="section-hero">
        <Header2 
          onclick={() => scollToRef.current.scrollIntoView({ behavior: "smooth" })}
          buttonsProps={header2Props.buttonsProps} 
        />
        <div className="container-31">
          <div className="banner">
            <div className="overlap-group1-1">
              <div className="text-container-buttons-1">
                <div className="text-container-2">
                  <div className="h1-2 sbsansdisplay-normal-shark-48px">{h1}</div>
                  <div className="subtitle-20 sbsanstext-regular-normal-shark-24px">{subtitle1}</div>
                </div>
                <Button22 onclick={() => scollToRef.current.scrollIntoView({ behavior: "smooth" })} />
              </div>
              <MaleLaptop2 maleLaptop08Props={maleLaptop2Props.maleLaptop08Props} />
              <BackBlur2 />
            </div>
            <div className="rectangle-1-1"></div>
          </div>
        </div>
      </div>
      <div className="section-advantages">
        <Blur4 />
        <div className="container-29">
          <div className="h2-3 sbsansdisplay-normal-white-48px">{h21}</div>
          <div className="advantages-container">
            <div className="advatages-items-row">
              <AdvantageItem2 container2Props={advantageItem21Props.container2Props} />
              <AdvantageItem2
                className={advantageItem22Props.className}
                container2Props={advantageItem22Props.container2Props}
              />
            </div>
            <div className="advatages-items-row">
              <AdvantageItem3 container2Props={advantageItem3Props.container2Props} />
              <AdvantageItem2
                className={advantageItem23Props.className}
                container2Props={advantageItem23Props.container2Props}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="section-about">
        <div className="container-30">
          <div className="h2-5 sbsansdisplay-normal-shark-48px">{h22}</div>
          <div className="container-32">
            <ImageHands />
            <img className="image-doc-chips-3" src={ImageDocChips1} alt="Image Doc Chips" />
          </div>
        </div>
      </div>
      <div className="section">
        <div className="container-30">
          <div className="head-4">
            <div className="h2-6 sbsansdisplay-normal-shark-48px">{h23}</div>
            <div className="subtitle-21 sbsanstext-regular-normal-shark-24px">{subtitle2}</div>
          </div>
          <div className="row-3">
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
      <div ref={scollToRef} className="section">
        <div className="container-banner">
          <div className="container-33">
            <Head2 />
            <Frame270988944
              frame270988946Props={frame270988944Props.frame270988946Props}
              frame270988947Props={frame270988944Props.frame270988947Props}
            />
          </div>
          <ImageHands2 handsHeart3Props={imageHands2Props.handsHeart3Props} />
        </div>
      </div>
      <div className="section-qa">
        <Blur4 className={blur4Props.className} />
        <div className="container-29">
          <div className="title-12 sbsansdisplay-normal-white-48px">{title}</div>
          <div className="advatages-items-row-1">
            <QAItem title={qAItem1Props.title} subtitle={qAItem1Props.subtitle} />
            <QAItem title={qAItem2Props.title} subtitle={qAItem2Props.subtitle} />
            <QAItem2
              title={qAItem2Props2.title}
              spanText1={qAItem2Props2.spanText1}
              spanText3={qAItem2Props2.spanText3}
              className={qAItem2Props2.className}
            />
          </div>
        </div>
      </div>
      <Footer column3Props={footerProps.column3Props} />
    </div>
  );
}

export default X1024px;
