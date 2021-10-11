import React, { useEffect, useState } from "react";
import groom from "../images/groom.png";
import bride from "../images/bride.png";

export const Image = () => {
  const [groomScale, setGroomScale] = useState(1);
  const [brideScale, setBrideScale] = useState(1);
  useEffect(() => {
    const scrollEvent = (e: any) => {
      console.log(e.target.scrollTop);
      if (e.target.scrollTop > 10 && e.target.scrollTop <= 326) {
        setGroomScale(1 + e.target.scrollTop / 3160);
      }
      if (e.target.scrollTop > 50 && e.target.scrollTop <= 366) {
        setBrideScale(1 + e.target.scrollTop / 3160);
      }
    };
    window.addEventListener("scroll", scrollEvent, true);
    return () => window.removeEventListener("scroll", scrollEvent, true);
  }, []);
  return (
    <section className="image">
      <div className="image__container">
        <div className="image__container__image">
          <img
            src={groom}
            alt=""
            style={{ transform: `scale(${groomScale}, ${groomScale})` }}
          />
        </div>
        <div className="image__container__image">
          <img
            className="image__bride"
            src={bride}
            alt=""
            style={{ transform: `scale(${brideScale}, ${brideScale})` }}
          />
        </div>
      </div>
    </section>
  );
};
