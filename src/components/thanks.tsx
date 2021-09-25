import React from "react";
import thanksImg from "../images/thanks_img.png";

export const Thanks = () => {
  return (
    <section className="thanks">
      <img src={thanksImg} alt="" />
      <div className="thanks__text-container">
        <div className="thanks__text-container__title">
          <p>Thanks</p>
        </div>
        <div className="thanks__text-container__content">
          <p>
            감사한 마음으로 서로 아끼며 살겠습니다. <br />
            모든 축하의 마음 감사합니다.
          </p>
        </div>
      </div>
    </section>
  );
};
