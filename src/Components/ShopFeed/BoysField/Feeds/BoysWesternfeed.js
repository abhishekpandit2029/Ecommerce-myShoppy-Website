import React from "react";
import "./Boysfeed.css";
import Cards from "../../Source/Cards";
import { WesternForBoys } from "../API/Boysapi";
import HorizontalScroll from "react-scroll-horizontal";

function BoysWesternfeed() {
  const child = { width: `100%`, height: `90%` };
  return (
    <div className="Boysfeed">
      <HorizontalScroll reverseScroll={true} animValues={50} style={child}>
        {WesternForBoys.map((e) => {
          const { id } = e;
          return <Cards key={id} {...e} />;
        })}
      </HorizontalScroll>
    </div>
  );
}

export default BoysWesternfeed;
