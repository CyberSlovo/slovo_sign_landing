import React from "react";
import "./FooterMobile.css";
import OlineSignLogo2 from "../../assets/images/oline-sign-logo-2@2x.svg";

function FooterMobile(props) {
  const { className } = props;

  return (
    <div className={`footer-mobile ${className || ""}`}>
      <div className="container-27">
        <img className="oline-sign-logo-1" src={OlineSignLogo2} alt="Oline-sign Logo" />
        <div className="row-1">
          <div className="column-1 sbsansdisplay-normal-shark-18px">
            <a href={`tel:+7 (499) 404-10-37`}>
              <div className="phone">+7 (499) 404-10-37</div>
            </a>
            <a href={`mailto:podpis@sber.ru`}>
              <div className="podpissberru">podpis@sber.ru</div>
            </a>
          </div>
          <p className="text-1 sbsanstext-regular-normal-shark-16px">
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
