import React from "react";

interface IIntroductionProps {
  groomImg: any;
  brideImg: any;
}

export const Images: React.FC<IIntroductionProps> = ({
  groomImg,
  brideImg,
}) => {
  return (
    <section className="image">
      <div className="image__container">
        <div className="image__container__image">{groomImg}</div>
        <div className="image__container__image">{brideImg}</div>
      </div>
    </section>
  );
};
