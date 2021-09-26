import React, { useEffect } from "react";
import Swiper, { Navigation } from "swiper";
import "swiper/swiper.scss";
import "swiper/swiper-bundle";
import Img1 from "../images/img1.png";
import leftArrow from "../images/left_arrow.png";
import rightArrow from "../images/arrow.png";

Swiper.use([Navigation]);

export const Gallery = () => {
  useEffect(() => {
    new Swiper(".swiper-container", {
      speed: 500,
      spaceBetween: 10,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
  }, []);
  return (
    <section className="gallery">
      <div className="gallery__swiper">
        <div className="gallery__title">
          <span>Gallery</span>
        </div>
        <div className="gallery__swiper__wrapper">
          <div className="swiper-container">
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                <img className="swiper-slide__img" src={Img1} alt="" />
              </div>
              <div className="swiper-slide">
                <img className="swiper-slide__img" src={Img1} alt="" />
              </div>
              <div className="swiper-slide">
                <img className="swiper-slide__img" src={Img1} alt="" />
              </div>
            </div>
            <div className="swiper-button-prev">
              <img src={leftArrow} alt="leftArrow" />
            </div>
            <div className="swiper-button-next">
              <img src={rightArrow} alt="rightArrow" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
