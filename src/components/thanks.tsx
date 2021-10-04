import React, { useEffect, useState } from "react";
import Typewriter from "typewriter-effect";
import thanksImg from "../images/thanks_img.png";
import share from "../images/share.png";

export const Thanks = () => {
  const [effectStart, seteffectStart] = useState(false);
  useEffect(() => {
    window.Kakao.Link.createCustomButton({
      container: "#kakao-link-btn",
      templateId: 62382,
      templateArgs: {
        title: "제목 영역입니다.",
        description: "설명 영역입니다.",
      },
    });
    const setEffect = (e: any) => {
      if (e.target.scrollTop >= 3000) {
        seteffectStart(true);
      }
    };
    window.addEventListener("scroll", setEffect, true);
    return () => window.removeEventListener("scroll", setEffect, true);
  }, []);
  return (
    <section className="thanks">
      <img src={thanksImg} alt="" />
      <div className="thanks__text-container">
        <div className="thanks__text-container__title">
          <p>Thanks</p>
        </div>
        <div className="thanks__text-container__content">
          {effectStart && (
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .typeString(
                    "감사한 마음으로 서로 아끼며 살겠습니다. <br /> 모든 축하의 마음 감사합니다."
                  )
                  .start();
              }}
              options={{
                autoStart: false,
              }}
            />
          )}
        </div>

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
