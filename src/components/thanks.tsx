import React, { useEffect } from "react";
import thanksImg from "../images/thanks_img.png";
import share from "../images/share.png";

export const Thanks = () => {
  useEffect(() => {
    window.Kakao.Link.createCustomButton({
      container: "#kakao-link-btn",
      templateId: 62382,
      templateArgs: {
        title: "제목 영역입니다.",
        description: "설명 영역입니다.",
      },
    });
  }, []);
  return (
    <section className="thanks">
      <img src={thanksImg} alt="" />
      <div className="thanks__text-container">
        <div className="thanks__text-container__title">
          <p>Thanks</p>
        </div>
        <div className="thanks__text-container__content">
          <p>
            감사한 마음으로 서로 아끼며 살겠습니다. <br />
            모든 축하의 마음 감사합니다.
          </p>
        </div>
        <div className="Kakao">
          <div id="kakao-link-btn" className="thanks__share">
            <img src={share} alt="" />
            <span>모바일 청첩장 공유하기</span>
          </div>
        </div>
      </div>
    </section>
  );
};
