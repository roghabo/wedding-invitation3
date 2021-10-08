import React, { useEffect, useState } from "react";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../fbase";
import PropagateLoader from "react-spinners/PropagateLoader";
import { css } from "@emotion/react";

const override = css`
  display: block;
  margin: 0 auto;
`;
export const GuestList = () => {
  const [loading, setLoading] = useState(true);
  const [active, setActive] = useState("all");
  const [totalCount, setTotalCount] = useState(0);
  const [attends, setAttends] = useState<any[] | []>([]);
  const getattends = async (filter: any) => {
    if (filter === "all") {
      let total = 0;
      const dbattends = await getDocs(collection(db, "attend"));
      dbattends.forEach((document) => {
        const messageObject = {
          ...document.data(),
          id: document.id,
        };
        total += parseInt(document.data().count);
        setAttends((prev) => [messageObject, ...prev]);
      });
      setTotalCount(total);
    } else {
      let total = 0;
      const q = query(
        collection(db, "attend"),
        where("relation", "==", filter)
      );
      const dbattends = await getDocs(q);
      dbattends.forEach((document) => {
        const messageObject = {
          ...document.data(),
          id: document.id,
        };
        total += parseInt(document.data().count);
        setAttends((prev) => [messageObject, ...prev]);
      });
      setTotalCount(total);
    }
  };

  const clickTab = (filter: any) => {
    setAttends([]);
    setActive(filter);
    getattends(filter);
  };
  useEffect(() => {
    getattends("all");
    setLoading(false);
  }, []);
  return (
    <>
      <div className="guest_book__title">
        <span>List</span>
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
      <div className="guest_book__totalcount">
        {active === "all" ? (
          <span>
            총 <span style={{ color: "#EEAA25" }}>{totalCount}</span>명이
            참석합니다.
          </span>
        ) : (
          <span>
            {active}
            <span style={{ color: "#EEAA25" }}> {totalCount}</span>명이
            참석합니다.
          </span>
        )}
      </div>
      <div className="guest_book__contents">
        <div className="guest_book__attend__header">
          <div className="guest_book__attend__header__column">No.</div>
          <div className="guest_book__attend__header__column">이름</div>
          <div className="guest_book__attend__header__column">총 인원</div>
          <div className="guest_book__attend__header__column">관계</div>
        </div>
        {loading ? (
          <div className="guest_book__loader">
            <PropagateLoader
              color={"#1a1a1a"}
              loading={true}
              css={override}
              size={8}
            />
          </div>
        ) : (
          <div>
            {attends.map((attend, index) => (
              <div className="guest_book__attend" key={attend.id}>
                <div className="guest_book__attend__column">{index + 1}</div>
                <div className="guest_book__attend__column">{attend.name}</div>
                <div className="guest_book__attend__column">{attend.count}</div>
                <div className="guest_book__attend__column">
                  {attend.relation}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};
