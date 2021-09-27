import React, { useEffect } from "react";

export const Footer = () => {
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
    <div className="Kakao">
      <a id="kakao-link-btn" href="#">
        <img
          src="//developers.kakao.com/assets/img/about/logos/kakaolink/kakaolink_btn_medium.png"
          alt=""
        />
      </a>
    </div>
  );
};
