import React from "react";
import "./Girlsfeed.css";
import Cards from "../../Source/Cards";
import { WesternForGirls } from "../API/Girlsapi";
import HorizontalScroll from "react-scroll-horizontal";

function GirlsWesternfeed() {
  const child = { width: `100%`, height: `90%` };
  return (
    <div className="Girlsfeed">
      <HorizontalScroll reverseScroll={true} animValues={50} style={child}>
        {WesternForGirls.map((e) => {
          const { id } = e;
          return <Cards key={id} {...e} />;
        })}
      </HorizontalScroll>
    </div>
  );
}

export default GirlsWesternfeed; 