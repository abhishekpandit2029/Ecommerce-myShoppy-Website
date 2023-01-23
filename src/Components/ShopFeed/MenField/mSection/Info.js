import React from "react";
import "./Info.css";

function Info(props) {
  return (
    <>
      <div class="card">
        <img src={props.itemSrc} alt="Denim Jeans"></img>
        <h5>{props.itemName}</h5>
        <p class="price">${props.itemPrice}</p>
         <p><button>Add to Cart</button></p> 
      </div>
    </>
  );
}
export default Info;
