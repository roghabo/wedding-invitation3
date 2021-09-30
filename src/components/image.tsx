import React from "react";
import man from "../images/man.png";
import woman from "../images/woman.png";

export const Image = () => {
  return (
    <section className="image">
      <div className="image__container">
        <img src={man} alt="" />
        <img className="image__woman" src={woman} alt="" />
      </div>
    </section>
  );
};
