import React, { useEffect, useState } from "react";

interface ICoverProps {
  date: string;
  location: string;
  name: string;
  mainImg: string;
}

export const Cover: React.FC<ICoverProps> = ({
  date,
  location,
  name,
  mainImg,
}) => {
  let y = 0;
  const [scrollTop, setScrollTop] = useState(0);

  useEffect(() => {
    const scrollEvent = (e: any) => {
      if (e.target.scrollTop <= 42 * 5) {
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
          <span>{date}</span>
        </div>
        <div className="cover__location">
          <span>
            {location}
            <br />
            {name}
          </span>
        </div>
      </div>
    </section>
  );
};
