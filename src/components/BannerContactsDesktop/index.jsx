import React from "react";
import ImageHands2 from "../ImageHands2";
import "./BannerContactsDesktop.css";
import Button2 from "../Button2";
import { Linking } from "react-native";

function BannerContactsDesktop(props) {
  const { title, subtitle, imageHands2Props, isMobile, menuLinkWa } = props;

  return (
    <div
      className="section-banner"
      style={{
        width: isMobile ? "100%" : null,
        padding: isMobile ? "80px 32px 0px 32px" : null,
      }}
    >
      <div
        className="banner-contacts-desktop"
        style={{ width: isMobile ? "100%" : null }}
      >
        <div className="container-11">
          <div className="head-1">
            <p className="title-3 sbsansdisplay-normal-shark-34px">{title}</p>
            <p className="subtitle-4 sbsanstext-regular-normal-shark-24px-2">
              {subtitle}
            </p>
          </div>
          <Button2
            text="Проверить подпись"
            onclick={async () =>
              await Linking.openURL(
                // `${menuLinkWa.mainUrl}/wa/#/signatureVerification`
                `/wa/#/signatureVerification`
              )
            }
          />{" "}
        </div>{" "}
        <ImageHands2 handsHeartProps={imageHands2Props.handsHeartProps} />
      </div>
    </div>
  );
}

export default BannerContactsDesktop;
