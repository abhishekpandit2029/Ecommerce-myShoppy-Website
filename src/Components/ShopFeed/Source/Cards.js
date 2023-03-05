import React, { useState } from "react";
import "./Cards.css";
import SelectedProductsAPI from "../GirlsField/API/Pushapi";

function Cards(props) {
  const id = props.id;
  const itemSrc = props.itemSrc;
  const itemName = props.itemName;
  const itemPrice = props.itemPrice;

  let myObject = {
    Selectedid: id,
    SelecteditemName: itemName,
    SelecteditemSrc: itemSrc,
    SelecteditemPrice: itemPrice,
  };

  const OnC = () => {
    const myObject = { id, itemSrc, itemName, itemPrice };
    SelectedProductsAPI.push(myObject);
    console.log(SelectedProductsAPI);
    const len = SelectedProductsAPI.length;
    console.log(len);
  };

  return (
    <>
      <div className="card">
        <img src={props.itemSrc} alt="Denim Jeans"></img>
        <h6>{props.itemName}</h6>
        <p className="price">₹ {props.itemPrice}</p>
        <p>
          <button class="btn btn-secondary button" onClick={OnC}>
            Add to Cart
          </button>
          {/* <button class="btn btn-secondary button" onClick={OnC}>
            Buy Now
          </button> */}
        </p>
      </div>
    </>
  );
}

export default Cards;
