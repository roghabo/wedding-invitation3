import React, { useEffect, useState } from "react";

interface IProjectProps {
  latitude: number;
  longitude: number;
  date: string;
  location: any;
  subway: any;
  bus: any;
}

export const Location: React.FC<IProjectProps> = ({
  latitude,
  longitude,
  date,
  location,
  subway,
  bus,
}) => {
  const [active, setActive] = useState("subway");
  useEffect(() => {
    const map = new naver.maps.Map("map", {
      center: new naver.maps.LatLng(latitude, longitude),
      zoom: 20,
    });
    new naver.maps.Marker({
      position: new naver.maps.LatLng(latitude, longitude),
      map: map,
    });
  }, [latitude, longitude]);
  return (
    <section className="location">
      <div className="location__title">
        <span>Location</span>
      </div>
      <div className="location__location">{location}</div>
      <div className="location__time">
        <span>{date}</span>
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
      </div>
      <div className="location__tabs__content">
        {active === "subway" && subway}
        {active === "bus" && bus}
      </div>
      <div className="location__map__container">
        <div id="map" className="location__map" />
      </div>
      <div
        className="location__map-btn"
        onClick={() =>
          window.open(
            `https://m.map.naver.com/map.naver?lat=${latitude}&lng=${longitude}&dlevel=&mapMode=&pinTitle=아펠가모%20광화문&boundary=&traffic=`,
            "_blank"
          )
        }
      >
        <span>지도를 자세히 보려면 여기를 눌러주세요.</span>
      </div>
    </section>
  );
};
