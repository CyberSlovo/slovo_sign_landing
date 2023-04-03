import React from "react";
import "./Footer.css";
import OlineSignLogo from "../../assets/img/oline-sign-logo-3@2x.svg";
import Buttons from "../Buttons";
import { Linking } from "react-native";

function Footer(props) {
  const { text1, phone, podpisSberRu, mainUrl } = props;

  return (
    <div className="footer">
      <div className="container-20">
        <img
          className="oline-sign-logo-1"
          src={OlineSignLogo}
          alt="Oline-sign Logo"
        />
        <div className="row-1">
          <p className="text-1 sbsanstext-regular-normal-shark-16px">{text1}</p>
          <div className="column-1 sbsansdisplay-normal-shark-24px">
            <div className="row-info">
              <a href={`tel:${phone}`}>
                <div className="phone">{phone}</div>
              </a>
              <a href={`mailto:${podpisSberRu}`}>
                <div className="podpissberru">{podpisSberRu}</div>
              </a>
            </div>
            <div
              className="row-info"
              style={{
                alignContent: "center",
                alignItems: "center",
              }}
            >
              <Buttons
                text="Пользовательское соглашение"
                onclick={async () =>
                  await Linking.openURL(`${mainUrl}/legal/user_agreement.pdf`)
                }
              />
              <Buttons
                text="Политика конфиденциальности"
                // onclick={async () =>
                //   await Linking.openURL(`${mainUrl}/legal/privacy_policy.pdf`)
                // }
                onclick={async () =>
                  await Linking.openURL(`${mainUrl}/legal/privacy_policy.pdf`)
                }
              />
            </div>
            {/* <Buttons
              text="Соглашение об использовании электронной подписи"
              onclick={async () =>
                await Linking.openURL(`${mainUrl}/wa/#/sign_in`)
              }
            /> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
