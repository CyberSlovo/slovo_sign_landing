import React from "react";
import Column3 from "../Column3/Column3";
import "./Footer.css";
import OlineSignLogo3 from "../../assets/images/oline-sign-logo-3@2x.svg";

function Footer(props) {
  const { className, column3Props } = props;

  return (
    <div className={`footer ${className || ""}`}>
      <div className="container-39">
        <img className="oline-sign-logo-5" src={OlineSignLogo3} alt="Oline-sign Logo" />
        <div className="row-4">
          <p className="text-2 sbsanstext-regular-normal-shark-16px">
            ОГРН 1187746905004 ИНН 9705124940
            <br />
            Адрес: 121170, г. Москва, ул. Поклонная,
            <br />
            д. 3, офис 209, этаж 2<br />© ООО «СБЕР ЛИГАЛ». Все права защищены.
            <br />
            При копировании необходимо упоминание.
          </p>
          <Column3 className={column3Props.className} />
        </div>
      </div>
    </div>
  );
}

export default Footer;
