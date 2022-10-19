import React from "react";
import "./Head2.css";

function Head2(props) {
  const { className } = props;

  return (
    <div className={`head-5 ${className || ""}`}>
      <div className="title-18 sbsansdisplay-normal-shark-34px">
        Расскажите, какие документы <br />
        вы бы хотели подписывать
      </div>
      <div className="subtitle-24 sbsanstext-regular-normal-shark-24px-2">
        Мы ещё разрабатываем сервис. Как только он станет доступен, обязательно сообщим вам.
      </div>
    </div>
  );
}

export default Head2;
