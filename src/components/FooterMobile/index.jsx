import React from "react";
import "./FooterMobile.css";
import OlineSignLogo from "../../assets/img/oline-sign-logo-1@2x.svg";
import Buttons from "../Buttons";
import { Linking } from "react-native";

function FooterMobile(props) {
  const { text1, phone, podpisSberRu, mainUrl } = props;

  return (
    <div className="footer-mobile">
      <img
        className="oline-sign-logo-1"
        src={OlineSignLogo}
        alt="Oline-sign Logo"
      />
      <div className="sbsansdisplay-normal-shark-24px">
        <a href={`tel:${phone}`}>
          <div className="phone">{phone}</div>
        </a>
        <a href={`mailto:${podpisSberRu}`}>
          <div className="podpissberru">{podpisSberRu}</div>
        </a>
      </div>{" "}
      <Buttons
        text="Пользовательское соглашение"
        onclick={async () =>
          await Linking.openURL(`${mainUrl}/legal/user_agreement.pdf`)
        }
      />
      <Buttons
        text="Политика конфиденциальности"
        onclick={async () =>
          await Linking.openURL(`${mainUrl}/legal/privacy_policy.pdf`)
        }
      />
      {/* <Buttons
        text="Соглашение об использовании электронной подписи"
        onclick={async () => await Linking.openURL(`${mainUrl}/wa/#/sign_in`)}
      /> */}
      <p className="text-1-mobile sbsanstext-regular-normal-shark-16px">
        {text1}
      </p>
    </div>
  );
}

export default FooterMobile;
