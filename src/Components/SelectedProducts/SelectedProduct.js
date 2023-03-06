import React, { useState } from "react";
import "./SelectedProduct.css"; 

function SelectedProduct(props) {
  return (
    <>
      <div className="scard">
        <img src={props.itemSrc} alt="Denim Jeans"></img>
        <p className="sitemName">{props.itemName}</p>
        <p className="sprice">₹ {props.itemPrice}</p>
      </div>
    </> 
  );
}
export default SelectedProduct;
