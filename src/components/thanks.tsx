import React, { useEffect } from "react";
import share from "../images/share.png";

declare var process: {
  env: {
    REACT_APP_KAKAO_TEMPLATE_ID: string;
  };
};

interface IThanksProps {
  thanksImg: string;
  text: any;
}

export const Thanks: React.FC<IThanksProps> = ({ thanksImg, text }) => {
  useEffect(() => {
    window.Kakao.Link.createCustomButton({
      container: "#kakao-link-btn",
      templateId: parseInt(process.env.REACT_APP_KAKAO_TEMPLATE_ID),
      templateArgs: {
        title: "제목 영역입니다.",
        description: "설명 영역입니다.",
      },
    });
  }, []);
  return (
    <section className="thanks">
      <img className="thanks__img" src={thanksImg} alt="" />
      <div className="thanks__text-container">
        <div className="thanks__text-container__title">
          <span>Thanks</span>
        </div>
        <div className="thanks__text-container__content">{text}</div>
        <div className="Kakao">
          <div id="kakao-link-btn" className="thanks__share">
            <img src={share} alt="" />
            <span>모바일 청첩장 공유하기</span>
          </div>
        </div>
      </div>
      <div className="thanks__copyright">
        <span>Copyright 2021. SISUH. all rights reserved.</span>
      </div>
    </section>
  );
};
