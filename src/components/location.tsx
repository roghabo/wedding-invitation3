import React, { useEffect, useState } from "react";

export const Location = () => {
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
  }, []);
  return (
    <section className="location">
      <div className="location__title">
        <p>Location</p>
      </div>
      <div className="location__location">
        <span>
          아펠가모 광화문 B2 로스타뇨홀 <br />
          서울 종로구 우정국로 26
        </span>
      </div>
      <div className="location__time">
        <span>2021.11.03 오후 02:00</span>
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
            [분당선] 서울숲역 5번 출구 도보 2분 <br />
            [2호선] 뚝섬역 8번 출구 도보 5분
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
