import React from "react";
import "./Boysfeed.css";
import Cards from "../../Source/Cards";
import HorizontalScroll from "react-scroll-horizontal";
import FestiveForBoys from "../API/Boysapi";

function BoysFestivefeed() {
  const child = { width: `100%`, height: `90%` };
  return (
    <div className="Boysfeed">
      <HorizontalScroll reverseScroll={true} animValues={50} style={child}>
        {FestiveForBoys.map((e) => {
          const { id } = e;
          return <Cards key={id} {...e} />;
        })}
      </HorizontalScroll>
    </div>
  );
}

export default BoysFestivefeed;
