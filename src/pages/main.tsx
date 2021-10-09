import React, { useEffect, useState } from "react";
import { css } from "@emotion/react";
import PropagateLoader from "react-spinners/PropagateLoader";
import { Cover } from "../components/cover";
import { Image } from "../components/image";
import { Introduction } from "../components/introduction";
import { Gallery } from "../components/gallery";
import { Location } from "../components/location";
import { Guest } from "../components/guest";
import { Thanks } from "../components/thanks";
import mainImg from "../images/mainImg.png";

const override = css`
  display: block;
  margin: 0 auto;
`;

export const Main = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    window.Kakao.init(process.env.REACT_APP_KAKAO_API_KEY);
    setLoading(false);
  }, [setLoading]);
  return (
    <>
      {loading ? (
        <PropagateLoader
          color={"#1a1a1a"}
          loading={true}
          css={override}
          size={8}
        />
      ) : (
        <div className="wrapper">
          <Cover
            date="2019.10.12"
            location="바울교회 바울센터 7층 아트홀, AM 11:30"
            name="Jung youngseok x Choi Suji"
            mainImg={mainImg}
          />
          <Image />
          <Introduction />
          <Gallery />
          <Location />
          <Guest />
          <Thanks />
        </div>
      )}
    </>
  );
};
