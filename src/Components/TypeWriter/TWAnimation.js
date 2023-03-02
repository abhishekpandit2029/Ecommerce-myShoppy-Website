import React from "react";
import { Typewriter } from "react-simple-typewriter";
import "./TWAnimation.css";

const TWAnimation = () => {
  return (
    <div className="TWAnimation">
      <h1 className="Animation">
        Be,{" "}
        <span className="eraseAnimation">
          <Typewriter
            words={["Real", "New", "You"]}
            cursor
            cursorStyle="_"
            typeSpeed={150}
            deleteSpeed={150}
            delaySpeed={1000}
            loop={false}
          />
        </span>
      </h1>
      <h1 className="Animation">
        Feel,{" "}
        <span className="eraseAnimation">
          <Typewriter
            words={["Pretty", "Sharp"]}
            cursor
            cursorStyle="_"
            typeSpeed={150}
            deleteSpeed={150}
            delaySpeed={1000}
            loop={false}
          />
        </span>
      </h1>
      <h1 className="Animation">
        Wear It,{" "}
        <span className="eraseAnimation">
          <Typewriter
            words={["Well", "Smart"]}
            cursor
            cursorStyle="_"
            typeSpeed={150}
            deleteSpeed={150}
            delaySpeed={1000}
            loop={false}
          />
        </span>
      </h1>
    </div>
  );
};
export default TWAnimation;
