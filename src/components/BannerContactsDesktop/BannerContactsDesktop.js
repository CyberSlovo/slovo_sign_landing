import React from "react";
import Frame2709889463 from "../Frame2709889463/Frame2709889463";
import Frame270988947 from "../Frame270988947/Frame270988947";
import ImageHands2 from "../ImageHands2/ImageHands2";
import "./BannerContactsDesktop.css";

function BannerContactsDesktop(props) {
  const { title, subtitle1, subtitle2, frame2709889463Props, frame270988947Props, imageHands2Props } = props;

  return (
    <div className="banner-contacts-desktop">
      <div className="container-60">
        <div className="head-10">
          <div className="title-31 sbsansdisplay-normal-shark-34px">{title}</div>
          <div className="subtitle-41 sbsanstext-regular-normal-shark-24px-2">{subtitle1}</div>
        </div>
        <div className="frame-270988944-3">
          <div className="subtitle-42 sbsanstext-medium-blue-19px">{subtitle2}</div>
          <div className="container-61">
            <Frame2709889463 linkProps={frame2709889463Props.linkProps} />
            <Frame270988947 linkProps={frame270988947Props.linkProps} />
          </div>
        </div>
      </div>
      <ImageHands2 className={imageHands2Props.className} handsHeart3Props={imageHands2Props.handsHeart3Props} />
    </div>
  );
}

export default BannerContactsDesktop;
