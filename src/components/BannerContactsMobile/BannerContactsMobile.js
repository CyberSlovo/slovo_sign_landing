import React from "react";
import HandsHeart from "../HandsHeart/HandsHeart";
import Container from "../Container/Container";
import "./BannerContactsMobile.css";

function BannerContactsMobile(props) {
  const { className, handsHeartProps, containerProps } = props;

  return (
    <div className={`banner-contacts-mobile ${className || ""}`}>
      <div className="overlap-group-8">
        <HandsHeart src={handsHeartProps.src} className={handsHeartProps.className} />
        <Container
          className={containerProps.className}
          headProps={containerProps.headProps}
          frame270988946Props={containerProps.frame270988946Props}
          frame270988947Props={containerProps.frame270988947Props}
        />
      </div>
    </div>
  );
}

export default BannerContactsMobile;
