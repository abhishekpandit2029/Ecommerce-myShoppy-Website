import React from "react";
import "../Watermark/Watermark.css"

function Watermark(props) {
  return (
      <div className="watermark__inner">
        <div className="watermarks">
          <span className="name">{props.name}</span>
          <br />
          <span className="name">{props.name}</span>
          <br />
          <span className="name">{props.name}</span>
          <br />
          <span className="name">{props.name}</span>
          <br />
          <span className="name">{props.name}</span>
          <br />
        </div>
      </div>
  );
}

export default Watermark;
