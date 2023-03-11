import React from "react";
import "./SelectedProduct.css";

function SelectedProduct(props){
  return (
    <>
      <div className="scard">
        <img src={props.itemSrc} alt="Denim Jeans"></img>
        <p className="sitemName">{props.itemName}</p>
        <p className="sprice">₹ {props.itemPrice}</p>
        <p>
          <button class="btn btn-secondary button mr-2">
            Remove
          </button>
          <button class="btn btn-secondary button">Buy Now</button>
        </p>
      </div>
    </>
  );
}
export default SelectedProduct;
