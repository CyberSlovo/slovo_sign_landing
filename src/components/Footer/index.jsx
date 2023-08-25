import React from "react";
import "./Footer.css";
import OlineSignLogo from "../../assets/img/oline-sign-logo-3@2x.svg";
// import { Linking } from "react-native";

function Footer(props) {
  const { text1, phone, podpisSberRu } = props;

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

          <div className="column-1">
            <div
              className="row-1 sbsansdisplay-normal-shark-24px"
              style={{ justifyContent: "start", gap: "40px" }}
            >
              <p className="phone">{phone}</p>
              <p className="phone">{podpisSberRu}</p>
            </div>
            <div className="row-1">
              <a
                href={`legal/user_agreement.pdf`}
                target="_blank"
                rel="noreferrer"
              >
                <div className={`buttons button-header`}>
                  <div className={"button-header"}>
                    <div className="frame-270988836">
                      <div className={`sbsanstext-regular-normal-white-19px`}>
                        <div className={`button-2 button-header`}>
                          Пользовательское соглашение
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
              <a
                href={`legal/privacy_policy.pdf`}
                target="_blank"
                rel="noreferrer"
              >
                <div className={`buttons button-header`}>
                  <div className={"button-header"}>
                    <div className="frame-270988836">
                      <div className={`sbsanstext-regular-normal-white-19px`}>
                        <div className={`button-2 button-header`}>
                          Политика конфиденциальности
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>

          {/* <div className="column-1 sbsansdisplay-normal-shark-24px">
            {phone} {podpisSberRu}
            <div
              className="row-info"
              style={{
                alignContent: "center",
                alignItems: "center",
              }}
            >
              <a
                href={`legal/user_agreement.pdf`}
                target="_blank"
                rel="noreferrer"
              >
                <div className={`buttons button-header`}>
                  <div className={"button-header"}>
                    <div className="frame-270988836">
                      <div className={`sbsanstext-regular-normal-white-19px`}>
                        <div className={`button-2 button-header`}>
                          Пользовательское соглашение
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
              <a
                href={`legal/privacy_policy.pdf`}
                target="_blank"
                rel="noreferrer"
              >
                <div className={`buttons button-header`}>
                  <div className={"button-header"}>
                    <div className="frame-270988836">
                      <div className={`sbsanstext-regular-normal-white-19px`}>
                        <div className={`button-2 button-header`}>
                          Политика конфиденциальности
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default Footer;
