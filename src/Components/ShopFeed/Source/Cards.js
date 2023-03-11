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
    // console.log(len);
  };

  function removeDuplicates(arr) {
    return arr.filter((item, index) => arr.indexOf(item) === index);
  }

  removeDuplicates(SelectedProductsAPI);

  return (
    <>
      <div className="card">
        <img src={props.itemSrc} alt="Denim Jeans"></img>
        <p className="itemName">{props.itemName}</p>
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
