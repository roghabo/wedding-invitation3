import React, { useEffect, useState } from "react";
import { css } from "@emotion/react";
import PropagateLoader from "react-spinners/PropagateLoader";
import { Cover } from "../components/cover";
import { Images } from "../components/image";
import { Introduction } from "../components/introduction";
import { Gallery } from "../components/gallery";
import { Location } from "../components/location";
import { Guest } from "../components/guest";
import { Thanks } from "../components/thanks";
import mainImg from "../images/kakaoMain.jpg";
import thanksImg from "../images/thanksImg.jpg";
import Img1 from "../images/gallery/img1.jpg";
import Img3 from "../images/gallery/img3.jpg";
import Img5 from "../images/gallery/img5.jpg";
import Img6 from "../images/gallery/img6.jpg";
import Img7 from "../images/gallery/img7.jpg";
import Img8 from "../images/gallery/img8.jpg";
import Img9 from "../images/gallery/img9.jpg";
import Img10 from "../images/gallery/img10.jpg";
import Img11 from "../images/gallery/img11.jpg";
import Img12 from "../images/gallery/img12.jpg";
import Img13 from "../images/gallery/img13.jpg";
import Img14 from "../images/gallery/img14.jpg";
import Img15 from "../images/gallery/img15.jpg";
import Img16 from "../images/gallery/img16.jpg";
import Img17 from "../images/gallery/img17.jpeg";
import groom from "../images/groom.jpg";
import bride from "../images/bride.jpg";

const override = css`
  display: block;
  margin: 0 auto;
`;

export const Main = () => {
  const [mainImgLoading, setMainImgLoading] = useState(false);
  const [brideImgLoading, setBrideImgLoading] = useState(false);
  const [groomImgLoading, setGroomImgLoading] = useState(false);
  useEffect(() => {
    window.Kakao.init(process.env.REACT_APP_KAKAO_API_KEY);
    const img = new Image();
    img.onload = () => {
      setMainImgLoading(true);
    };
    img.src = mainImg;
    const brideImg = new Image();
    brideImg.onload = () => {
      setBrideImgLoading(true);
    };
    brideImg.src = bride;
    const groomImg = new Image();
    groomImg.onload = () => {
      setGroomImgLoading(true);
    };
    groomImg.src = groom;
    return () => clearTimeout();
  }, [setMainImgLoading]);
  return (
    <>
      {!mainImgLoading && !brideImgLoading && !groomImgLoading ? (
        <PropagateLoader
          color={"#1a1a1a"}
          loading={true}
          css={override}
          size={8}
        />
      ) : (
        <div className="wrapper">
          <Cover
            date="2021.11.27"
            location="아펠가모 광화문 LL층, PM 3:30"
            name="Oh Hyeonmyeong x Seo Jooeun"
            mainImg={
              <img
                src={mainImg}
                alt=""
                onLoad={() => setMainImgLoading(true)}
              />
            }
          />
          <Images
            groomImg={
              <img src={groom} alt="" onLoad={() => setGroomImgLoading(true)} />
            }
            brideImg={
              <img src={bride} alt="" onLoad={() => setBrideImgLoading(true)} />
            }
          />
          <Introduction
            name="안녕하세요. <br /> 오현명, 서주은입니다."
            text={
              <span>
                저희 두 사람이 사랑과 믿음으로 <br />
                한 가정을 이루게 되었습니다. <br />
                오셔서 저희의 앞날을 <br />
                축복해주시고 <br />
                격려해주시면 더없는 기쁨이 되겠습니다.
              </span>
            }
            groomFamily="오창록·윤숙경 의 장남 오현명"
            brideFamily="서종욱·주화숙 의 장녀 서주은"
          />
          <Gallery
            photos={[
              Img1,
              Img3,
              Img9,
              Img10,
              Img6,
              Img7,
              Img17,
              Img8,
              Img11,
              Img12,
              Img14,
              Img15,
              Img5,
              Img16,
              Img13,
            ]}
          />
          <Location
            latitude={37.574848}
            longitude={126.978994}
            date="2021.11.27 오후 3:30"
            location={
              <span>
                아펠가모 광화문 LL층 <br />
                서울 종로구 종로 1길 50
              </span>
            }
            subway={
              <>
                <div className="location__tabs__content__subway">
                  <div className="location__tabs__content__subway__container">
                    <div className="location__tabs__content__subway__title">
                      <span>광화문역</span>
                    </div>
                    <div className="location__tabs__content__subway__num n5">
                      <span>5</span>
                    </div>
                  </div>
                  <div>
                    <span>
                      2번 출구에서 경복궁 방면으로 직진 후 역사박물관에서
                      우회전후, 사거리에서 좌측 대각선 첫번째 건물
                    </span>
                  </div>
                </div>
                <div className="location__tabs__content__subway">
                  <div className="location__tabs__content__subway__container">
                    <div className="location__tabs__content__subway__title">
                      <span>경복궁역</span>
                    </div>
                    <div className="location__tabs__content__subway__num n3">
                      <span>3</span>
                    </div>
                  </div>
                  <div>
                    <span>
                      6번 출구에서 광화문 삼거리 건넌 후 열린시민마당 건너편
                      건물
                    </span>
                  </div>
                </div>
              </>
            }
            bus={
              <>
                <div className="location__tabs__content__bus">
                  <div className="location__tabs__content__bus__title blue">
                    간선
                  </div>
                  <div>
                    <span>
                      103, 109, 150, 171, 272, 401, 402(심야), 406, 408, 606,
                      607, 700, 704, 706, 707, 708
                    </span>
                  </div>
                </div>

                <div className="location__tabs__content__bus">
                  <div className="location__tabs__content__bus__title green">
                    <span>지선</span>
                  </div>
                  <div>
                    <span>1020, 1711, 7016, 7018, 7022, 7212, 7025</span>
                  </div>
                </div>
                <div className="location__tabs__content__bus">
                  <div className="location__tabs__content__bus__title black">
                    <span>마을버스</span>
                  </div>
                  <div>
                    <span>
                      종로 09, 종로 11 <br />* 세종문화회관, KT광화문지사,
                      경복궁 정류장 하차 더 케이 트윈타워 LL층
                    </span>
                  </div>
                </div>
              </>
            }
          />
          <Guest
            maleAccounts={[
              { name: "오창록", account: "신한 605-02-117249 오창록" },
              { name: "오현명", account: "우리 1002-180-296587 오현명" },
            ]}
            femaleAccounts={[
              { name: "서종욱", account: "신한 110-373-659490 서종욱" },
              { name: "서주은", account: "우리 1002-446-237027 서주은" },
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
