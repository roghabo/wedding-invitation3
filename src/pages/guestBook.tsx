import React from "react";
import { GuestMessage } from "../components/guest_message";
import MainImg from "../images/guest_main_img.png";

export const GuestBook = () => {
  return (
    <div className="wrapper">
      <section className="guest_book">
        <div className="guest_book__main">
          <img src={MainImg} alt="" />
          <div className="guest_book__main__text">
            <span>
              October 12, 2019 <br />
              Youngseok x Suji
            </span>
          </div>
        </div>
        <GuestMessage />
      </section>
    </div>
  );
};
