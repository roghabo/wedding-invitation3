import React, { useEffect, useState } from "react";
import { Cover } from "../components/cover";
import { Gallery } from "../components/gallery";
import { Guest } from "../components/guest";
import { Introduction } from "../components/introduction";
import { Location } from "../components/location";
import { Thanks } from "../components/thanks";
import { css } from "@emotion/react";
import PropagateLoader from "react-spinners/PropagateLoader";
import { Image } from "../components/image";

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
          <Cover />
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
