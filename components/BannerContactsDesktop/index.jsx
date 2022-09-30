import React from "react";
import Frame270988946 from "../Frame270988946";
import Frame270988947 from "../Frame270988947";
import ImageHands2 from "../ImageHands2";
import "./BannerContactsDesktop.css";

function BannerContactsDesktop(props) {
  const { title, subtitle1, subtitle2, frame270988946Props, frame270988947Props, imageHands2Props } = props;

  return (
    <div className="banner-contacts-desktop">
      <div className="container-10">
        <div className="head-1">
          <div className="title-5 sbsansdisplay-normal-shark-34px">{title}</div>
          <div className="subtitle-6">{subtitle1}</div>
        </div>
        <div className="frame-270988944">
          <div className="subtitle-7 sbsanstext-medium-blue-19px">{subtitle2}</div>
          <div className="container-11">
            <Frame270988946 linkProps={frame270988946Props.linkProps} />
            <Frame270988947 linkProps={frame270988947Props.linkProps} />
          </div>
        </div>
      </div>
      <ImageHands2 handsHeartProps={imageHands2Props.handsHeartProps} />
    </div>
  );
}

export default BannerContactsDesktop;
