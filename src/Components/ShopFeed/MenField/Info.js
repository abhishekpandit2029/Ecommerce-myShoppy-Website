import React from "react";
import "./Info.css";

function Info(props) {
  return (
    <>
      <div className="card">
        <img src={props.itemSrc} alt="Denim Jeans"></img>
        <h6>{props.itemName}</h6>
        <p className="price">${props.itemPrice}</p>
        <p><button>Add to Cart</button></p> 
      </div>
    </>
  );
}
export default Info;
   