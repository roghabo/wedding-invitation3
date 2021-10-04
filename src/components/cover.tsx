import React, { useEffect, useState } from "react";
import mainImg from "../images/mainImg.png";

export const Cover = () => {
  const [scrollTop, setScrollTop] = useState(0);
  useEffect(() => {
    const ssss = (e: any) => {
      if (e.target.scrollTop <= 36) {
        setScrollTop(e.target.scrollTop);
      }
    };
    window.addEventListener("scroll", ssss, true);
    return () => window.removeEventListener("scroll", ssss, true);
  }, []);

  return (
    <section className="cover">
      <img src={mainImg} alt="" />
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
