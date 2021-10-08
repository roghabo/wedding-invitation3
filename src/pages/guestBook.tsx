import React, { useState } from "react";
import { GuestList } from "../components/guest_list";
import { GuestMessage } from "../components/guest_message";
import MainImg from "../images/guest_main_img.png";
import list from "../images/ic_list_3x.png";
import message from "../images/ic_message_3x.png";

export const GuestBook = () => {
  const [menu, setMenu] = useState("message");
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
        {menu === "message" && (
          <>
            <GuestMessage />
            <div className="guest_book__button" onClick={() => setMenu("list")}>
              <img src={list} alt="" />
            </div>
          </>
        )}
        {menu === "list" && (
          <>
            <GuestList />
            <div
              className="guest_book__button"
              onClick={() => setMenu("message")}
            >
              <img src={message} alt="" />
            </div>
          </>
        )}
      </section>
    </div>
  );
};
