import React from "react";
import Column3 from "../Column3";
import "./Footer2.css";
import OlineSignLogo from "../../assets/img/oline-sign-logo-1@2x.svg";

function Footer2(props) {
  const { className, column3Props } = props;

  return (
    <div className={`footer-1 ${className || ""}`}>
      <div className="container-27">
        <img className="oline-sign-logo-3" src={OlineSignLogo} alt="Oline-sign Logo" />
        <div className="row-3">
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

export default Footer2;
