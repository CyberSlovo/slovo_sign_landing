import React from "react";
import "./FooterMobile.css";
import OlineSignLogo from "../../assets/img/oline-sign-logo-1@2x.svg";

function FooterMobile(props) {
  const { className } = props;

  return (
    <div className={`footer-mobile ${className || ""}`}>
      <div className="container-48">
        <img className="oline-sign-logo-5" src={OlineSignLogo} alt="Oline-sign Logo" />
        <div className="row-8">
          <div className="column-9 sbsansdisplay-normal-shark-18px">
          <a href={`tel:+7 (499) 404-10-37`}>
            <div className="phone-3">+7 (499) 404-10-37</div>
          </a>
          <a href={`mailto:podpis@sber.ru`}>
            <div className="podpissberru-3">podpis@sber.ru</div>
          </a>
          </div>
          <p className="text-4 sbsanstext-regular-normal-shark-16px">
            ОГРН 1187746905004 ИНН 9705124940
            <br />
            Адрес: 121170, г. Москва, ул. Поклонная,
            <br />
            д. 3, офис 209, этаж 2<br />© ООО «СБЕР ЛИГАЛ». Все права защищены.
            <br />
            При копировании необходимо упоминание.
          </p>
        </div>
      </div>
    </div>
  );
}

export default FooterMobile;
