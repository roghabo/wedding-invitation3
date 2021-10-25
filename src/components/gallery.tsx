import React, { useEffect } from "react";
import Swiper, { Navigation, Pagination } from "swiper";
import "swiper/swiper.scss";
import "swiper/swiper-bundle";
import leftArrow from "../images/ic_l_b_3x.png";
import rightArrow from "../images/ic_r_b_3x.png";

interface IGalleryProps {
  photos: string[];
}

Swiper.use([Navigation, Pagination]);

export const Gallery: React.FC<IGalleryProps> = ({ photos }) => {
  useEffect(() => {
    new Swiper(".swiper-container", {
      speed: 800,
      spaceBetween: 10,
      pagination: {
        el: ".swiper-pagination",
        type: "fraction",
      },
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
              {photos.map((photo, index) => (
                <div className="swiper-slide" key={index}>
                  <img className="swiper-slide__img" src={photo} alt="" />
                </div>
              ))}
            </div>
          </div>
          <div className="swiper-button-prev">
            <img src={leftArrow} alt="leftArrow" />
          </div>
          <div className="swiper-button-next">
            <img src={rightArrow} alt="rightArrow" />
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </div>
    </section>
  );
};
