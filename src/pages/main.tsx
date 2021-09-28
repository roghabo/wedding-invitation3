import React, { useEffect, useState } from "react";
import { Cover } from "../components/cover";
import { Footer } from "../components/footer";
import { Gallery } from "../components/gallery";
import { Guest } from "../components/guest";
import { Introduction } from "../components/introduction";
import { Location } from "../components/location";
import { Thanks } from "../components/thanks";

export const Main = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    window.onload = () => setLoading(false);
    window.Kakao.init("269b68bfe2b4ab87ffa190e8e00365e7");
  }, []);
  return (
    <>
      {loading ? (
        <span>loading</span>
      ) : (
        <div className="wrapper">
          <Cover />
          <Introduction />
          <Gallery />
          <Location />
          <Guest />
          <Thanks />
          <Footer />
        </div>
      )}
    </>
  );
};
