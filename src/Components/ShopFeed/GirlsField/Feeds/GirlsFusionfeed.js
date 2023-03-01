import FusionForGirls from "../API/Girlsapi"
import React from "react";
import "./Girlsfeed.css";
import Cards from "../../Source/Cards";
import HorizontalScroll from "react-scroll-horizontal";

function GirlsFusionfeed() {
  const child = { width: `100%`, height: `90%` };
  return ( 
    <div className="Girlsfeed">
      <HorizontalScroll reverseScroll={true} animValues={50} style={child}>
        {FusionForGirls.map((e) => {
          const { id } = e;
          return <Cards key={id} {...e} />;
        })}
      </HorizontalScroll>
    </div>
  );
}

export default GirlsFusionfeed;
