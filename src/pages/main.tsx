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
import thanksImg from "../images/thanks_img.png";
import Img1 from "../images/gallery/img1.jpeg";
import Img2 from "../images/gallery/img2.jpeg";
import Img3 from "../images/gallery/img3.jpeg";
import Img4 from "../images/gallery/img4.jpeg";
import Img5 from "../images/gallery/img5.jpeg";
import Img6 from "../images/gallery/img6.jpeg";
import Img7 from "../images/gallery/img7.jpeg";
import Img8 from "../images/gallery/img8.jpeg";
import Img9 from "../images/gallery/img9.jpeg";
import Img10 from "../images/gallery/img10.jpeg";
import Img11 from "../images/gallery/img11.jpeg";
import Img12 from "../images/gallery/img12.jpeg";
import Img13 from "../images/gallery/img13.jpeg";
import Img14 from "../images/gallery/img14.jpeg";
import Img15 from "../images/gallery/img15.jpeg";
import Img16 from "../images/gallery/img16.jpeg";
import Img17 from "../images/gallery/img17.jpeg";
import Img18 from "../images/gallery/img18.jpeg";
import Img19 from "../images/gallery/img19.jpeg";
import Img20 from "../images/gallery/img20.jpeg";

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
          <Introduction
            name="안녕하세요. <br /> 정영석, 최수지입니다."
            text={
              <span>
                서로가 마주 보며 다져온 사랑을 <br />
                이제 함께 한 곳을 바라보며 걸어갈 수 있는 <br />
                큰 사랑으로 키우고자 합니다. <br />
                저희 두 사람이 <br />
                사랑의 이름으로 지켜나갈 수 있게 <br />
                앞날을 축복해 주시면 감사하겠습니다.
              </span>
            }
            groomFamily="정OO·송OO 의 장남 정영석"
            brideFamily="최OO·강OO 의 차녀 최수지"
          />
          <Gallery
            photos={[
              Img1,
              Img2,
              Img3,
              Img4,
              Img5,
              Img6,
              Img7,
              Img8,
              Img9,
              Img10,
              Img11,
              Img12,
              Img13,
              Img14,
              Img15,
              Img16,
              Img17,
              Img18,
              Img19,
              Img20,
            ]}
          />
          <Location
            latitude={35.807987}
            longitude={127.134939}
            date="2019.10.12 오전 11:30"
            location={
              <span>
                바울교회 바울센터 <br />
                7층 아트홀
              </span>
            }
            subway={
              <span>
                지하철 지하철 지하철 지하철 지하철 지하철
                <br />
                지하철 지하철 지하철 지하철 지하철
              </span>
            }
            bus={<span>100번 버스</span>}
            car={<span>자가용</span>}
          />
          <Guest
            maleAccounts={[
              "국민 200123-45-678900 정영석",
              "국민 200123-45-678900 최수지",
            ]}
            femaleAccounts={[
              "국민 200123-45-678900 최수지",
              "국민 200123-45-678900 정영석",
            ]}
          />
          <Thanks
            thanksImg={thanksImg}
            text={
              <span>
                감사한 마음으로 서로 아끼며 살겠습니다. <br />
                모든 축하의 마음 감사합니다.
              </span>
            }
          />
        </div>
      )}
    </>
  );
};
