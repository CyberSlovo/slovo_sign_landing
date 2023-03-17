import React from "react";
import ImageHands2 from "../../ImageHands2";
import Button2 from "../../Button2";
import { Linking, StyleSheet } from "react-native";
import "./tariff_card.css";
import ImageSm from "../../ImageSm";
import IcSberProfile3 from "../../../assets/img/ic-sber-profile-3@2x.svg";

function TariffCard(props) {
  const {
    title,
    amountDays,
    quantity,
    priceDescription,
    allPrice,
    backgroundColorIcon,
    srcUrl,
    className,
  } = props;

  return (
    <div
      className="card-item"
      style={{
        "margin-bottom": className ? "20px" : null,
      }}
    >
      <div className="row-icon">
        <div
          className="image-container"
          style={{
            backgroundColor: backgroundColorIcon,
          }}
        >
          <img className="icon" src={srcUrl || IcSberProfile3} alt="icon" />
        </div>
        <p className=" sbsansdisplay-normal-shark-24px">{title}</p>
      </div>

      <div>
        <div
          className="rowQuantint"
          style={{
            display: "flex",
            alignItems: "center",
            "padding-bottom": "24px",
          }}
        >
          <p
            className="bacground-days sbsanstext-regular-normal-shark-16px"
            style={{
              color: "#2A72F8",
            }}
          >
            {amountDays}
          </p>

          <p
            className="sbsanstext-regular-normal-shark-16px"
            style={styleQuantituy}
          >
            {quantity}
          </p>
        </div>
        <p className="sbsansdisplay-normal-shark-22px">{priceDescription}</p>
        <p
          className="sbsanstext-regular-normal-shark-16px"
          style={{
            " padding-top": "8px",
          }}
        >
          {allPrice}
        </p>
      </div>

      <Button2
        className="button-style"
        text="Попробовать"
        onclick={async () =>
          await Linking.openURL(
            "https://cyberslovo.app/wa/#/signatureVerification"
          )
        }
      />
    </div>
  );
}
const styleQuantituy = {
  color: "#2A72F8",
  "margin-left": "10px",
};

export default TariffCard;
