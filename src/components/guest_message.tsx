import React, { useEffect, useState } from "react";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../fbase";

export const GuestMessage = () => {
  const [active, setActive] = useState("all");
  const [messages, setMessages] = useState<any[] | []>([]);
  const getMessages = async (filter: any) => {
    if (filter === "all") {
      const dbMessages = await getDocs(collection(db, "message"));
      dbMessages.forEach((document) => {
        const messageObject = {
          ...document.data(),
          id: document.id,
        };
        setMessages((prev) => [messageObject, ...prev]);
      });
    } else {
      const q = query(
        collection(db, "message"),
        where("relation", "==", filter)
      );
      const dbMessages = await getDocs(q);
      dbMessages.forEach((document) => {
        const messageObject = {
          ...document.data(),
          id: document.id,
        };
        setMessages((prev) => [messageObject, ...prev]);
      });
    }
  };

  const clickTab = (filter: any) => {
    setMessages([]);
    setActive(filter);
    getMessages(filter);
  };
  useEffect(() => {
    getMessages("all");
  }, []);
  return (
    <>
      <div className="guest_book__title">
        <span>Message</span>
      </div>
      <div className="guest_book__tabs">
        <div
          className={`guest_book__tabs__tab ${active === "all" && "active"}`}
          onClick={() => clickTab("all")}
        >
          <span>전체</span>
        </div>
        <div
          className={`guest_book__tabs__tab ${
            active === "신랑 측" && "active"
          }`}
          onClick={() => clickTab("신랑 측")}
        >
          <span>신랑 측</span>
        </div>
        <div
          className={`guest_book__tabs__tab ${
            active === "신부 측" && "active"
          }`}
          onClick={() => clickTab("신부 측")}
        >
          <span>신부 측</span>
        </div>
      </div>
      <div className="guest_book__contents">
        <div>
          {messages.map((message) => (
            <div className="guest_book__message" key={message.id}>
              <div className="guest_book__message__header">
                <div className="guest_book__message__header__container">
                  <div className="guest_book__message__header__name">
                    {message.name}
                  </div>
                  <div className="guest_book__message__header__date">
                    {message.createdAt}
                  </div>
                </div>
                <div className="guest_book__message__header__container">
                  {active === "all" && (
                    <div
                      className={`guest_book__message__header__relation ${
                        message.relation === "신부 측" && "f"
                      }`}
                    >
                      {message.relation}
                    </div>
                  )}
                </div>
              </div>
              <div className="guest_book__message__content">
                <span>{message.message}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
