import React from "react";
import "./Allcards.css"

function Allcards(props) {
  return (
    <div className="Allcard">
        <img src={props.itemSrc} alt="Denim Jeans"></img>
        <h6>{props.itemName}</h6>
        <p className="Allprice">₹ {props.itemPrice}</p>
        <p><button class="btn btn-secondary Allbutton">Add to Cart</button></p> 
    </div> 
  );
}

export default Allcards;
