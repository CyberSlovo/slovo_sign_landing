import OlineSignLogo2 from "../../assets/img/oline-sign-logo-2@2x.svg";
import React from "react";
import { Linking } from "react-native";
import Buttons from "../Buttons";
import Button2 from "../Button2";
import "./Header.css";
import ButtonOutline from "../ButtonOutline";

function Header(props) {
  const { menuLinkWa, onTapTarif, className } = props;

  return (
    <div className={`header ${className || ""}`}>
      <div className="container-4">
        <img
          className="oline-sign-logo"
          src={OlineSignLogo2}
          alt="Oline-sign Logo"
        />
        <div className="advatages-buttons-row">
          <Buttons text="Тарифы" onclick={onTapTarif} />
          <Buttons
            text="Проверить подпись"
            onclick={async () =>
              await Linking.openURL(menuLinkWa.signatureVerification)
            }
          />

          <ButtonOutline
            text="Зарегистрироваться"
            onclick={async () => await Linking.openURL(menuLinkWa.signUp)}
          />

          <div
            style={{
              "margin-left": "10px",
            }}
          >
            <Button2
              text="Войти"
              onclick={async () => await Linking.openURL(menuLinkWa.signIn)}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
