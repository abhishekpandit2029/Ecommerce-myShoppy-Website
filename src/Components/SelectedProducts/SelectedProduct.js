import React, { useState } from "react";
import "./SelectedProduct.css"; 

function SelectedProduct(props) {
  return (
    <>
      <div className="scard">
        <img src={props.itemSrc} alt="Denim Jeans"></img>
        <h6>{props.itemName}</h6>
        <p className="sprice">₹ {props.itemPrice}</p>
      </div>
    </> 
  );
}
export default SelectedProduct;
