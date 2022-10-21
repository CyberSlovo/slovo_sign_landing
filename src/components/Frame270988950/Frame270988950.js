import React from "react";
import OtherchandsPhone from "../OtherchandsPhone/OtherchandsPhone";
import "./Frame270988950.css";
import ImageDocChips from "../../assets/images/image-doc-chips@2x.svg";

function Frame270988950(props) {
  const { className, otherchandsPhoneProps } = props;

  return (
    <div className={`frame-270988950 ${className || ""}`}>
      <div className="h2-2 sbsansdisplay-normal-shark-34px">
        Подписывайте документы <br />
        юридически значимо
      </div>
      <div className="container-6">
        <img className="image-doc-chips" src={ImageDocChips} alt="Image Doc Chips" />
        <div className="image-hands">
          <OtherchandsPhone src={otherchandsPhoneProps.src} className={otherchandsPhoneProps.className} />
        </div>
      </div>
    </div>
  );
}

export default Frame270988950;
