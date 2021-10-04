import React, { useEffect, useState } from "react";
import Typewriter from "typewriter-effect";

export const Introduction = () => {
  const [effectStart, seteffectStart] = useState(false);
  useEffect(() => {
    const setEffect = (e: any) => {
      if (e.target.scrollTop >= 410) {
        seteffectStart(true);
      }
    };
    window.addEventListener("scroll", setEffect, true);
    return () => window.removeEventListener("scroll", setEffect, true);
  }, []);
  return (
    <section className="introduction">
      <div className="introduction__title">
        {effectStart && (
          <Typewriter
            onInit={(typewriter) => {
              typewriter
                .typeString("안녕하세요. <br /> 정영석, 최수지입니다.")
                .start();
            }}
            options={{
              autoStart: false,
            }}
          />
        )}
      </div>
      <div className="introduction__content">
        <p>
          서로가 마주 보며 다져온 사랑을 <br />
          이제 함께 한 곳을 바라보며 걸어갈 수 있는 <br />
          큰 사랑으로 키우고자 합니다. <br />
          저희 두 사람이 <br />
          사랑의 이름으로 지켜나갈 수 있게 <br />
          앞날을 축복해 주시면 감사하겠습니다.
        </p>
      </div>
      <div className="introduction__people">
        정OO·송OO 의 장남 정영석 <br />
        최OO·강OO 의 차녀 최수지
      </div>
    </section>
  );
};
