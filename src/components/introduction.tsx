import React, { useEffect, useState } from "react";
import Typewriter from "typewriter-effect";

interface IIntroductionProps {
  name: string;
  text: any;
  groomFamily: string;
  brideFamily: string;
}

export const Introduction: React.FC<IIntroductionProps> = ({
  name,
  text,
  groomFamily,
  brideFamily,
}) => {
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
              typewriter.typeString(name).start();
            }}
            options={{
              autoStart: false,
            }}
          />
        )}
      </div>
      <div className="introduction__content">{text}</div>
      <div className="introduction__people">
        {groomFamily} <br />
        {brideFamily}
      </div>
    </section>
  );
};
