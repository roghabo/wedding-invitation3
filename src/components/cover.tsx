import React from "react";
import mainImg from "../images/mainImg.png";

export const Cover = () => {
  return (
    <section className="cover">
      <img src={mainImg} alt="" />
      <div className="cover__container">
        <div className="cover__title">
          <span>2019.10.12</span>
        </div>
        <div className="cover__location">
          <span>
            바울교회 바울센터 7층 아트홀, AM 11:30 <br />
            Jung youngseok x Choi Suji
          </span>
        </div>
      </div>
    </section>
  );
};
