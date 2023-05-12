import React from "react";
import ImageHands2 from "../ImageHands2";
import "./BannerContactsMobile.css";
import Button2 from "../Button2";
import { Linking } from "react-native";

function BannerContactsMobile(props) {
  const { title, subtitle, imageHands2Props, menuLinkWa } = props;

  return (
    <div className="section-banner-mobile">
      <div className="banner-contacts-mobile">
        <div className="container-11-mobile ">
          <div className="head-1-mobile ">
            <p className="title-3-mobile  sbsansdisplay-normal-shark-34px">
              {title}
            </p>
            <p className="subtitle-4-mobile  sbsanstext-regular-normal-shark-24px-2">
              {subtitle}
            </p>
          </div>
          <Button2
            text="Проверить подпись"
            onclick={async () =>
              await Linking.openURL(
                `${menuLinkWa.mainUrl}/wa/#/signatureVerification`
              )
            }
          />{" "}
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            "padding-top": "40px",
          }}
        >
          <ImageHands2
            className="mobile-photo"
            handsHeartProps={imageHands2Props.handsHeartProps}
          />
        </div>
      </div>
    </div>
  );
}

export default BannerContactsMobile;
