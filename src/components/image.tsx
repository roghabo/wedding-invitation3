import React from "react";

interface IIntroductionProps {
  groomImg: string;
  brideImg: string;
}

export const Image: React.FC<IIntroductionProps> = ({ groomImg, brideImg }) => {
  return (
    <section className="image">
      <div className="image__container">
        <div className="image__container__image">
          <img src={groomImg} alt="" />
        </div>
        <div className="image__container__image">
          <img src={brideImg} alt="" />
        </div>
      </div>
    </section>
  );
};
