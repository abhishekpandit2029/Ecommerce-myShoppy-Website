import React from "react";
import "./feed.css";
import { EthnicForGirls } from "../API/Girlsapi";
import Cards from "../../Source/Cards";
import HorizontalScroll from "react-scroll-horizontal";

function GirlsEthnicfeed() {
  const child = { width: `100%`, height: `90%` };
  return (
    <div className="mfeed">
      <HorizontalScroll reverseScroll={true} animValues={50} style={child}>
        {EthnicForGirls.map((e) => {
          const { id } = e;
          return <Cards key={id} {...e} />;
        })}
      </HorizontalScroll>
    </div>
  );
}

export default GirlsEthnicfeed;