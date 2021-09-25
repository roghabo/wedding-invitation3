import React from "react";
import arrow from "../images/arrow.png";

export const Guest = () => {
  return (
    <section className="guest">
      <div className="guest__title">
        <p>Guest book</p>
      </div>
      <div className="guest__text">
        <p>저희를 향한 축하의 마음을 전해주세요.</p>
      </div>
      <div className="guest__box">
        <p>축하 메시지 남기기</p>
        <img src={arrow} alt="" />
      </div>
      <div className="guest__box">
        <p>축의금 보내기</p>
        <img src={arrow} alt="" />
      </div>
    </section>
  );
};
