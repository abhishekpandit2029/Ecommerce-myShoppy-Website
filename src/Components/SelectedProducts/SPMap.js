import React from "react";
import "./SPMap.css";
import SelectedProductsAPI from "../ShopFeed/GirlsField/API/Pushapi"
import SelectedProduct from "./SelectedProduct"


function SPMap() {
  const child = { width: `100%`, height: `90%`};
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
