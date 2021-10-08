import React, { useEffect, useState } from "react";
import mainImg from "../images/mainImg.png";

export const Cover = () => {
  let y = 0;
  const [scrollTop, setScrollTop] = useState(0);

  useEffect(() => {
    const scrollEvent = (e: any) => {
      if (e.target.scrollTop <= 38 * 5) {
        setScrollTop(y + e.target.scrollTop / 5);
      }
    };
    window.addEventListener("scroll", scrollEvent, true);
    return () => window.removeEventListener("scroll", scrollEvent, true);
  }, [y]);

  return (
    <section className="cover">
      <div className="cover__img-container">
        <img src={mainImg} alt="" />
      </div>
      <div
        className="cover__container"
        style={{ transform: `translateY(-${scrollTop}px)` }}
      >
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
