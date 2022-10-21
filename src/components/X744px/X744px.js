import React, { useRef } from "react";
import Header2 from "../Header2/Header2";
import Button22 from "../Button22/Button22";
import MaleLaptop08 from "../MaleLaptop08/MaleLaptop08";
import BackBlur2 from "../BackBlur2/BackBlur2";
import Blur4 from "../Blur4/Blur4";
import AdvantageItem4 from "../AdvantageItem4/AdvantageItem4";
import AdvantageItem5 from "../AdvantageItem5/AdvantageItem5";
import ImageHands from "../ImageHands/HeroBannerMobile3";
import ImageSm from "../ImageSm/ImageSm";
import Column4 from "../Column4/Column4";
import Head2 from "../Head2/Head2";
import Frame270988944 from "../Frame270988944/Frame270988944";
import ImageHands2 from "../ImageHands2/ImageHands2";
import QAItem from "../QAItem/QAItem";
import QAItem2 from "../QAItem2/QAItem2";
import Footer from "../Footer/Footer";
import "./X744px.css";
import ImageDocChips2 from "../../assets/images/image-doc-chips-2@2x.svg";

function X744px(props) {
  const {
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
    header2Props,
    maleLaptop08Props,
    backBlur2Props,
    blur41Props,
    advantageItem41Props,
    advantageItem42Props,
    advantageItem5Props,
    advantageItem43Props,
    imageSmProps,
    column41Props,
    column42Props,
    head2Props,
    frame270988944Props,
    imageHands2Props,
    blur42Props,
    qAItem1Props,
    qAItem2Props,
    qAItem2Props2,
    footerProps,
  } = props;

  const scollToRef = useRef();  

  return (
    <div className="x744px screen">
      <div className="section-hero-1">
        <Header2 
          onclick={() => scollToRef.current.scrollIntoView({ behavior: "smooth" })}
          buttonsProps={header2Props.buttonsProps} 
        />
        <div className="container-43">
          <div className="banner-1">
            <div className="overlap-group1-2">
              <div className="text-container-buttons-2">
                <div className="text-container-3">
                  <div className="h1-3">{h1}</div>
                  <div className="subtitle-28 sbsanstext-regular-normal-shark-24px">{subtitle1}</div>
                </div>
                <Button22 
                  onclick={() => scollToRef.current.scrollIntoView({ behavior: "smooth" })}
                />
              </div>
              <div className="male-laptop-4">
                <MaleLaptop08 src={maleLaptop08Props.src} className={maleLaptop08Props.className} />
              </div>
              <BackBlur2 className={backBlur2Props.className} />
            </div>
            <div className="rectangle-1-2"></div>
          </div>
        </div>
      </div>
      <div className="section-advantages-1">
        <Blur4 className={blur41Props.className} />
        <div className="container-41">
          <div className="h2-7 sbsansdisplay-normal-white-48px">{h21}</div>
          <div className="advantages-container-1">
            <div className="advatages-items-row-2">
              <AdvantageItem4 
                src={advantageItem41Props.src}
                title={advantageItem41Props.title} 
                subtitle={advantageItem41Props.subtitle} 
              />
              <AdvantageItem4
                src={advantageItem42Props.src}
                title={advantageItem42Props.title}
                subtitle={advantageItem42Props.subtitle}
                className={advantageItem42Props.className}
              />
            </div>
            <div className="advatages-items-row-2">
              <AdvantageItem5 
                src={advantageItem5Props.src}
                title={advantageItem5Props.title} 
                subtitle={advantageItem5Props.subtitle} 
              />
              <AdvantageItem4
                src={advantageItem43Props.src}
                title={advantageItem43Props.title}
                subtitle={advantageItem43Props.subtitle}
                className={advantageItem43Props.className}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="section-about-1">
        <div className="container-42">
          <div className="h2-8 sbsansdisplay-normal-shark-48px">{h22}</div>
          <div className="container-44">
            <ImageHands />
            <img className="image-doc-chips-4" src={ImageDocChips2} alt="Image Doc Chips" />
          </div>
        </div>
      </div>
      <div className="section-1">
        <div className="container-42">
          <div className="head-7">
            <div className="h2-9 sbsansdisplay-normal-shark-48px">{h23}</div>
            <div className="subtitle-29 sbsanstext-regular-normal-shark-24px">{subtitle2}</div>
          </div>
          <div className="row-7">
            <div className="column-7">
              <ImageSm src={imageSmProps.src} />
              <div className="frame-270988932-2">
                <div className="title-20 sbsansdisplay-normal-shark-22px">{title1}</div>
                <div className="frame-270988931-2">
                  <div className="caption-2 sbsansdisplay-normal-shark-28px">{caption}</div>
                  <div className="subtitle-30 sbsanstext-regular-normal-shark-19px-2">{subtitle3}</div>
                </div>
              </div>
            </div>
            <Column4
              title={column41Props.title}
              caption={column41Props.caption}
              subtitle={column41Props.subtitle}
              imageSmProps={column41Props.imageSmProps}
            />
            <Column4
              title={column42Props.title}
              caption={column42Props.caption}
              subtitle={column42Props.subtitle}
              imageSmProps={column42Props.imageSmProps}
            />
          </div>
        </div>
      </div>
      <div ref={scollToRef} className="section-1">
        <div className="container-banner-1">
          <div className="container-45">
            <Head2 className={head2Props.className} />
            <Frame270988944
              className={frame270988944Props.className}
              frame270988946Props={frame270988944Props.frame270988946Props}
              frame270988947Props={frame270988944Props.frame270988947Props}
            />
          </div>
          <ImageHands2 className={imageHands2Props.className} handsHeart3Props={imageHands2Props.handsHeart3Props} />
        </div>
      </div>
      <div className="section-qa-1">
        <Blur4 className={blur42Props.className} />
        <div className="container-41">
          <div className="title-21 sbsansdisplay-normal-white-48px">{title2}</div>
          <div className="advatages-items-row-3">
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
      <Footer column3Props={footerProps.column3Props} />
    </div>
  );
}

export default X744px;
