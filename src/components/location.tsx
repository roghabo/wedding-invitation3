import React, { useEffect, useState } from "react";
import Typewriter from "typewriter-effect";

export const Location = () => {
  const [effectStart, seteffectStart] = useState(false);
  const [active, setActive] = useState("subway");
  useEffect(() => {
    const map = new naver.maps.Map("map", {
      center: new naver.maps.LatLng(35.807987, 127.134939),
      zoom: 17,
    });
    new naver.maps.Marker({
      position: new naver.maps.LatLng(35.807987, 127.134939),
      map: map,
    });
    const setEffect = (e: any) => {
      if (e.target.scrollTop >= 1750) {
        seteffectStart(true);
      }
    };
    window.addEventListener("scroll", setEffect, true);
    return () => window.removeEventListener("scroll", setEffect, true);
  }, []);
  return (
    <section className="location">
      <div className="location__title">
        <p>Location</p>
      </div>
      <div className="location__location">
        {effectStart && (
          <Typewriter
            onInit={(typewriter) => {
              typewriter
                .typeString("바울교회 바울센터 <br /> 7층 아트홀")
                .start();
            }}
            options={{
              autoStart: false,
            }}
          />
        )}
      </div>
      <div className="location__time">
        <span>2019.10.12 오전 11:30</span>
      </div>
      <div className="location__tabs">
        <div
          className={`location__tabs__tab ${active === "subway" && "active"}`}
          onClick={() => setActive("subway")}
        >
          <span>지하철</span>
        </div>
        <div
          className={`location__tabs__tab ${active === "bus" && "active"}`}
          onClick={() => setActive("bus")}
        >
          <span>버스</span>
        </div>
        <div
          className={`location__tabs__tab ${active === "car" && "active"}`}
          onClick={() => setActive("car")}
        >
          <span>자가용</span>
        </div>
      </div>
      <div className="location__tabs__content">
        {active === "subway" && (
          <span>
            지하철 지하철 지하철 지하철 지하철 지하철
            <br />
            지하철 지하철 지하철 지하철 지하철
          </span>
        )}
        {active === "bus" && <span>100번 버스</span>}
        {active === "car" && <span>자가용</span>}
      </div>
      <div id="map" className="location__map-container" />

      <div
        className="location__map-btn"
        onClick={() =>
          window.open(
            "https://m.map.naver.com/map.naver?lat=35.807987&lng=127.134939&dlevel=&mapMode=&pinTitle=%EB%B0%94%EC%9A%B8%EA%B5%90%ED%9A%8C&boundary=&traffic=",
            "_blank"
          )
        }
      >
        <span>지도를 자세히 보려면 여기를 눌러주세요.</span>
      </div>
    </section>
  );
};
