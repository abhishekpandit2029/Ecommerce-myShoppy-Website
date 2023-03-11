import React from "react";
import "./SPMap.css";
import SelectedProductsAPI from "../ShopFeed/GirlsField/API/Pushapi"
import SelectedProduct from "./SelectedProduct"


function SPMap() {
  return ( 
    <div className="SPMap">
        {SelectedProductsAPI.map((e) => {
          const { id } = e;
          return <SelectedProduct key={id} {...e}/>;
        })}
    </div>
  ); 
} 

export default SPMap;
