import React from "react";
import Frame270988946 from "../Frame270988946";
import Frame270988947 from "../Frame270988947";
import HandsHeart from "../HandsHeart";
import "./BannerContactsMobile.css";

function BannerContactsMobile(props) {
  const { frame270988946Props, frame270988947Props, handsHeartProps } = props;

  return (
    <div className="banner-contacts-mobile">
      <div className="container-44">
        <div className="head-7">
          <p className="title-23 sbsansdisplay-normal-shark-28px">
            Расскажите, какие документы <br />
            вы бы хотели подписывать
          </p>
          <p className="subtitle-30 sbsanstext-regular-normal-shark-19px-2">
            Мы ещё разрабатываем сервис. Как только он станет доступен, обязательно сообщим вам.
          </p>
        </div>
        <div className="frame-270988944-2">
          <div className="subtitle-31 sbsanstext-medium-blue-19px">свяжитесь с нами</div>
          <div className="container-45">
            <Frame270988946 linkProps={frame270988946Props.linkProps} />
            <Frame270988947 linkProps={frame270988947Props.linkProps} />
          </div>
        </div>
      </div>
      <HandsHeart src={handsHeartProps.src} className={handsHeartProps.className} />
    </div>
  );
}

export default BannerContactsMobile;
