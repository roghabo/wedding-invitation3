import React, { useEffect, useState } from "react";
import { Cover } from "../components/cover";
import { Gallery } from "../components/gallery";
import { Guest } from "../components/guest";
import { Introduction } from "../components/introduction";
import { Location } from "../components/location";
import { Thanks } from "../components/thanks";
import { css } from "@emotion/react";
import PropagateLoader from "react-spinners/PropagateLoader";

const override = css`
  display: block;
  margin: 0 auto;
`;
export const Main = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    window.Kakao.init("269b68bfe2b4ab87ffa190e8e00365e7");
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
