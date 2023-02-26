import React from "react";
import "./Mfeed.css";

import Users from "../MenField/Users"
import Info from "./Info";
import Marquee from "react-fast-marquee";

function Mfeed() {
  return (
    <div className="mfeed">
      <div className="shopSection">
        <Marquee
          direction="left"
          pauseOnClick="true"
          pauseOnHover="true"
          speed={100}
          gradient={false}   
          delay={0}
          play={true} 
        >
          <div className="main">
            {Users.map((e) => {
              const { id } = e;
              return <Info key={id} {...e} />;
            })}
          </div>
        </Marquee>
      </div>
    </div>
  );
}

export default Mfeed;
