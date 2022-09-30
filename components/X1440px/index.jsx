import React from "react";
import Header from "../Header";
import Button2 from "../Button2";
import CmalePhone from "../CmalePhone";
import Blur from "../Blur";
import AdvantageItem from "../AdvantageItem";
import AdvantageItem2 from "../AdvantageItem2";
import AdvantageItem3 from "../AdvantageItem3";
import ImageHands from "../ImageHands";
import Column from "../Column";
import BannerContactsDesktop from "../BannerContactsDesktop";
import QAItem from "../QAItem";
import QAItem2 from "../QAItem2";
import Footer from "../Footer";
import "./X1440px.css";

function X1440px(props) {
  const {
    h1,
    subtitle1,
    h21,
    h22,
    h23,
    subtitle2,
    title,
    headerProps,
    cmalePhoneProps,
    advantageItem1Props,
    advantageItem3Props,
    advantageItem2Props,
    imageHandsProps,
    column1Props,
    column2Props,
    column3Props,
    bannerContactsDesktopProps,
    blurProps,
    qAItem1Props,
    qAItem2Props,
    qAItem2Props2,
    footerProps,
  } = props;

  return (
    <div className="x1440px screen">
      <div className="section-hero">
        <Header buttonProps={headerProps.buttonProps} />
        <div className="container-2">
          <div className="banner">
            <div className="overlap-group1">
              <div className="text-container-buttons">
                <div className="text-container">
                  <h1 className="h1 sbsansdisplay-normal-shark-48px">{h1}</h1>
                  <div className="subtitle sbsanstext-regular-normal-shark-24px">{subtitle1}</div>
                </div>
                <Button2 />
              </div>
              <div className="image-man">
                <CmalePhone src={cmalePhoneProps.src} />
              </div>
              <div className="back-blur">
                <div className="ellipse-container">
                  <div className="ellipse-2166"></div>
                  <div className="ellipse-2167"></div>
                </div>
              </div>
            </div>
            <div className="rectangle-1"></div>
          </div>
        </div>
      </div>
      <div className="section-advantages">
        <Blur />
        <div className="container">
          <div className="h2 sbsansdisplay-normal-white-48px">{h21}</div>
          <div className="advantages-container">
            <div className="advatages-items-row">
              <AdvantageItem containerProps={advantageItem1Props.containerProps} />
              <AdvantageItem2 />
            </div>
            <div className="advatages-items-row">
              <AdvantageItem3 containerProps={advantageItem3Props.containerProps} />
              <AdvantageItem
                className={advantageItem2Props.className}
                containerProps={advantageItem2Props.containerProps}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="section-about">
        <div className="container-1">
          <div className="h2-1 sbsansdisplay-normal-shark-48px">{h22}</div>
          <div className="container-3">
            <ImageHands otherchandsPhoneProps={imageHandsProps.otherchandsPhoneProps} />
            <img className="image-doc-chips" src="/img/image-doc-chips-1@2x.svg" alt="Image Doc Chips" />
          </div>
        </div>
      </div>
      <div className="section-steps">
        <div className="container-1">
          <div className="head">
            <div className="h2-2 sbsansdisplay-normal-shark-48px">{h23}</div>
            <div className="subtitle-1 sbsanstext-regular-normal-shark-24px">{subtitle2}</div>
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
      <div className="section-banner">
        <BannerContactsDesktop
          title={bannerContactsDesktopProps.title}
          subtitle1={bannerContactsDesktopProps.subtitle1}
          subtitle2={bannerContactsDesktopProps.subtitle2}
          frame270988946Props={bannerContactsDesktopProps.frame270988946Props}
          frame270988947Props={bannerContactsDesktopProps.frame270988947Props}
          imageHands2Props={bannerContactsDesktopProps.imageHands2Props}
        />
      </div>
      <div className="section-qa">
        <Blur className={blurProps.className} />
        <div className="container">
          <div className="title sbsansdisplay-normal-white-48px">{title}</div>
          <div className="advatages-items-row-1">
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
      <Footer text1={footerProps.text1} phone={footerProps.phone} podpisSberRu={footerProps.podpisSberRu} />
    </div>
  );
}

export default X1440px;
