import React, { useState } from "react";
import "./Cards.css";

function Cards(props) {
  return (
    <> 
      <div className="card">
        <img src={props.itemSrc} alt="Denim Jeans"></img>
        <h6>{props.itemName}</h6>
        <p className="price">₹ {props.itemPrice}</p>
        <p><button class="btn btn-secondary button">Add to Cart</button></p> 
      </div> 
    </>
  ); 
}
export default Cards; 
      