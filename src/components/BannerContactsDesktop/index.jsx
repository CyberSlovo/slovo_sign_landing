import React from "react";
import Frame270988944 from "../Frame270988944";
import ImageHands2 from "../ImageHands2";
import "./BannerContactsDesktop.css";

function BannerContactsDesktop(props) {
  const { title, subtitle, frame270988944Props, imageHands2Props } = props;

  return (
    <div className="banner-contacts-desktop">
      <div className="container-11">
        <div className="head-1">
          <p className="title-3 sbsansdisplay-normal-shark-34px">{title}</p>
          <p className="subtitle-4 sbsanstext-regular-normal-shark-24px-2">{subtitle}</p>
        </div>
        <Frame270988944
          frame270988946Props={frame270988944Props.frame270988946Props}
          frame270988947Props={frame270988944Props.frame270988947Props}
        />
      </div>
      <ImageHands2 handsHeartProps={imageHands2Props.handsHeartProps} />
    </div>
  );
}

export default BannerContactsDesktop;
