import React, { useEffect } from "react";
import Swiper, { Navigation } from "swiper";
import "swiper/swiper.scss";
import "swiper/swiper-bundle";
import leftArrow from "../images/ic_l_b_3x.png";
import rightArrow from "../images/ic_r_b_3x.png";
// import Img1 from "../images/gallery/img1.jpeg";
import Img2 from "../images/gallery/img2.jpeg";
import Img3 from "../images/gallery/img3.jpeg";
import Img4 from "../images/gallery/img4.jpeg";
import Img5 from "../images/gallery/img5.jpeg";
import Img6 from "../images/gallery/img6.jpeg";
import Img7 from "../images/gallery/img7.jpeg";
import Img8 from "../images/gallery/img8.jpeg";
import Img9 from "../images/gallery/img9.jpeg";
import Img10 from "../images/gallery/img10.jpeg";
import Img11 from "../images/gallery/img11.jpeg";
import Img12 from "../images/gallery/img12.jpeg";
import Img13 from "../images/gallery/img13.jpeg";
import Img14 from "../images/gallery/img14.jpeg";
import Img15 from "../images/gallery/img15.jpeg";
import Img16 from "../images/gallery/img16.jpeg";
import Img17 from "../images/gallery/img17.jpeg";
import Img18 from "../images/gallery/img18.jpeg";
import Img19 from "../images/gallery/img19.jpeg";
import Img20 from "../images/gallery/img20.jpeg";

Swiper.use([Navigation]);

export const Gallery = () => {
  useEffect(() => {
    new Swiper(".swiper-container", {
      speed: 700,
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
                <div className="gallery__swiper__img__wrapper">
                  {/* <img className="swiper-slide__img" src={Img1} alt="" /> */}
                </div>
              </div>
              <div className="swiper-slide">
                <img className="swiper-slide__img" src={Img2} alt="" />
              </div>
              <div className="swiper-slide">
                <img className="swiper-slide__img" src={Img3} alt="" />
              </div>
              <div className="swiper-slide">
                <img className="swiper-slide__img" src={Img4} alt="" />
              </div>
              <div className="swiper-slide">
                <img className="swiper-slide__img" src={Img5} alt="" />
              </div>
              <div className="swiper-slide">
                <img className="swiper-slide__img" src={Img6} alt="" />
              </div>
              <div className="swiper-slide">
                <img className="swiper-slide__img" src={Img7} alt="" />
              </div>
              <div className="swiper-slide">
                <img className="swiper-slide__img" src={Img8} alt="" />
              </div>
              <div className="swiper-slide">
                <img className="swiper-slide__img" src={Img9} alt="" />
              </div>
              <div className="swiper-slide">
                <img className="swiper-slide__img" src={Img10} alt="" />
              </div>
              <div className="swiper-slide">
                <img className="swiper-slide__img" src={Img11} alt="" />
              </div>
              <div className="swiper-slide">
                <img className="swiper-slide__img" src={Img12} alt="" />
              </div>
              <div className="swiper-slide">
                <img className="swiper-slide__img" src={Img13} alt="" />
              </div>
              <div className="swiper-slide">
                <img className="swiper-slide__img" src={Img14} alt="" />
              </div>
              <div className="swiper-slide">
                <img className="swiper-slide__img" src={Img15} alt="" />
              </div>
              <div className="swiper-slide">
                <img className="swiper-slide__img" src={Img16} alt="" />
              </div>
              <div className="swiper-slide">
                <img className="swiper-slide__img" src={Img17} alt="" />
              </div>
              <div className="swiper-slide">
                <img className="swiper-slide__img" src={Img18} alt="" />
              </div>
              <div className="swiper-slide">
                <img className="swiper-slide__img" src={Img19} alt="" />
              </div>
              <div className="swiper-slide">
                <img className="swiper-slide__img" src={Img20} alt="" />
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
